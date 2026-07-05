console.log("🌙 script.js loaded successfully");

// 🎧 AUDIO ELEMENTS
const ambientSound = document.getElementById("ambientSound");
const flipSound = document.getElementById("flipSound");
const shuffleSound = document.getElementById("shuffleSound");

// 🃏 FULL 78-CARD TAROT DECK
const deck = [
  // 🌙 MAJOR ARCANA (22)
  { name: "The Fool 🌙", meaning: "Beginnings, innocence, trust, leap of faith.", revealed: false },
  { name: "The Magician ✨", meaning: "Manifestation, skill, power.", revealed: false },
  { name: "The High Priestess 🪞", meaning: "Intuition, mystery, inner knowing.", revealed: false },
  { name: "The Empress 🌸", meaning: "Abundance, nurturing, creation.", revealed: false },
  { name: "The Emperor 👑", meaning: "Authority, structure, stability.", revealed: false },
  { name: "The Hierophant 🕊️", meaning: "Tradition, guidance, belief systems.", revealed: false },
  { name: "The Lovers 💗", meaning: "Love, choice, alignment.", revealed: false },
  { name: "The Chariot 🌊", meaning: "Willpower, control, movement.", revealed: false },
  { name: "Strength 🦁", meaning: "Courage, patience, inner power.", revealed: false },
  { name: "The Hermit 🌌", meaning: "Solitude, reflection, wisdom.", revealed: false },
  { name: "Wheel of Fortune 🎡", meaning: "Cycles, fate, change.", revealed: false },
  { name: "Justice ⚖️", meaning: "Truth, fairness, karma.", revealed: false },
  { name: "The Hanged Man 🪢", meaning: "Pause, surrender, perspective shift.", revealed: false },
  { name: "Death 🖤", meaning: "Endings, transformation, rebirth.", revealed: false },
  { name: "Temperance 🌈", meaning: "Balance, healing, moderation.", revealed: false },
  { name: "The Devil 🐍", meaning: "Attachment, shadow, temptation.", revealed: false },
  { name: "The Tower ⚡", meaning: "Collapse, awakening, disruption.", revealed: false },
  { name: "The Star ⭐", meaning: "Hope, renewal, healing.", revealed: false },
  { name: "The Moon 🌙", meaning: "Illusion, subconscious, intuition.", revealed: false },
  { name: "The Sun ☀️", meaning: "Joy, success, clarity.", revealed: false },
  { name: "Judgement 🔔", meaning: "Awakening, rebirth, reflection.", revealed: false },
  { name: "The World 🌍", meaning: "Completion, fulfillment, unity.", revealed: false },

  // 💧 CUPS (emotions)
  { name: "Ace of Cups 💧", meaning: "New emotional beginning.", revealed: false },
  { name: "2 of Cups 💧", meaning: "Connection, partnership.", revealed: false },
  { name: "3 of Cups 💧", meaning: "Friendship, celebration.", revealed: false },
  { name: "4 of Cups 💧", meaning: "Apathy, reevaluation.", revealed: false },
  { name: "5 of Cups 💧", meaning: "Loss, grief.", revealed: false },
  { name: "6 of Cups 💧", meaning: "Nostalgia, memory.", revealed: false },
  { name: "7 of Cups 💧", meaning: "Choices, illusion.", revealed: false },
  { name: "8 of Cups 💧", meaning: "Walking away.", revealed: false },
  { name: "9 of Cups 💧", meaning: "Wish fulfillment.", revealed: false },
  { name: "10 of Cups 💧", meaning: "Emotional harmony.", revealed: false },

  // 🔥 WANDS (energy)
  { name: "Ace of Wands 🔥", meaning: "Inspiration, spark.", revealed: false },
  { name: "2 of Wands 🔥", meaning: "Planning future.", revealed: false },
  { name: "3 of Wands 🔥", meaning: "Expansion.", revealed: false },
  { name: "4 of Wands 🔥", meaning: "Celebration.", revealed: false },
  { name: "5 of Wands 🔥", meaning: "Conflict.", revealed: false },
  { name: "6 of Wands 🔥", meaning: "Victory.", revealed: false },
  { name: "7 of Wands 🔥", meaning: "Defensiveness.", revealed: false },
  { name: "8 of Wands 🔥", meaning: "Speed.", revealed: false },
  { name: "9 of Wands 🔥", meaning: "Resilience.", revealed: false },
  { name: "10 of Wands 🔥", meaning: "Burden.", revealed: false },

  // ⚔️ SWORDS (mind)
  { name: "Ace of Swords ⚔️", meaning: "Clarity, truth.", revealed: false },
  { name: "2 of Swords ⚔️", meaning: "Indecision.", revealed: false },
  { name: "3 of Swords ⚔️", meaning: "Heartbreak.", revealed: false },
  { name: "4 of Swords ⚔️", meaning: "Rest.", revealed: false },
  { name: "5 of Swords ⚔️", meaning: "Conflict.", revealed: false },
  { name: "6 of Swords ⚔️", meaning: "Transition.", revealed: false },
  { name: "7 of Swords ⚔️", meaning: "Deception.", revealed: false },
  { name: "8 of Swords ⚔️", meaning: "Restriction.", revealed: false },
  { name: "9 of Swords ⚔️", meaning: "Anxiety.", revealed: false },
  { name: "10 of Swords ⚔️", meaning: "Endings.", revealed: false },

  // 🌿 PENTACLES (material)
  { name: "Ace of Pentacles 🌿", meaning: "Opportunity.", revealed: false },
  { name: "2 of Pentacles 🌿", meaning: "Balance.", revealed: false },
  { name: "3 of Pentacles 🌿", meaning: "Teamwork.", revealed: false },
  { name: "4 of Pentacles 🌿", meaning: "Control.", revealed: false },
  { name: "5 of Pentacles 🌿", meaning: "Struggle.", revealed: false },
  { name: "6 of Pentacles 🌿", meaning: "Giving.", revealed: false },
  { name: "7 of Pentacles 🌿", meaning: "Patience.", revealed: false },
  { name: "8 of Pentacles 🌿", meaning: "Skill.", revealed: false },
  { name: "9 of Pentacles 🌿", meaning: "Independence.", revealed: false },
  { name: "10 of Pentacles 🌿", meaning: "Legacy.", revealed: false }
];

