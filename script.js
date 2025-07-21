console.log("🟢 script.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(searchValue) ? "block" : "none";
    });
  });
});