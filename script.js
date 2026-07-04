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

  alert("✨ The deck has been shuffled. Choose your spread.");
}

function startReading(size) {
  if (shuffledDeck.length === 0) {
    shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
  }

  currentSpread = [];
  spreadSize = size;

  document.getElementById("spread").innerHTML = "";

  alert(`Choose ${size} cards intuitively.`);
}

document.getElementById("deck").addEventListener("click", drawCard);

function drawCard() {
  if (spreadSize === 0) {
    alert("Shuffle and select a spread first.");
    return;
  }

  if (currentSpread.length >= spreadSize) return;

  const card = shuffledDeck.pop();

  currentSpread.push(card);

  renderSpread();
}

function renderSpread() {
  const spread = document.getElementById("spread");

  spread.innerHTML = currentSpread.map(c => {
    return `<div class="card">${c}</div>`;
  }).join("");

  if (currentSpread.length === spreadSize) {
    showSummary();
  }
}

function showSummary() {
  document.getElementById("summary").innerHTML = `
    <h2>✨ Reading Complete</h2>
    <p>This spread reflects your current energetic alignment. Reflect on how each card connects rather than standing alone.</p>
  `;
}
