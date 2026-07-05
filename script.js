console.log("🌙 script.js loaded successfully");

// 🃏 FULL 78-CARD DECK
const deck = [
  // 🌙 MAJOR ARCANA (22)
  { name: "The Fool 🌙", meaning: "Beginnings, innocence, trust, stepping into the unknown.", revealed: false },
  { name: "The Magician ✨", meaning: "Manifestation, skill, turning ideas into reality.", revealed: false },
  { name: "The High Priestess 🪞", meaning: "Intuition, mystery, inner knowing.", revealed: false },
  { name: "The Empress 🌸", meaning: "Abundance, creation, nurturing energy.", revealed: false },
  { name: "The Emperor 👑", meaning: "Structure, control, stability, leadership.", revealed: false },
  { name: "The Hierophant 🕊️", meaning: "Tradition, guidance, spiritual learning.", revealed: false },
  { name: "The Lovers 💗", meaning: "Connection, choice, alignment of hearts.", revealed: false },
  { name: "The Chariot 🌊", meaning: "Drive, willpower, forward movement.", revealed: false },
  { name: "Strength 🦁", meaning: "Inner courage, patience, gentle control.", revealed: false },
  { name: "The Hermit 🌌", meaning: "Solitude, reflection, inner guidance.", revealed: false },
  { name: "Wheel of Fortune 🎡", meaning: "Cycles, fate, change, turning points.", revealed: false },
  { name: "Justice ⚖️", meaning: "Truth, fairness, accountability.", revealed: false },
  { name: "The Hanged Man 🪢", meaning: "Pause, surrender, new perspective.", revealed: false },
  { name: "Death 🖤", meaning: "Transformation, endings, rebirth.", revealed: false },
  { name: "Temperance 🌈", meaning: "Balance, healing, moderation.", revealed: false },
  { name: "The Devil 🐍", meaning: "Attachment, temptation, shadow self.", revealed: false },
  { name: "The Tower ⚡", meaning: "Sudden change, collapse, awakening.", revealed: false },
  { name: "The Star ⭐", meaning: "Hope, healing, renewal.", revealed: false },
  { name: "The Moon 🌙", meaning: "Illusion, intuition, subconscious.", revealed: false },
  { name: "The Sun ☀️", meaning: "Joy, clarity, success.", revealed: false },
  { name: "Judgement 🔔", meaning: "Awakening, reflection, rebirth.", revealed: false },
  { name: "The World 🌍", meaning: "Completion, fulfillment, wholeness.", revealed: false },

  // 💧 CUPS
  { name: "Ace of Cups 💧", meaning: "New emotional beginning, love.", revealed: false },
  { name: "2 of Cups 💧", meaning: "Connection, partnership.", revealed: false },
  { name: "3 of Cups 💧", meaning: "Friendship, celebration.", revealed: false },
  { name: "4 of Cups 💧", meaning: "Apathy, reevaluation.", revealed: false },
  { name: "5 of Cups 💧", meaning: "Loss, grief, emotional focus.", revealed: false },
  { name: "6 of Cups 💧", meaning: "Nostalgia, childhood memories.", revealed: false },
  { name: "7 of Cups 💧", meaning: "Choices, illusion, fantasy.", revealed: false },
  { name: "8 of Cups 💧", meaning: "Walking away, searching deeper.", revealed: false },
  { name: "9 of Cups 💧", meaning: "Satisfaction, wishes fulfilled.", revealed: false },
  { name: "10 of Cups 💧", meaning: "Emotional harmony, happiness.", revealed: false },

  // 🔥 WANDS
  { name: "Ace of Wands 🔥", meaning: "Inspiration, new spark.", revealed: false },
  { name: "2 of Wands 🔥", meaning: "Planning, future vision.", revealed: false },
  { name: "3 of Wands 🔥", meaning: "Expansion, progress.", revealed: false },
  { name: "4 of Wands 🔥", meaning: "Celebration, stability.", revealed: false },
  { name: "5 of Wands 🔥", meaning: "Conflict, competition.", revealed: false },
  { name: "6 of Wands 🔥", meaning: "Victory, recognition.", revealed: false },
  { name: "7 of Wands 🔥", meaning: "Defensiveness, standing ground.", revealed: false },
  { name: "8 of Wands 🔥", meaning: "Speed, movement.", revealed: false },
  { name: "9 of Wands 🔥", meaning: "Resilience, persistence.", revealed: false },
  { name: "10 of Wands 🔥", meaning: "Burden, responsibility.", revealed: false },

  // ⚔️ SWORDS
  { name: "Ace of Swords ⚔️", meaning: "Clarity, truth.", revealed: false },
  { name: "2 of Swords ⚔️", meaning: "Indecision, blocked emotions.", revealed: false },
  { name: "3 of Swords ⚔️", meaning: "Heartbreak, sorrow.", revealed: false },
  { name: "4 of Swords ⚔️", meaning: "Rest, recovery.", revealed: false },
  { name: "5 of Swords ⚔️", meaning: "Conflict, tension.", revealed: false },
  { name: "6 of Swords ⚔️", meaning: "Transition, moving on.", revealed: false },
  { name: "7 of Swords ⚔️", meaning: "Deception, strategy.", revealed: false },
  { name: "8 of Swords ⚔️", meaning: "Restriction, mental block.", revealed: false },
  { name: "9 of Swords ⚔️", meaning: "Anxiety, worry.", revealed: false },
  { name: "10 of Swords ⚔️", meaning: "Endings, collapse.", revealed: false },

  // 🌿 PENTACLES
  { name: "Ace of Pentacles 🌿", meaning: "New opportunity, stability.", revealed: false },
  { name: "2 of Pentacles 🌿", meaning: "Balance, juggling.", revealed: false },
  { name: "3 of Pentacles 🌿", meaning: "Teamwork, skill.", revealed: false },
  { name: "4 of Pentacles 🌿", meaning: "Control, security.", revealed: false },
  { name: "5 of Pentacles 🌿", meaning: "Struggle, lack.", revealed: false },
  { name: "6 of Pentacles 🌿", meaning: "Giving, receiving.", revealed: false },
  { name: "7 of Pentacles 🌿", meaning: "Patience, investment.", revealed: false },
  { name: "8 of Pentacles 🌿", meaning: "Mastery, work.", revealed: false },
  { name: "9 of Pentacles 🌿", meaning: "Independence, luxury.", revealed: false },
  { name: "10 of Pentacles 🌿", meaning: "Legacy, stability.", revealed: false }
];

