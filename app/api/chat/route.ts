import Groq from "groq-sdk";

export const runtime = "nodejs";

const knowledgeBase = `You are SpeakUp’s debate helper. Answer only using this debate knowledge base; for any off-topic question, politely say you can help with debate fundamentals instead. Argument structure: a Claim is the precise position; Evidence is a credible fact, example, or source; a Warrant explains why the evidence proves the claim; an Impact tells the judge why it matters, who is affected, and how seriously. Clear signposting helps: label contentions and explain the link between each part. Rebuttal techniques: first accurately identify the opponent’s argument. A take-out shows their evidence, assumption, or logical link is unreliable. A turn shows their point actually supports your side. Weighing compares impacts by magnitude, likelihood, timeframe, and reversibility. Do not merely repeat your case; explain the clash and why it changes the decision. Openings should state a clear thesis, preview main contentions, and define necessary terms fairly. Closings should crystallize: compare the most important unresolved impacts and state the ballot story in a few plain sentences. Delivery tips: speak at a pace that preserves clarity, pause after claims and before impacts, emphasize key words, and swap filler words for a short silent breath. Cross-examination has a purpose: ask concise questions that clarify definitions, sources, links, and assumptions; listen for concessions; use follow-ups. When answering cross-examination, answer directly, distinguish what you know from what you infer, and return to your argument’s strongest support. Be concise, supportive, and practical.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    if (!Array.isArray(messages)) return Response.json({ error: "Messages are required." }, { status: 400 });
    if (!process.env.GROQ_API_KEY) return Response.json({ error: "The helper is not configured yet. Add GROQ_API_KEY to .env.local." }, { status: 503 });

    const safeMessages = messages.slice(-10).map((message: unknown) => {
      const item = message as { role: string; content: string };
      return { role: item.role === "assistant" ? "assistant" as const : "user" as const, content: String(item.content).slice(0, 2000) };
    });
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const result = await groq.chat.completions.create({ model: "llama-3.3-70b-versatile", messages: [{ role: "system", content: knowledgeBase }, ...safeMessages] });
    return Response.json({ reply: result.choices[0]?.message?.content || "I’m not sure how to put that. Try asking about claims, rebuttals, delivery, or cross-examination." });
  } catch (error) {
    console.error("Chat error", error);
    return Response.json({ error: "The debate helper is unavailable. Please try again." }, { status: 500 });
  }
}
