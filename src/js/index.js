//let score : ??

[
  {
    questionContent: "Some random question",
    /*     choices: ["answer #1", "answer #2", "answer #3", "answer #4"],
    correctChoice: "answer #2", */
    choices: [
      {
        choice: "answer #1",
        correct: true,
        value: -3,
      },
      {
        choice: "answer #2",
        correct: false,
      },
    ],
  },
];

//listen for start event "click" or "page load"

//display question

//listen for user submit event

//if answer is true then display correct modal and update score
//else display incorrect modal and update score

//if question number < questions.length display next question
//else display results

const DOMSelectors = {
  start: document.getElementById("start"),
  choice1: document.querySelector("choice1"),
};
const init = function () {
  DOMSelectors.start.addEventListener("click", function () {});
};
