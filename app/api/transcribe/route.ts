import Groq from "groq-sdk";

export const runtime = "nodejs";
type Word = { word: string; start: number; end: number };

export async function POST(request: Request) {
  try {
    if (!process.env.GROQ_API_KEY) return Response.json({ error: "The delivery coach is not configured yet. Add GROQ_API_KEY to .env.local." }, { status: 503 });
    const form = await request.formData();
    const audio = form.get("audio");
    if (!(audio instanceof File)) return Response.json({ error: "Please include an audio file." }, { status: 400 });

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const transcript = await groq.audio.transcriptions.create({ file: audio, model: "whisper-large-v3", response_format: "verbose_json", timestamp_granularities: ["word"] });
    const words = ((transcript as unknown as { words?: Word[] }).words || []).filter((word) => typeof word.start === "number" && typeof word.end === "number");
    if (!words.length) return Response.json({ error: "We couldn't read word timestamps from that audio." }, { status: 422 });

    const duration = Math.max(words[words.length - 1].end - words[0].start, 0.1);
    const wpm = Math.round(words.length / (duration / 60));
    const fillerCount = (words.map((word) => word.word).join(" ").match(/\b(um|uh|like|so|you know)\b/gi) || []).length;
    let pauseCount = 0, pauseSeconds = 0;
    for (let index = 1; index < words.length; index++) { const gap = words[index].start - words[index - 1].end; if (gap > 1.5) { pauseCount++; pauseSeconds += gap; } }
    const verdict = wpm > 175 ? "Your pace is brisk. Try a small pause after each main claim so the judge can absorb it." : wpm < 105 ? "Your pace is measured. Keep the energy up by emphasizing the key words in each claim." : fillerCount > 5 ? "Your pace is in a clear range. Replacing a few filler words with a quiet breath will make it sound even more deliberate." : "Your pace is in a clear, judge-friendly range. Keep using pauses to give your impacts room to land.";
    return Response.json({ stats: { wpm, fillerCount, pauseCount, pauseSeconds: Math.round(pauseSeconds * 10) / 10, verdict } });
  } catch (error) {
    console.error("Transcription error", error);
    return Response.json({ error: "We couldn’t transcribe that audio. Try a shorter or clearer recording." }, { status: 500 });
  }
}
