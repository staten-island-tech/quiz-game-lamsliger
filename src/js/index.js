import { Question } from "./question.js";
import { Quiz } from "./quiz.js";

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    const element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    const choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      const element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  const button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  const currentQuestionNumber = quiz.questionIndex + 1;
  const element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

// create questions
const questions = [
  new Question(
    "What was the first commercially successful video game? ",
    ["Tank", "Pac man", "Pong", "Donkey Kong"],
    "Pong"
  ),
  new Question(
    "What is the best selling videogame of all time? ",
    ["Mario Kart", "Minecraft", "PUB G", "GTA V"],
    "Minecraft"
  ),
  new Question(
    "What year was the Super Nintendo Entertainment System (SNES) released? ",
    ["1990", "2010", "1987", "1996"],
    "1990"
  ),
  new Question(
    "What is the highest-selling gaming console to date? ",
    ["Xbox 360", "Nintendo Gamecube", "Nintendo Wii", "PS 2"],
    "PS 2"
  ),
  new Question(
    "What year was Nintendo founded? ",
    ["1889", "1907", "1883", "1896"],
    "1889"
  ),
];
// create quiz
const quiz = new Quiz(questions);

// display quiz
populate();
