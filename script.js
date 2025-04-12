const questions = [
  { question: "Who built the ark to survive the Great Flood?", choices: ["Moses", "Noah", "Abraham", "David"], answer: "Noah" },
  { question: "Who was swallowed by a great fish?", choices: ["Jonah", "Elijah", "Peter", "Paul"], answer: "Jonah" },
  { question: "How many disciples did Jesus have?", choices: ["10", "11", "12", "13"], answer: "12" },
  { question: "In what city was Jesus born?", choices: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"], answer: "Bethlehem" },
  { question: "What is the first book of the Bible?", choices: ["Genesis", "Exodus", "Leviticus", "Psalms"], answer: "Genesis" },
  { question: "Who led the Israelites out of Egypt?", choices: ["Joseph", "Moses", "Joshua", "Aaron"], answer: "Moses" },
  { question: "What did Jesus turn water into?", choices: ["Blood", "Oil", "Wine", "Honey"], answer: "Wine" },
  { question: "Which apostle betrayed Jesus?", choices: ["Peter", "James", "John", "Judas"], answer: "Judas" },
  { question: "What is the last book of the New Testament?", choices: ["Jude", "Revelation", "Romans", "Acts"], answer: "Revelation" },
  { question: "Who was the first man created by God?", choices: ["Abraham", "Noah", "Adam", "Isaac"], answer: "Adam" },
  { question: "Who killed Goliath?", choices: ["David", "Saul", "Samuel", "Solomon"], answer: "David" },
  { question: "How many days did God take to create the world?", choices: ["6", "7", "8", "5"], answer: "6" },
  { question: "Who received the Ten Commandments from God?", choices: ["Abraham", "Moses", "David", "Solomon"], answer: "Moses" },
  { question: "What did God create on the first day?", choices: ["Sun", "Light", "Sky", "Water"], answer: "Light" },
  { question: "What is the shortest verse in the Bible?", choices: ["Jesus wept.", "Pray continually.", "Love one another.", "Do not judge."], answer: "Jesus wept." },
  { question: "Who was thrown into the fiery furnace?", choices: ["Shadrach, Meshach, and Abednego", "Daniel", "Elijah", "Peter"], answer: "Shadrach, Meshach, and Abednego" },
  { question: "Who was the first woman?", choices: ["Sarah", "Eve", "Mary", "Esther"], answer: "Eve" },
  { question: "Which prophet was taken to heaven in a whirlwind?", choices: ["Isaiah", "Elijah", "Elisha", "Jeremiah"], answer: "Elijah" },
  { question: "How many books are in the Bible?", choices: ["66", "70", "64", "60"], answer: "66" },
  { question: "Which book comes last in the Old Testament?", choices: ["Malachi", "Zechariah", "Nehemiah", "Haggai"], answer: "Malachi" },
  { question: "Who was the first king of Israel?", choices: ["David", "Solomon", "Saul", "Samuel"], answer: "Saul" },
  { question: "What was Jesus' first miracle?", choices: ["Healing a blind man", "Walking on water", "Turning water into wine", "Raising the dead"], answer: "Turning water into wine" },
  { question: "Who denied Jesus three times?", choices: ["John", "James", "Peter", "Matthew"], answer: "Peter" },
  { question: "What did Jesus feed the 5000 with?", choices: ["Fish and bread", "Fruit and bread", "Bread and water", "Wine and fish"], answer: "Fish and bread" },
  { question: "Where did Jesus pray before his arrest?", choices: ["The temple", "Gethsemane", "Jerusalem", "Nazareth"], answer: "Gethsemane" },
  { question: "What type of tree did Zacchaeus climb to see Jesus?", choices: ["Sycamore", "Oak", "Cedar", "Fig"], answer: "Sycamore" },
  { question: "Who is known as the father of faith?", choices: ["Moses", "Abraham", "David", "Isaac"], answer: "Abraham" },
  { question: "Which disciple was a tax collector?", choices: ["Peter", "John", "Matthew", "James"], answer: "Matthew" },
  { question: "Which prophet was swallowed by a large fish?", choices: ["Elijah", "Isaiah", "Jonah", "Jeremiah"], answer: "Jonah" },
  { question: "Which of these is not one of the 10 commandments?", choices: ["Thou shalt not kill", "Thou shalt not commit adultery", "Thou shalt not steal", "Thou shalt not covet thy neighbor's car"], answer: "Thou shalt not covet thy neighbor's car" },
  { question: "Which of these was a judge of Israel?", choices: ["Samuel", "Solomon", "David", "Saul"], answer: "Samuel" },
  { question: "What was the name of Moses' brother?", choices: ["Aaron", "Joseph", "Isaac", "Zachariah"], answer: "Aaron" },
  { question: "How many plagues did God send upon Egypt?", choices: ["9", "7", "10", "12"], answer: "10" },
  { question: "Who wrote most of the Psalms?", choices: ["David", "Solomon", "Isaiah", "Moses"], answer: "David" },
  { question: "Which king was known for his wisdom?", choices: ["David", "Solomon", "Saul", "Josiah"], answer: "Solomon" },
  { question: "What was the name of the giant that David defeated?", choices: ["Goliath", "Goliathus", "Philistine", "Lazarus"], answer: "Goliath" },
  { question: "Who was the first prophet?", choices: ["Elijah", "Abraham", "Noah", "Samuel"], answer: "Samuel" },
  { question: "Who betrayed Jesus with a kiss?", choices: ["Peter", "Judas", "John", "Matthew"], answer: "Judas" },
  { question: "Which apostle is known for doubting Jesus' resurrection?", choices: ["Peter", "Thomas", "John", "James"], answer: "Thomas" },
  { question: "What was the name of Jesus' mother?", choices: ["Mary", "Elizabeth", "Martha", "Rachel"], answer: "Mary" },
  { question: "Who was the wife of Abraham?", choices: ["Sarah", "Rachel", "Rebecca", "Leah"], answer: "Sarah" },
  { question: "What animal did Balaam ride?", choices: ["Horse", "Camel", "Donkey", "Mule"], answer: "Donkey" },
  { question: "Which book comes first in the New Testament?", choices: ["Matthew", "Mark", "Luke", "John"], answer: "Matthew" },
  { question: "Who was the mother of Samuel?", choices: ["Hannah", "Sarah", "Rebecca", "Elizabeth"], answer: "Hannah" },
  { question: "What was the name of Jesus' earthly father?", choices: ["Joseph", "Zechariah", "Moses", "Matthew"], answer: "Joseph" },
  { question: "Which king of Israel built the first temple?", choices: ["Solomon", "David", "Saul", "Rehoboam"], answer: "Solomon" },
  { question: "What miracle did Jesus perform at the wedding in Cana?", choices: ["Turning water into wine", "Healing the sick", "Raising the dead", "Walking on water"], answer: "Turning water into wine" },
  { question: "Who was swallowed by a big fish after trying to run away from God?", choices: ["Jonah", "Elijah", "Noah", "David"], answer: "Jonah" },
  { question: "Who went up to heaven in a chariot of fire?", choices: ["Elijah", "Moses", "Elisha", "Daniel"], answer: "Elijah" },
  { question: "Who was the mother of John the Baptist?", choices: ["Mary", "Elizabeth", "Martha", "Rachel"], answer: "Elizabeth" },
  { question: "Which Roman governor sentenced Jesus to be crucified?", choices: ["Herod", "Pontius Pilate", "Caesar", "Felix"], answer: "Pontius Pilate" },
  { question: "Which disciple was known as the 'rock'?", choices: ["John", "Peter", "James", "Andrew"], answer: "Peter" },
  { question: "Who wrote the Book of Revelation?", choices: ["John", "Paul", "Peter", "Matthew"], answer: "John" },
  { question: "Which disciple was the brother of John?", choices: ["James", "Peter", "Andrew", "Bartholomew"], answer: "James" },
  { question: "What did Jesus feed 5000 men with?", choices: ["Bread and fish", "Bread and wine", "Manna from heaven", "Fruit and loaves"], answer: "Bread and fish" },
  { question: "What is the last book of the Bible?", choices: ["Jude", "Revelation", "Romans", "Hebrews"], answer: "Revelation" },
  { question: "Who is the author of the Book of Acts?", choices: ["Luke", "Paul", "John", "Matthew"], answer: "Luke" },
  { question: "Who was the first martyr in the Christian church?", choices: ["Stephen", "Paul", "James", "Peter"], answer: "Stephen" },
  { question: "Which apostle was a doctor?", choices: ["Matthew", "Mark", "Luke", "John"], answer: "Luke" },
  { question: "Who was the king of Israel during the reign of the prophet Elijah?", choices: ["Ahab", "David", "Solomon", "Saul"], answer: "Ahab" },
  { question: "Which two animals did God use to protect Elijah from danger?", choices: ["Ravens", "Doves", "Lions", "Sheep"], answer: "Ravens" },
  { question: "What did God say to Moses from the burning bush?", choices: ["Take off your sandals", "Go and be king", "Fear not", "I am the Lord"], answer: "Take off your sandals" },
  { question: "Who was the king of Judah when the Babylonian exile began?", choices: ["Zedekiah", "Jehoiakim", "Josiah", "Ahaz"], answer: "Zedekiah" },
  { question: "What mountain did Moses receive the Ten Commandments on?", choices: ["Mount Sinai", "Mount Nebo", "Mount Carmel", "Mount Zion"], answer: "Mount Sinai" },
  { question: "Who wrote the Book of Proverbs?", choices: ["Solomon", "David", "Moses", "Isaiah"], answer: "Solomon" }
];



let score = 0;
let currentQuestion = {};
let askedQuestions = []; // Track already asked questions

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadNextQuestion() {
  // Check if all questions have been asked, if so reset
  if (askedQuestions.length === questions.length) {
    score = 0;
    askedQuestions = []; // Reset the question list
    alert("All questions answered. Score reset!");
  }

  // Get a random question that hasn't been asked yet
  let nextQuestion;
  do {
    nextQuestion = questions[Math.floor(Math.random() * questions.length)];
  } while (askedQuestions.includes(nextQuestion));

  // Mark the question as asked
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
    alert("Correct! 🎉");
  } else {
    score = 0;
    alert(`Wrong! 😢 The correct answer is: ${currentQuestion.answer}`);
  }
  document.getElementById("score").innerText = score;
  loadNextQuestion();
}

window.onload = loadNextQuestion;
