"use client";

import { ChangeEvent, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { guestId } from "../lib/guest";

type Stats = {
  wpm: number;
  fillerCount: number;
  pauseCount: number;
  pauseSeconds: number;
  verdict: string;
};

export default function DeliveryPage() {
  const [file, setFile] = useState<File | null>(null);
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const recorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  function choose(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setStats(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(f ? URL.createObjectURL(f) : null);
  }

  async function record() {
    setError("");
    try {
      if (!recording) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const media = new MediaRecorder(stream);
        chunks.current = [];
        media.ondataavailable = (e) => chunks.current.push(e.data);
        media.onstop = () => {
          const blob = new Blob(chunks.current, { type: media.mimeType || "audio/webm" });
          const newFile = new File([blob], "speakup-recording.webm", { type: blob.type });
          setFile(newFile);
          if (previewUrl) URL.revokeObjectURL(previewUrl);
          setPreviewUrl(URL.createObjectURL(newFile));
          stream.getTracks().forEach((t) => t.stop());
        };
        recorder.current = media;
        media.start();
        setRecording(true);
      } else {
        recorder.current?.stop();
        setRecording(false);
      }
    } catch {
      setError("Your microphone couldn't be accessed. Check your browser permission or upload an audio file instead.");
    }
  }

  async function analyze() {
    if (!file) {
      setError("Record or choose an audio file first.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const form = new FormData();
      form.append("audio", file);
      const res = await fetch("/api/transcribe", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStats(data.stats);

      try {
        await addDoc(collection(db, "guests", guestId(), "deliveryPractices"), {
          stats: data.stats,
          createdAt: serverTimestamp(),
        });
      } catch {
        /* Persistence fails gracefully without interrupting analysis */
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't analyze that recording. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-wrap tool-layout">
      <div className="page-intro">
        <div className="eyebrow">DELIVERY LAB</div>
        <h1 className="page-title">Hear the habits behind your words.</h1>
        <p className="subtle">Record a short speech or upload an audio file for a simple pace-and-pauses check.</p>
      </div>

      <section className="panel">
        <div className="upload-zone">
          <div className="record-row">
            <button className="button button-secondary" onClick={record}>
              {recording ? "Stop recording" : "● Record audio"}
            </button>
            <label className="button button-primary">
              Upload audio
              <input type="file" accept="audio/*" onChange={choose} hidden />
            </label>
          </div>
          <p className="file-name">
            {recording
              ? "Recording in progress…"
              : file
              ? `Ready: ${file.name}`
              : "MP3, WAV, M4A, WebM, or another browser-supported audio format"}
          </p>
          {previewUrl && (
            <audio controls src={previewUrl} className="audio-preview" style={{ width: "100%", marginTop: "12px" }} />
          )}
        </div>

        <div className="action-row">
          <button className="button button-primary" onClick={analyze} disabled={loading || recording}>
            {loading ? "Listening…" : "Analyze delivery"}
          </button>
        </div>

        {error && <div className="error">{error}</div>}

        {stats && (
          <div className="feedback">
            <h2>Your delivery snapshot</h2>
            <div className="stats">
              <div className="stat-card">
                <strong>{stats.wpm}</strong>
                <span>words per minute</span>
              </div>
              <div className="stat-card">
                <strong>{stats.fillerCount}</strong>
                <span>filler words</span>
              </div>
              <div className="stat-card">
                <strong>{stats.pauseCount}</strong>
                <span>long pauses · {stats.pauseSeconds}s total</span>
              </div>
            </div>
            <div className="verdict">{stats.verdict}</div>
          </div>
        )}
      </section>
    </main>
  );
}