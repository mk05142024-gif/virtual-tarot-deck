console.log("🌙 script.js loaded successfully");

// 🃏 FULL TAROT STRUCTURE (we are building toward 78 cards)
const deck = [
  // 🌙 MAJOR ARCANA (starting set)
  {
    name: "The Fool 🌙",
    meaning: "Beginnings, innocence, trust, stepping into the unknown.",
    revealed: false
  },
  {
    name: "The Magician ✨",
    meaning: "Manifestation, skill, turning ideas into reality.",
    revealed: false
  },
  {
    name: "The High Priestess 🪞",
    meaning: "Intuition, mystery, inner knowing.",
    revealed: false
  },
  {
    name: "The Empress 🌸",
    meaning: "Abundance, creation, nurturing energy.",
    revealed: false
  },
  {
    name: "The Emperor 👑",
    meaning: "Structure, control, stability, leadership.",
    revealed: false
  },
  {
    name: "The Lovers 💗",
    meaning: "Connection, choice, alignment of hearts.",
    revealed: false
  },
  {
    name: "The Chariot 🌊",
    meaning: "Drive, willpower, forward movement.",
    revealed: false
  },
  {
    name: "The Star ⭐",
    meaning: "Hope, healing, renewal, guidance.",
    revealed: false
  },
  {
    name: "The Moon 🌙",
    meaning: "Illusion, intuition, subconscious emotions.",
    revealed: false
  },
  {
    name: "The Sun ☀️",
    meaning: "Joy, clarity, success, vitality.",
    revealed: false
  },

  // 🌿 PLACEHOLDER MINOR ARCANA (for structure expansion)
  // These are simplified for now — we will expand later into full suits
  {
    name: "Ace of Cups 💧",
    meaning: "Emotional beginnings, love, intuition awakening.",
    revealed: false
  },
  {
    name: "Ace of Wands 🔥",
    meaning: "Inspiration, creative spark, new passion.",
    revealed: false
  },
  {
    name: "Ace of Swords ⚔️",
    meaning: "Clarity, truth, mental breakthrough.",
    revealed: false
  },
  {
    name: "Ace of Pentacles 🌿",
    meaning: "New opportunity, stability, material beginnings.",
    revealed: false
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

// 🌙 Start reading
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

// 🃏 Draw card from deck
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

// ✨ Toggle reveal
function toggleReveal(index) {
  currentSpread[index].revealed = !currentSpread[index].revealed;
  renderSpread();
}

// ✨ Render spread
function renderSpread() {
  document.getElementById("spread").innerHTML = currentSpread
    .map((card, index) => `
      <div class="card" onclick="toggleReveal(${index})">
        <h3>${card.name}</h3>
        <p>${card.revealed ? card.meaning : "Click to reveal ✨"}</p>
      </div>
    `)
    .join("");
}

// 🌌 Final summary
function showSummary() {
  document.getElementById("summary").innerHTML = `
    <h2>✨ Reading Complete</h2>
    <p>
      The story is now forming across ${currentSpread.length} cards.
      Notice patterns, repeats, and emotional flow.
    </p>
  `;
}

// 🧿 Attach deck click
window.addEventListener("DOMContentLoaded", () => {
  const deckEl = document.getElementById("deck");

  if (deckEl) {
    deckEl.addEventListener("click", drawCard);
  }
});

// 🌙 expose functions to HTML buttons
window.shuffleDeck = shuffleDeck;
window.startReading = startReading;
window.drawCard = drawCard;
window.toggleReveal = toggleReveal;
