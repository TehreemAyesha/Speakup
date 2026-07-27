"use client";
export function guestId() { const key = "speakup-guest-id"; let id = localStorage.getItem(key); if (!id) { id = crypto.randomUUID(); localStorage.setItem(key, id); } return id; }
