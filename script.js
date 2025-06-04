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
    { word: "Nimble", definition: "Quick and light in movement." }
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
  