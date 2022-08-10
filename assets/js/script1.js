var questionsAsked = [
    {
        question: "How are CSS styles applied to an html file?", 
        
        A: "with a div tag",
        B: "in the title tag",
        C: "in the head element with a link tag",
        D: "in the footer element",
        correctAnswer: "C"
    },
    {
        question: "It is best practice to..",
        A: "use a stylesheet for each element",
        B: "follow accessiblitiy standards for styling",
        C: "create your stylesheet before your index",
        D: "use primary colors to make styling bright",
        correctAnswer: "B"
    },
    {
        question: "How is JavaScript used?",
        A: "as a reference for CSS",
        B: "to utilize a web-broswers features",
        C: "it is only used for comment box forms",
        D:"to add dynamic content to a web page",
        correctAnswer: "D"
    },
    {
        question: "If your code is broken, try",
        A: "making sure your CSS and javascript files are linked",
        B: "console.log() to see which funtions are working correctly",
        C: "ask for help, you could have just stared at it to long",
        D: "all of the above" ,
        correctAnswer: "D"

    }
];
console.log(questionsAsked)
var questionInput = document.getElementsByClassName('question-input');
var answerA = document.getElementById('A');
var answerB = document.getElementById('B');
var answerC = document.getElementById('C');
var answerD = document.getElementById('D');
var submitBtn = document.querySelector("click", "submit-button");
var nextBtn = document.querySelector("click", "next-button");
var timeEl = document.getElementById("timeEl");
var rightAnswerCount = 0;
var wrongAnswerCount = 0;
var startBtn = document.querySelector
("click", "start-button");

function Timer() {
   
}


function startQuiz(questionsAsked, questionsInput,  ) {
   
} 

console.log(startQuiz)
// function startTimer();