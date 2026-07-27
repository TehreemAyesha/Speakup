import Groq from "groq-sdk";

export const runtime = "nodejs";

const coachPrompt = "You are an expert debate coach. Analyze structure, logical gaps, weak/unsupported claims, missing rebuttals, redundant phrasing. Quote 2-3 specific lines from the student's text and give a specific improvement suggestion with one-sentence reasoning for each. Be specific, never generic. Return ONLY valid JSON shaped as {summary:string,feedback:[{quote:string,suggestion:string,reasoning:string}]}.";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    if (typeof text !== "string" || text.trim().length < 30) return Response.json({ error: "Please provide a longer debate case." }, { status: 400 });
    if (!process.env.GROQ_API_KEY) return Response.json({ error: "The coach is not configured yet. Add GROQ_API_KEY to .env.local." }, { status: 503 });

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const result = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" },
      messages: [{ role: "system", content: coachPrompt }, { role: "user", content: text.slice(0, 12000) }],
    });
    const parsed = JSON.parse(result.choices[0]?.message?.content || "{}");
    return Response.json({ summary: parsed.summary || "Here are a few places to strengthen the case.", feedback: Array.isArray(parsed.feedback) ? parsed.feedback : [] });
  } catch (error) {
    console.error("Critique error", error);
    return Response.json({ error: "The critique service is unavailable. Please try again." }, { status: 500 });
  }
}
