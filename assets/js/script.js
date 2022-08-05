var startQuiz = document.querySelector("start-quiz");
var choiceA = document.querySelector("A");
var choiceB = document.querySelector("B");
var choiceC = document.querySelector("C");
var choiceD = document.querySelector("D");
var correctAnswer = document.addEventListener("click", checkAnswer());
var questionHeading = document.querySelector("question-heading");
//this will trigger each question window and loop thru each question
startQuiz()
//do i need a answer() or can it be a var?
checkAnswer()
//this will
startQuiz.addEventListener("click", startQuiz());



//each question must 