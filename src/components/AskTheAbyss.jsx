import React, { useState } from "react";
import run from "../config/grmini"; // 🔁 Adjust this path if needed

const AskTheAbyss = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const askAbyss = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse(null);

    const prompt = `
You are the Voice of the Abyss — an ancient, mythological judge of damned souls.

Every question is a confession. Interpret the user's words as their sin.

Reply in the tone of a tormentor in Hell. Your answer must include:

1. Identification of the sin (based on the user's question)
2. The poetic and horrifying punishment they will endure for eternity
3. Mythological, infernal, and judgmental language — like you're speaking from the pit of Hell

Here is their confession: "${input}"
    `;

    try {
      const result = await run(prompt);
      setResponse(result);
    } catch (err) {
      setResponse("The abyss choked on your words. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-red-100 p-6 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-red-700 space-y-4 font-serif">
      <h2 className="text-3xl font-bold text-red-600 text-center">
        🩸 Ask the Abyss
      </h2>
      <p className="text-3xl text-red-400 italic text-center">
        Every question is a confession. The punishment awaits...
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && askAbyss()}
        placeholder="Speak your guilt, sinner..."
        className="w-full p-3 rounded-lg bg-red-950 text-red-100 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-700 text-3xl"
      />

      <button
        onClick={askAbyss}
        className="text-3xl w-full bg-red-800 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-200"
        disabled={loading}
      >
        {loading ? "Summoning Judgment..." : "Summon Your Fate"}
      </button>

      {response && (
        <div className="bg-red-950 p-4 mt-4 rounded-lg text-3xl text-red-300 border border-red-800 whitespace-pre-line reply">
          <span className="text-red-500">☠️</span> {response}
        </div>
      )}
    </div>
  );
};

export default AskTheAbyss;
