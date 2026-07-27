# SpeakUp

SpeakUp is an AI debate coach for students who do not have reliable access to a debate mentor. Learn core skills, get a specific critique of a written case, and practice delivery with audio feedback.

## Tech stack

- Next.js App Router, TypeScript, Tailwind CSS
- Firebase client SDK: Firestore for guest progress/practice records and Storage for uploaded recordings
- Groq API via server-only Next.js route handlers: `llama-3.3-70b-versatile` for critique/chat and `whisper-large-v3` for transcripts

## Setup

1. Install dependencies: `npm install`
2. Copy `.env.local.example` to `.env.local`.
3. Add a Groq API key and your Firebase web-app configuration values.
4. In Firebase, enable Firestore and Storage, then configure development security rules appropriate for your project.
5. Start the app with `npm run dev`.

Groq calls are made only from `/api/critique`, `/api/chat`, and `/api/transcribe`; the browser never receives `GROQ_API_KEY`.

## Known Limitations

Pitch/tone analysis and support for other debate formats are intentionally out of scope. SpeakUp focuses on transparent, useful feedback rather than scoring a student against an arbitrary ideal.
