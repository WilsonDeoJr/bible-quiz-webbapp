
// Load questions from faith_questions.js
// Make sure this script is included AFTER faith_questions.js in the HTML

let score = 0;
let currentQuestion = {};
let askedQuestions = []; // Track already asked questions

// Sound effects
const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadNextQuestion() {
  if (askedQuestions.length === questions.length) {
    score = 0;
    askedQuestions = [];
    alert("All questions answered. Score reset!");
  }

  let nextQuestion;
  do {
    nextQuestion = questions[Math.floor(Math.random() * questions.length)];
  } while (askedQuestions.includes(nextQuestion));

  askedQuestions.push(nextQuestion);
  currentQuestion = nextQuestion;
  document.getElementById("question").innerText = currentQuestion.question;

  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";

  const shuffledChoices = shuffle([...currentQuestion.choices]);
  shuffledChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => checkAnswer(choice);
    choicesContainer.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === currentQuestion.answer) {
    score++;
    correctSound.play();
    alert("Correct! 🎉");
  } else {
    score = 0;
    wrongSound.play();
    alert(`Wrong! 😢 The correct answer is: ${currentQuestion.answer}`);
  }
  document.getElementById("score").innerText = score;
  loadNextQuestion();
}

window.onload = loadNextQuestion;
