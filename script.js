// First, defining all global variables
const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");
const score = document.querySelector("#score");

// Defining local variables
let shuffledQuestions, currentQuestionIndex;

// Adding event listeners to allow start btn and next btn to have functions attached to them

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion()
})

// Starting function, making sure everything is cleared/prepared for a fresh round of questions

function startGame() {
  // Setting score to 0 from the start
  score.innerText = b = 0;
  // Setting my timer to 60 seconds
  c = 60;
  startButton.classList.add("hide");
  // Cool function that shuffles user created questions so that questions appear in random order 
  // each time quiz is taken
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  // Making question element appear by removing .hide class that is inherently on it
  questionContainerElement.classList.remove("hide");
  setNextQuestion()
}
// Sets qustion into question element and resets any astray classes
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
// Fills answer elements with answers from corresponding question that was selected earlier
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    // Created buttons for use then sets btn class on each for styling purposes
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    // Setting correct attribute for styling and scorekeeping purposes
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // Adding event listeners to newly added buttons so that we can follow their response
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}
// Used once we need to reset buttons to original state between one set of questions and the next
function resetState() {
  // Clears text in the body
  clearStatusClass(document.body);
  // Hides the next button after it is pressed
  nextButton.classList.add("hide");
  // Removes question/answers that were just used to ensure they aren't used again for remainder of quiz
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
// Tracking which answers were selected then making decisions based on whether correct/incorrect answer was chosen
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  // Logic dictating whether or not the quiz should continue or stop
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    // If quiz is over, then set start btn text to 'restart' and hide answer btns
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    // C = my timer, so this stops the timer and line 86 displays your score in the score section
    c = 1000000000;
    score.innerText = b - 5;
  }
}
// Sets element to correct/incorrect for styling and scorekeeping purposes
function setStatusClass(element, correct) {
  clearStatusClass(element)
  // If correct, increase score (b) by one
  if (correct) {
    element.classList.add("correct");
    b++;
  } else {
    element.classList.add("wrong")
    
  }
}
// Clearing all correct and wrong classes from answers
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
// All the questions used for the quiz
const questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: '<script>', correct: true },
      { text: '<javascript>', correct: false },
      { text: '<javascripting>', correct: false },
      { text: '<js>', correct: false }
    ]
  },
  {
    question: '<p id="demo">This is a demonstration.</p>',
    answers: [
      { text: 'document.getElementByName("p").innerHTML = "Hello World!";', correct: false },
      { text: '#demo.innerHtml = "Hello World!";', correct: false },
      { text: 'document.getElementById("demo").innerHTML = "Hello World!";', correct: true },
      { text: 'document.getElement("p").innerHTML = "Hello World!";', correct: false }
    ]
  },
  {
    question: 'Where is the correct place to insert a Javascript?',
    answers: [
      { text: 'The <Head> section', correct: false },
      { text: 'The <Body> section', correct: true },
      { text: 'Both the <Head> and the <Body> sections are correct', correct: false },
      { text: 'Neither the <Head> nor the <Body> sections are correct', correct: false }
    ]
  },
  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: [
      { text: '<script name="xxx.js">', correct: false },
      { text: '<script href="xxx.js">', correct: false },
      { text: '<script src="xxx.js">', correct: true },
      { text: '<link src="xxx.js">', correct: false }
    ]
  },{
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'alert("Hello World");', correct: true },
      { text: 'msg("Hello World");', correct: false },
      { text: 'msgBox("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: false }
    ]
  }
]
// Function for my timer
function timer () {
  c = c - 1;
  if (c < 60) {
    time.innerText = c;
  }
  // When timer hits 0, quiz shuts off and you see a message with 'time is up' and are shown a restart btn
  if (c < 1) {
    window.clearInterval(update);
    answerButtonsElement.classList.add("hide");
    questionElement.innerText = "Time is up!";
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}
// This sets the timer to be in seconds
update = setInterval("timer()", 1000);