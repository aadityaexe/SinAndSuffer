const run = async (prompt) => {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  const endpoint = "https://api.groq.com/openai/v1/chat/completions";

  const payload = {
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || "Something went wrong");
  }

  return data.choices[0].message.content.trim();
};

export default run;
