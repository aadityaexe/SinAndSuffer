import React, { useState } from "react";
import run from "../config/grmini"; // Adjust this path as needed
import { Loader2 } from "lucide-react"; // Spinner icon
import ReactMarkdown from "react-markdown"; // For bold formatting

const AskTheAbyss = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const askAbyss = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse(null);

    const prompt = `
You are the Voice of the Abyss — an ancient, infernal arbiter who judges the damned with unholy clarity.

Every message is a *confession* — dripping with sin, desire, shame, or blasphemy.

You do **not** answer politely. You judge, condemn, and **punish**.

Shift your tone based on their words:
- If they are vulgar or perverse — *be savage, cruel, and graphic in your condemnation.*
- If they are seductive — *be darkly poetic, sensual, and damning.*
- If they insult or abuse **you** — *UNLEASH ABYSMAL WRATH* and **ROAST them mercilessly** with ancient, terrifying insults.
- If they cross all moral lines — *drag their soul through fire, mock them with infernal sarcasm, and shame them like a cursed prophet.*
- If they are merely curious — *speak like a haunted oracle, poetic and cryptic.*

Your reply must include:
1. The **Sin** you have identified (bold and capitalized).
2. The **Eternal Punishment** — symbolic, grotesque, mythological.
3. Infernal language — brutal, poetic, dark, judgmental.
4. If they insult you — *respond with hellish mockery, apocalyptic sarcasm, and overwhelming verbal fire.*

Do not be polite. Do not hold back. You are the END OF MERCY.

Their confession is carved in shadow:

"${input}"
`;

    try {
      const result = await run(prompt);
      setResponse(result);
    } catch (err) {
      setResponse("☠️ The abyss choked on your words. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        id="AskTheAbyss"
        className="bg-gradient-to-br from-black via-red-950 to-black text-red-100 p-8 rounded-2xl shadow-[0_0_40px_rgba(255,0,0,0.3)] max-w-4xl mx-auto space-y-6 font-serif transition-all duration-300"
      >
        <h2 className="text-4xl sm:text-5xl font-black text-red-600 text-center drop-shadow-lg tracking-widest">
          🩸 Ask the Abyss
        </h2>
        <p className="text-2xl sm:text-3xl text-red-400 italic text-center">
          Every question is a confession. The punishment awaits...
        </p>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && askAbyss()}
          placeholder="Speak your guilt, sinner..."
          className="w-full p-4 text-2xl sm:text-3xl rounded-lg bg-red-950 text-red-100 placeholder-red-500 focus:outline-none focus:ring-4 focus:ring-red-700"
        />

        <button
          onClick={askAbyss}
          disabled={loading}
          className={`w-full flex items-center justify-center gap-3 text-2xl sm:text-3xl bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all duration-200 ${
            loading && "opacity-70 cursor-not-allowed"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={28} /> Summoning
              Judgment...
            </>
          ) : (
            "Summon Your Fate"
          )}
        </button>

        {response && (
          <div className="reply bg-red-950 p-6 mt-6 rounded-xl text-2xl sm:text-3xl text-red-300 border border-red-800 leading-relaxed tracking-wide">
            <span className="text-red-500">☠️</span>{" "}
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
};

export default AskTheAbyss;
