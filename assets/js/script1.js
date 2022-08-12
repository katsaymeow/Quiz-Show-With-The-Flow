//started with the questions array
var questionsAsked = [
    {
        question: "How are CSS styles applied to an html file?", 
        choiceA: "with a div tag",
        choiceB: "in the title tag",
        choiceC: "in the head element with a link tag",
        choiceD: "in the footer element",
        correctAnswer: "in the head element with a link tag"
    },
    {
        question: "It is best practice to..",
        choiceA: "use a stylesheet for each element",
        choiceB: "follow accessiblitiy standards for styling",
        choiceC: "create your stylesheet before your index",
        choiceD: "use primary colors to make styling bright",
        correctAnswer: "follow accessiblitiy standards for styling"
    },
    {
        question: "How is JavaScript used?",
        choiceA: "as a reference for CSS",
        choiceB: "to utilize a web-broswers features",
        choiceC: "it is only used for comment box forms",
        choiceD:"to add dynamic content to a web page",
        correctAnswer: "to add dynamic content to a web page"
    },
    {
        question: "If your code is broken, try",
        choiceA: "making sure your CSS and javascript files are linked",
        choiceB: "console.log() to see which funtions are working correctly",
        choiceC: "ask for help, you could have just stared at it to long",
        choiceD: "all of the above",
        correctAnswer: "all of the above"

    }
];
//sets array to zero

//add var for que
//create varible.
// var lastQuestionArray = questionsAsked.length - 1;
var currentQuestionIndex = 0;
var questionInput = document.getElementById('question-input');
var answerA = document.getElementById('A');
var answerB = document.getElementById('B');
var answerC = document.getElementById('C');
var answerD = document.getElementById('D');
var choiceButtons = document.querySelectorAll(".js-choice")
//loadQuestions() adds the content to the box
function loadQuestions(){
    var q = questionsAsked[currentQuestionIndex];
    questionInput.innerHTML = q.question;
    answerA.innerHTML = q.choiceA;
    answerB.innerHTML = q.choiceB;
    answerC.innerHTML = q.choiceC;
    answerD.innerHTML = q.choiceD;
    for (let index = 0; index < choiceButtons.length; index++) {
        const choiceButton = choiceButtons[index];
        choiceButton.dataset.questionIndex = currentQuestionIndex;
        choiceButton.addEventListener("click", function (e){
            var answerText = e.target.innerHTML;
            var questionIndex = e.target.dataset.questionIndex;
            var choiceQuestion = questionsAsked[questionIndex];
            var correctAnswer = choiceQuestion.correctAnswer;
            console.log(currentQuestionIndex);
            if (answerText === correctAnswer) {
                console.log("correct");
                // answerIsCorrect();
                currentQuestionIndex++;
                loadQuestions();
            } else { (answerText !== correctAnswer) 
                currentQuestionIndex++
                console.log("wrong");
            }
        } )
    }
 
    
    // add an event listener to your answer buttons. When clicked we increase the totalQuestionArray++ and then we evaluate the answer, we can also load the next questions using loadQuestions 
}
loadQuestions();
//this need to finish loading next
//HOW TO LISTEN FOR THE CORRECTANSWER???

// this function is for the timer
var time = 90;
var wrongTime = (time - 10);
var timeEl = document.getElementById("timeEl");

function timer() {
    setInterval(timeEl = Math.floor((time % (1000 * 60)) / 1000))
    if (wrongAnswerCount +1) timer() - wrongTime;
}

// var submitBtn = document.querySelector("click", "submit-button");
// var nextBtn = document.querySelector("click", "next-button");
// FINISH ME
var startBtn = document.querySelector("click", ".start-button");
// startBtn.addEventListener("click", loadQuestions(), timer());
// function 

var rightAnswerCount = 0;
var rightAnswer = document.getElementById("answer-right");
var wrongAnswerCount = 0;
var wrongAnswer = document.getElementById("answer-wrong");

function scoreDisplay(answer){

    if(questionsAsked.correct == answer){
        rightAnswerCount++;
        answerIsCorrect();
        rightAnswer.innerHTML = rightAnswerCount;
    } else {
        wrongAnswerCount++;
        answerIsWrong();
        wrongAnswer.innerHTML = wrongAnswerCount;
    }
}
function answerIsCorrect() {
    document.getElementById("correct")
}
function answerIsWrong(){
    document.getElementById("wrong")
 }
//post the score to the html
function scoreOutput(){
    for(var qArray = 0; qArray <= lastQuestionArray; qArray++){
      score += "" + qArray; 
    }//not sure if this will work
};
//functions for correct and incorrect answers

// console.log(userAnswer)
// console.log(startQuiz)
// console.log(timer)
// console.log(loadQuestions)
// function timerStart() {
  
//     var timerInterval = setInterval(function() {
//       timerCount--;
//       timer.innerHTML = timerCount;
  
//       if(timerCount <= 0) {
       
//           clearInterval(timerInterval);
//       }
  
//     }, 1000);
// }