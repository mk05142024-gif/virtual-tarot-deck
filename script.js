const deck = [
  "The Dreamer 🌙",
  "The Spark ✨",
  "The Mirror 🪞",
  "The Bloom 🌸",
  "The Flame 🔥",
  "The Tide 🌊",
  "The Crown 👑",
  "The Whisper 🕊️",
  "The Rose Veil 🌹",
  "The Night Bloom 🌌",
  "The Heart 💗",
  "The Starling ⭐"
];

let shuffledDeck = [];
let currentSpread = [];
let spreadSize = 0;

function shuffleDeck() {
  shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
  currentSpread = [];
  spreadSize = 0;

  document.getElementById("spread").innerHTML = "";
  document.getElementById("summary").innerHTML =
    "✨ The deck has been shuffled. Choose a spread.";
}

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

// attach click AFTER page loads
window.onload = function () {
  const deckEl = document.getElementById("deck");

  if (deckEl) {
    deckEl.addEventListener("click", drawCard);
  }
};

function drawCard() {
  if (spreadSize === 0) {
    document.getElementById("summary").innerHTML =
      "⚠️ Please shuffle and select a spread first.";
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

function renderSpread() {
  document.getElementById("spread").innerHTML = currentSpread
    .map(card => `<div class="card">${card}</div>`)
    .join("");
}

function showSummary() {
  document.getElementById("summary").innerHTML = `
    ✨ <h2>Reading Complete</h2>
    <p>
      This spread reflects the current energetic pattern of your question.
      Notice how each card interacts with the others rather than standing alone.
    </p>
  `;
}