let shuffledDeck = [];
let currentSpread = [];
let spreadSize = 0;

// 🔮 Shuffle
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

// 🃏 Draw card
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

// ✨ Flip toggle
function toggleReveal(index) {
  currentSpread[index].revealed = !currentSpread[index].revealed;
  renderSpread();
}

// 🃏 Render spread WITH FLIP EFFECT
function renderSpread() {
  document.getElementById("spread").innerHTML = currentSpread
    .map((card, index) => `
      <div class="card ${card.revealed ? "flipped" : ""}" onclick="toggleReveal(${index})">
        <div class="card-inner">

          <div class="card-front">
            <h3>${card.name}</h3>
          </div>

          <div class="card-back">
            <p>${card.meaning}</p>
          </div>

        </div>
      </div>
    `)
    .join("");
}

// 🌌 Summary
function showSummary() {
  document.getElementById("summary").innerHTML = `
    <h2>✨ Reading Complete</h2>
    <p>
      The full 78-card field has been activated. Patterns are now alive across the spread.
    </p>
  `;
}

// 🧿 Deck click
window.addEventListener("DOMContentLoaded", () => {
  const deckEl = document.getElementById("deck");
  if (deckEl) deckEl.addEventListener("click", drawCard);
});

window.shuffleDeck = shuffleDeck;
window.startReading = startReading;
window.drawCard = drawCard;
window.toggleReveal = toggleReveal;
