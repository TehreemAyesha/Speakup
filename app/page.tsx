import Link from "next/link";
import Image from "next/image";

const features = [
  { icon: "◈", title: "Learn", text: "Build the foundations of a clear, convincing case at your own pace." },
  { icon: "✦", title: "Get Critiqued", text: "Receive focused feedback on your arguments, evidence, and phrasing." },
  { icon: "◌", title: "Practice Delivery", text: "Turn recording time into useful insight on pace, pauses, and filler words." },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <div>
          <div className="eyebrow">● New: Advanced Rebuttal Training</div>
          <h1>SpeakUp: <em>Your debate mentor,</em> whenever you need one.</h1>
          <p>Empowering students with AI-driven debate coaching. Master logic, refine your delivery, and receive instant, objective feedback on your arguments in a safe, scholarly environment.</p>
          <div className="hero-actions"><Link href="/lessons" className="button button-primary">Get Started</Link><Link href="/practice" className="text-link">View Demo</Link></div>
        </div>
        <div className="hero-art">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85"
            alt="Students preparing for a public-speaking debate"
            width={800}
            height={600}
            priority
            sizes="(max-width: 700px) 100vw, 440px"
          />
          <div className="hero-insight" aria-label="Strong evidence progress">
            <span aria-hidden="true">✓</span>
            <div><strong>Strong Evidence</strong><i><b /></i></div>
          </div>
        </div>
      </section>
      <section className="feature-section">
        <div><h2>Built for Intellectual Growth</h2></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><div className="feature-icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
      </section>
    </main>
  );
}