// 🔮 STATE
let shuffledDeck = [];
let currentSpread = [];
let spreadSize = 0;

// 🌙 SHUFFLE
function shuffleDeck() {
  shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
  currentSpread = [];
  spreadSize = 0;

  document.getElementById("spread").innerHTML = "";
  document.getElementById("summary").innerHTML = "✨ Deck shuffled.";

  if (ambientSound) {
    ambientSound.volume = 0.3;
    ambientSound.play().catch(() => {});
  }

  if (shuffleSound) {
    shuffleSound.volume = 0.5;
    shuffleSound.play().catch(() => {});
  }
}

// 🌙 START READING
function startReading(size) {
  if (shuffledDeck.length === 0) {
    shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
  }

  currentSpread = [];
  spreadSize = size;

  document.getElementById("spread").innerHTML = "";
  document.getElementById("summary").innerHTML =
    `🔮 Choose ${size} cards`;
}

// 🃏 DRAW
function drawCard() {
  if (spreadSize === 0) return;
  if (currentSpread.length >= spreadSize) return;

  currentSpread.push(shuffledDeck.pop());
  renderSpread();

  if (currentSpread.length === spreadSize) {
    showSummary();
  }
}

// 🔮 FLIP
function toggleReveal(index) {
  currentSpread[index].revealed = !currentSpread[index].revealed;

  if (flipSound) {
    flipSound.currentTime = 0;
    flipSound.play().catch(() => {});
  }

  renderSpread();
}

// 🃏 RENDER
function renderSpread() {
  document.getElementById("spread").innerHTML = currentSpread
    .map((card, i) => `
      <div class="card ${card.revealed ? "flipped" : ""}" onclick="toggleReveal(${i})">
        <div class="card-inner">
          <div class="card-front">${card.name}</div>
          <div class="card-back">${card.meaning}</div>
        </div>
      </div>
    `)
    .join("");
}

// 🌌 SUMMARY
function showSummary() {
  document.getElementById("summary").innerHTML =
    "✨ The reading is complete. The pattern is speaking.";
}

// 🧿 CLICK DECK
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("deck").addEventListener("click", drawCard);
});

window.shuffleDeck = shuffleDeck;
window.startReading = startReading;
window.toggleReveal = toggleReveal;
