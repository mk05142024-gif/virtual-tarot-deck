console.log("🌙 script.js loaded successfully");

const deck = [
  {
    name: "The Fool 🌙",
    meaning: "Beginnings, innocence, trust, stepping into the unknown."
  },
  {
    name: "The Magician ✨",
    meaning: "Manifestation, skill, turning ideas into reality."
  },
  {
    name: "The High Priestess 🪞",
    meaning: "Intuition, mystery, inner knowing."
  },
  {
    name: "The Empress 🌸",
    meaning: "Abundance, creation, nurturing energy."
  },
  {
    name: "The Emperor 👑",
    meaning: "Structure, control, stability, leadership."
  },
  {
    name: "The Lovers 💗",
    meaning: "Connection, choice, alignment of hearts."
  },
  {
    name: "The Chariot 🌊",
    meaning: "Drive, willpower, forward movement."
  },
  {
    name: "The Star ⭐",
    meaning: "Hope, healing, renewal, guidance."
  },
  {
    name: "The Moon 🌙",
    meaning: "Illusion, intuition, subconscious emotions."
  },
  {
    name: "The Sun ☀️",
    meaning: "Joy, clarity, success, vitality."
  }
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
    .map(card => `
      <div class="card">
        <h3>${card.name}</h3>
        <p>${card.meaning}</p>
      </div>
    `)
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
