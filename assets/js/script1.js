//started with the questions array
var questionsAsked = [
    {
        question: "How are CSS styles applied to an html file?", 
        
        choiceA: "with a div tag",
        choiceB: "in the title tag",
        choiceC: "in the head element with a link tag",
        choiceD: "in the footer element",
        correctAnswer: "C"
    },
    {
        question: "It is best practice to..",
        choiceA: "use a stylesheet for each element",
        choiceB: "follow accessiblitiy standards for styling",
        choiceC: "create your stylesheet before your index",
        choiceD: "use primary colors to make styling bright",
        correctAnswer: "B"
    },
    {
        question: "How is JavaScript used?",
        choiceA: "as a reference for CSS",
        choiceB: "to utilize a web-broswers features",
        choiceC: "it is only used for comment box forms",
        choiceD:"to add dynamic content to a web page",
        correctAnswer: "D"
    },
    {
        question: "If your code is broken, try",
        choiceA: "making sure your CSS and javascript files are linked",
        choiceB: "console.log() to see which funtions are working correctly",
        choiceC: "ask for help, you could have just stared at it to long",
        choiceD: "all of the above" ,
        correctAnswer: "D"

    }
];
questionsAsked[0].question;
questionsAsked[0].choiceA;
questionsAsked[0].choiceB;
questionsAsked[0].choiceC;
questionsAsked[0].choiceD;
questionsAsked[0].correctAnswer;

//create varible.
var lastQuestionArray = questionsAsked.length - 1;
var totalQuestionArray = 0;
var questionInput = document.getElementById('question-input');
var answerA = document.getElementById('A');
var answerB = document.getElementById('B');
var answerC = document.getElementById('C');
var answerD = document.getElementById('D');

//loadQuestions() adds the content to the box
function loadQuestions(){
    var q = questionsAsked[totalQuestionArray];
    questionInput.innerHTML = q.question;
    answerA.innerHTML = q.choiceA;
    answerB.innerHTML = q.choiceB;
    answerC.innerHTML = q.choiceC;
    answerD.innerHTML = q.choiceD;
}
totalQuestionArray = 0;
loadQuestions();
totalQuestionArray++;
loadQuestions();
scoreOutput();
timer();

//post the score to the html
function scoreOutput(){
    for(var qArray = 0; qArray <= lastQuestionArray; qArray++){
      score += "" + qArray; 
    }//not sure if this will work
};
//functions for correct and incorrect answers
function answerIsCorrect() {
    document.getElementById(lastQuestionArray).style.backgroundColor = "green"
}
function answerIsWrong(){
    document.getElementById(lastQuestionArray).style.backgroungColor = "red"
 }
// this function is for the timer
var time = 90;
var wrongTime = (time - 10);
var timeEl = document.getElementById("timeEl");

function timer() {
    setInterval(timeEl = Math.floor((time % (1000 * 60)) / 1000))
    if (wrongAnswerCount +1) timer() - wrongTime;
}

function userAnswer(answer){
    if(questionsAsked[totalQuestionArray].correct == answer){
        rightAnswerCount++;
        answerIsCorrect;
    } else {
        wrongAnswerCount++;
        answerIsWrong;
    }
    userAnswer();
}

var submitBtn = document.querySelector("click", "submit-button");
var nextBtn = document.querySelector("click", "next-button");
var startBtn = document.querySelector
("click", "start-button");

function startQuiz(){
    startBtn.style.display = "none";
    timer();
    loadQuestions();
    userAnswer();
    scoreOutput();
}

var rightAnswerCount = 0;
var rightAnswer = document.getElementById("answer-right");
var wrongAnswerCount = 0;
var wrongAnswer = document.getElementById("answer-wrong");
var score = 0;

function scoreDisplay(){
    rightAnswer.innerHTML = rightAnswerCount;
    wrongAnswer.innerHTML = wrongAnswerCount;
}

// startBtn.addEventListener("click", startQuiz);


console.log(userAnswer)
console.log(startQuiz)
console.log(timer)
console.log(loadQuestions)