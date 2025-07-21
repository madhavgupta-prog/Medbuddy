document.addEventListener("DOMContentLoaded", () => {
  const aiButton = document.getElementById("askAI");
  const aiInput = document.getElementById("aiInput");
  const aiResponse = document.getElementById("aiResponse");

  aiButton.addEventListener("click", async () => {
    const query = aiInput.value.trim();
    if (!query) return;

    aiResponse.textContent = "Thinking... 🤖";

    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: query }),
    });

    const data = await res.json();
    aiResponse.textContent = data.reply || "Something went wrong.";
  });
});