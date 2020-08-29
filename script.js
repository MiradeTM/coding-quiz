var score = 0;
var startBtn = document.getElementById("#start-button");
var timeEl = document.querySelector("#timer");
var quizIntroEl = document.getElementById("quiz-intro");
var questionBoxEl = document.getElementById("question-box");
var qIndex = 0;
var secondsLeft = 60;

var questions = [
  {title: 'What does HTML stand for?',
  choices: ['hot tan men laying', 'hyper text markup language', 'hyperactive tense marked language', 'hardened terpsichore march landing'],
  answer: 'hyper text markup language'},
  {title: 'Which of these is NOT a common data type?',
  choices: ['boolean', 'string', 'number', 'alert'],
  answer: 'alert'
  },
  {title: 'What goes inside the parentheses in an if/else statement?',
  choices:['condition', 'argument', 'method', 'for loop'],
  answer: 'condition',
  },
  {title: 'What do arrays store?',
  choices: ['numbers', 'strings', 'booleans', 'all of the above'],
  answer: 'all of the above',
  },
  {title: 'String values must be put inside ___ when being assigned to variables.',
  choices: ['parentheses', 'curly brackets', 'quotations', 'commas'],
  answer: 'quotations',
  }
   ]


function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }}, 1000);}


function quizStart() {
  quizIntroEl.classList.add("hide");
  getQuestion();}

function getQuestion() {
  var currQuest = questions[qIndex];
  if (qIndex < questions.length) {
  var qTitle = document.createElement("h1");
  qTitle.textContent = questions[qIndex].title;
  questionBoxEl.appendChild(qTitle);
  currQuest.choices.forEach(function (i) {
    var ansBtn = document.createElement("button");
    ansBtn.textContent = i;
    ansBtn.setAttribute("value", i);
    ansBtn.setAttribute("class", "answer-button");
    questionBoxEl.appendChild(ansBtn);
    ansBtn.onclick = questionClick;
  })} else {
  endGame();}}

function questionClick (){
  var rightAnswer = questions[qIndex].answer;
  if (this.value === rightAnswer) {
    score += 10;
    alert("Correct! You get ten points!");
    qIndex++; 
  } else {
    alert("Incorrect! You lose 10 seconds!");
    secondsLeft -= 10;
    qIndex++;
  }
    questionBoxEl.innerHTML = "";
    getQuestion();}

function endGame () {
  document.getElementById("question-box");
  var gameEnd = document.createElement("h1");
  gameEnd.textContent = "Game Over! Your final score is: " + score;
  questionBoxEl.appendChild(gameEnd);
  var submitScore = document.createElement("button");
  submitScore.textContent = "Would you like to save your score?";
  questionBoxEl.appendChild(submitScore);
  submitScore.onclick = saveScore;
}

function saveScore () {
  document.getElementById("question-box");
  var playerName = document.createElement("form");
  playerName.textContent = prompt("Please enter your name");
  var playerScore = score;
  console.log(playerName);
  console.log(playerScore);
  var finalScore = {
    name: playerName,
    score: playerScore
  }
  var hiScores = JSON.parse(window.localStorage.getItem("highScores"));
  hiScores.push(finalScore);
  window.localStorage.setItem("highScores", JSON.stringify(hiScores));
}


$("#start-button").on("click", function () {
  setTime();
  quizStart();
});

document.getElementById("highScores").onclick = alert(hiScores);



