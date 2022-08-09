var startQuiz = document.querySelector(".start-quiz");
var A = document.querySelector(".A");
var B = document.querySelector(".B");
var C = document.querySelector(".C");
var D = document.querySelector(".D");
var question = document.querySelector(".question-input");
// var submitAnswer = document.addEventListener("click", checkAnswer());
var questionsAsked = [
    {
        question: "How are CSS styles applied to an html file?", 
        answers: {
        A: "with a div tag",
        B: "in the title tag",
        C: "in the head element with a link tag",
        D: "in the footer element" },
        correctAnswer: "C"
    },
    {
        question: "It is best practice to..",
        answers: {
        A: "use a stylesheet for each element",
        B: "follow accessiblitiy standards for styling",
        C: "create your stylesheet before your index",
        D: "use primary colors to make styling bright" },
        correctAnswer: "B"
    },
    {
        question: "How is JavaScript used?",
        answers: {
        A: "as a reference for CSS",
        B: "to utilize a web-broswers features",
        C: "it is only used for comment box forms",
        D:"to add dynamic content to a web page" },
        correctAnswer: "D"
    },
    {
        question: "If your code is broken, try",
        answers: {
        A: "making sure your CSS and javascript files are linked",
        B: "console.log() to see which funtions are working correctly",
        C: "ask for help, you could have just stared at it to long",
        D: "all of the above" },
        correctAnswer: "D"

    }
];

//this will trigger each question window and loop thru each question

var tickReso = 1000; // in ms
var timerLength = 60; // multiple of tickReso
startTimer.value = timerLength * tickReso;


document.addEventListener("visibilityChange", tick);

var endTime, timeHdl;
function startTimer(event) {
    endTime = performance.now() + Number(event.target.value);
    tick();
};
function tick() {
    clearTimeout(timeHdl);
    var till = endTime - performance.now();
    till = till <= 0 ? 0 : till;
    if(till) {
        if(document.visibilityState === "visible") {
            timeEl.textContent = (till / tickReso + 1 | 0);
        }
        timeEl.dateTime = "PT0H0M" + (till / tickReso + 1 | 0) + "S";
        timeHdl = setTimeout(tick, (till % tickReso) + 10);
    } else {
        timeEl.dateTime = "PT0H0M0S";
        timeEl.textContent = 0;
    }
}


// console.log(startTimer());
// console.log(questionsAsked)
//     function runQuiz() {
//        question.textContent;
//        A.textContent;
//        B.textContent;
//        C.textContent;
//        D.textContent;
    //    correctAnswer.addEventListener("click", checkAnswer())
    // }
   
    
    // {
    //    for( i=0, i<questionsAsked, i++;) {

    //    } 
    // } 

   

//do i need a answer() or can it be a var?
// checkAnswer()
//     if("click" === correctAnswer, correct++)
//  else (correct--)



startQuiz.addEventListener("click", startTimer);



