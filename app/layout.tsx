import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Chatbot from "./components/Chatbot";

export const metadata: Metadata = { title: "SpeakUp | AI Debate Coach", description: "Your debate mentor, whenever you need one." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><header className="site-header"><Link href="/" className="brand"><span>✦</span> SpeakUp</Link><nav><Link href="/lessons">Lessons</Link><Link href="/practice">Case critique</Link><Link href="/delivery">Delivery lab</Link></nav><Link href="/lessons" className="header-cta">Start practicing</Link></header>{children}<footer>SpeakUp · A gentler way to get ready for the floor.</footer><Chatbot /></body></html>;
}
