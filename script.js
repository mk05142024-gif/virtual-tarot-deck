console.log("🌙 script.js loaded successfully");

const deck = [
  "The Fool 🌙",
  "The Magician ✨",
  "The High Priestess 🪞",
  "The Empress 🌸",
  "The Emperor 👑",
  "The Lovers 💗",
  "The Chariot 🌊",
  "The Star ⭐",
  "The Moon 🌙",
  "The Sun ☀️"
];

let shuffledDeck = [];
let currentSpread = [];
let spreadSize = 0;

// 🔮 Shuffle deck
function shuffleDeck() {
  shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
  currentSpread = [];
  spreadSize = 0;

  document.getElementById("spread").innerHTML = "";
  document.getElementById("summary").innerHTML =
    "✨ The deck has been shuffled. Choose a spread.";
}

// 🌙 Start reading (choose spread size)
function startReading(size) {
  if (shuffledDeck.length === 0) {
    shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
  }

  currentSpread = [];
  spreadSize = size;

  document.getElementById("spread").innerHTML = "";
  document.getElementById("summary").innerHTML =
    `🔮 Choose ${size} cards by clicking the deck.`;
}

// 🃏 Draw a card when deck is clicked
function drawCard() {
  if (spreadSize === 0) {
    document.getElementById("summary").innerHTML =
      "✨ Please shuffle and choose a spread first.";
    return;
  }

  if (currentSpread.length >= spreadSize) return;

  const card = shuffledDeck.pop();
  currentSpread.push(card);

  renderSpread();

  if (currentSpread.length === spreadSize) {
    showSummary();
  }
}

// ✨ Render cards in spread
function renderSpread() {
  document.getElementById("spread").innerHTML = currentSpread
    .map(card => `<div class="card">${card}</div>`)
    .join("");
}

// 🌌 Final reading message
function showSummary() {
  document.getElementById("summary").innerHTML = `
    <h2>✨ Reading Complete</h2>
    <p>
      The cards reflect a pattern, not a prediction.
      Look at how they speak to each other, not just individually.
    </p>
  `;
}

// 🧿 Attach click AFTER page loads
window.addEventListener("DOMContentLoaded", () => {
  const deckEl = document.getElementById("deck");

  if (deckEl) {
    deckEl.addEventListener("click", drawCard);
  }
});

window.shuffleDeck = shuffleDeck;
window.startReading = startReading;
window.drawCard = drawCard;
