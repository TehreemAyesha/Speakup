# SpeakUp 🎙️

Vercel public link

https://speakup-m8zl-f85s8u7cm-tehreem5.vercel.app?_vercel_share=6gcyd1KFOO5bG9HagendoTJ8C2Nda5kp

> **An AI-powered debate coaching platform designed to give students instant, personalized feedback without needing access to expensive debate mentors.**

SpeakUp helps novice and intermediate debaters refine their arguments, improve speech delivery mechanics, learn core debate strategies, and ask real-time debate questions using artificial intelligence.

---

## ✨ Features

- **📚 Interactive Lessons (`/lessons`)**: Standard curriculum covering *Argument Structure*, *Building Rebuttals*, *Delivery Basics*, and *Handling Cross-Examination*. Progress is tracked and saved per guest/user in Firebase Firestore.
- **✍️ Case Practice (`/practice`)**: Submit debate cases or speeches for instant AI text critique, constructive feedback, and weakness analysis powered by Groq's LLMs.
- **🎙️ Delivery Lab (`/delivery`)**: Record audio directly in the browser or upload audio files (MP3, WAV, WebM). Features inline playback and AI transcription via Groq Whisper to analyze speed (WPM), filler words, and pauses.
- **💬 AI Debate Assistant (Floating Widget)**: A lightweight RAG-enabled chatbot powered by Groq with an injected debate knowledge base to answer questions on-demand.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database & Auth:** [Firebase Firestore](https://firebase.google.com/docs/firestore)
- **AI Infrastructure:** [Groq Cloud API](https://groq.com/)
  - **Text Generation & RAG:** `llama-3.3-70b-versatile`
  - **Audio Speech-to-Text:** `whisper-large-v3`
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.0 or higher)
- [Git](https://git-scm.com/)

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone [https://github.com/TehreemAyesha/Speakup.git](https://github.com/TehreemAyesha/Speakup.git)
cd Speakup
npm install

```

### 3. Environment Setup

Create a `.env.local` file in the root directory of your project:

```bash
touch .env.local

```

Add your Groq API key and Firebase configuration to `.env.local`:

```env
GROQ_API_KEY=your_groq_api_key_here

NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAI_tKEcRqu20aoErqB4_esRxRiSOozk-Y
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=speakup-6e558.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=speakup-6e558
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=speakup-6e558.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1091248204252
NEXT_PUBLIC_FIREBASE_APP_ID=1:1091248204252:web:8b99311f55f57504784719

```

### 4. Running Locally

Start the Next.js development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🌐 Deployment

This project is deployed using [Vercel](https://vercel.com/).

To deploy your own instance:

1. Push your repository to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Add all environment variables listed above in **Project Settings → Environment Variables**.
4. Trigger a deployment.

---

## 📂 Project Structure

```text
Speakup/
├── app/
├── components/         # Reusable UI components & Chatbot widget
├── lib/                # Firebase initialization and utility helpers
├── public/             # Static assets
├── .env.local          # Environment secrets (git-ignored)
└── package.json

```

```

```
