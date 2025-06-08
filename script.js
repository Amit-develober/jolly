const words = [
    { word: "Gargantuan", definition: "Extremely large or enormous." },
    { word: "Jovial", definition: "Cheerful and friendly." },
    { word: "Zany", definition: "Amusingly unconventional or eccentric." },
    { word: "Quibble", definition: "A slight objection or criticism." },
    { word: "Bamboozle", definition: "To fool or cheat someone." },
    { word: "Whimsical", definition: "Playfully quaint or fanciful." },
    { word: "Snicker", definition: "A suppressed laugh." },
    { word: "Eloquent", definition: "Fluent or persuasive in speaking or writing." },
    { word: "Mischievous", definition: "Causing trouble in a playful way." },
    { word: "Nimble", definition: "Quick and light in movement." },
    { word: "Swift", definition: "Moving very fast" },
    { word: "Brave", definition: "Showing courage, not afraid" },
    { word: "Witty", definition: "Clever and funny" },
    { word: "Glimpse", definition: "A quick look" },
    { word: "Bounce", definition: "To spring back after hitting something" },
    { word: "Humble", definition: "Not proud, modest" },
    { word: "Sturdy", definition: "Strong and not easily broken" },
    { word: "Shiny", definition: "Bright and reflecting light" },
    { word: "Tiny", definition: "Very small" },
    { word: "Fierce", definition: "Very strong or violent" },
    { word: "Crisp", definition: "Fresh and firm" },
    { word: "Giggle", definition: "A small, silly laugh" },
    { word: "Jolly", definition: "Very happy and cheerful" },
    { word: "Sneaky", definition: "Doing something secretly or quietly" },
    { word: "Wander", definition: "To walk without a clear direction" },
    { word: "Chilly", definition: "A little cold" },
    { word: "Glow", definition: "To shine with soft light" },
    { word: "Quirky", definition: "Unusual in a fun way" },
    { word: "Zigzag", definition: "A line or path that moves quickly in different directions" },
    { word: "Mumble", definition: "To speak quietly and unclearly" },
    { word: "Tidy", definition: "Clean and organized" },
    { word: "Leap", definition: "To jump high or far" },
    { word: "Grumpy", definition: "In a bad mood or easily annoyed" },
    { word: "Snoop", definition: "To secretly look for information about someone" },
    { word: "Silly", definition: "Funny or not serious" },
    { word: "Alert", definition: "Paying full attention to what's happening" },
    { word: "Whisper", definition: "To speak very softly" },
    { word: "Bliss", definition: "Great happiness" },
    { word: "Tremble", definition: "To shake slightly, usually from fear or cold" },
    { word: "Sniff", definition: "To smell something with a short breath" },
    { word: "Curious", definition: "Wanting to know or learn something" },
    { word: "Kind", definition: "Being nice and caring" },
    { word: "Roar", definition: "A loud, deep sound made by animals or people" },
    { word: "Puzzle", definition: "Something that is difficult to understand or solve" },
    { word: "Shiver", definition: "To shake because of cold or fear" },
    { word: "Brilliant", definition: "Very smart or full of light" },
    { word: "Whirl", definition: "To spin quickly" },
    { word: "Chatter", definition: "To talk a lot, usually quickly and happily" },
    { word: "Fearless", definition: "Not afraid of anything" },
    { word: "Stormy", definition: "Full of strong wind, rain, or trouble" },
    { word: "Dash", definition: "To run quickly" },
    { word: "Marvel", definition: "To be amazed by something wonderful" },
    { word: "Tricky", definition: "Hard to deal with or confusing" },
    { word: "Dizzy", definition: "Feeling like you might fall or spin" },
    { word: "Lively", definition: "Full of energy or life" },
    { word: "Tumble", definition: "To fall suddenly and quickly" },
    { word: "Snore", definition: "A loud breathing sound made while sleeping" },
    { word: "Sticky", definition: "Something that sticks to things easily" },
    { word: "Yawn", definition: "Opening your mouth wide when you're tired or bored" },
    { word: "Peek", definition: "To look quickly or secretly at something" }
  ];
  
  const wordTitle = document.getElementById('word');
  const definition = document.getElementById('definition');
  const character = document.getElementById('character');
  const historyBox = document.getElementById('history-box');
  const historyList = document.getElementById('history-list');
  const toggleButton = document.getElementById('toggle-history');
  const laughSound = document.getElementById('laugh-sound');
  const wordPopup = document.getElementById('word-popup');
  const laughContainer = document.getElementById('laugh-container');
  
  const history = [];
  
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  function addToHistory(word, definition) {
    history.unshift({ word, definition });
    if (history.length > 20) history.pop();
    renderHistory();
  }
  
  function renderHistory() {
    historyList.innerHTML = "";
    history.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `${entry.word}: ${entry.definition}`;
      historyList.appendChild(li);
    });
  }
  
  function createLaughText() {
    const text = document.createElement('div');
    text.className = 'floating-text';
    text.textContent = "😂 HAHAHA!";
    text.style.left = `${Math.random() * 80 + 10}%`;
    text.style.top = `100px`;
    text.style.fontSize = `${Math.floor(Math.random() * 18 + 18)}px`; // 18px to 36px
    laughContainer.appendChild(text);
  
    setTimeout(() => {
      text.remove();
    }, 2000);
  }
  
  character.addEventListener('click', () => {
    const { word, definition: def } = getRandomWord();
  
    // Play laugh sound
    laughSound.currentTime = 0;
    laughSound.play();
  
    // Show vocabulary word popup
    wordTitle.textContent = word;
    definition.textContent = def;
    wordPopup.textContent = word;
    wordPopup.style.opacity = 1;
  
    setTimeout(() => {
      wordPopup.style.opacity = 0;
    }, 2000);
  
    // Add to history
    addToHistory(word, def);
  
    // Spawn 5–6 laugh texts
    const laughCount = Math.floor(Math.random() * 2) + 5;
    for (let i = 0; i < laughCount; i++) {
      setTimeout(createLaughText, i * 100);
    }
  });
  
  toggleButton.addEventListener('click', () => {
    historyBox.classList.toggle('expanded');
    toggleButton.textContent = historyBox.classList.contains('expanded')
      ? '📕 Hide History'
      : '📜 Show History';
  });
  