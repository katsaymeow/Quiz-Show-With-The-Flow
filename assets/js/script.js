
console.log(questionsAsked)

var startQuizBtn = document.getElementsByClassName (".start-quiz");
var summitBtn = document.getElementById("submit");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var questionInput = document.getElementsByClassName ("question-input");
var correctAnswer = document.querySelectorAll(".answer");

var currentQuiz = 0
var score = 0

startQuiz()

function startQuiz() {
    deselectAnswers()
    
    var currentQuestionsAsked = questionsAsked[question]
    questionInput.innerText = currentQuestionsAsked.question
    A.innerText = currentQuestionsAsked.A
    B.innerText = currentQuestionsAsked.B
    C.innerText = currentQuestionsAsked.C
    D.innerText = currentQuestionsAsked.D
}

function deselectAnswers() {
    correctAnswer.forEach(correctAnswer => correctAnswer.checked = false)
}
function selectedAnswers() {
    var rightAnswer
    rightAnswer.forEach(correctAnswer => {
        if(correctAnswer.checked){
            answer = correctAnswer.id
        }
    })
    return answer
}

timeEl.on(function countDownEl() {
    var tickReso = 1000;
    var timerLength= 10;
    var timeEl = timerLength * tickReso;
    till = till <= 0 ? 0 : till;
    if(till) {
                if(document.visibilityState === "visible") {
                    timeEl.textContent = (till / tickReso + 1 | 0);
                }
                timeEl.dateTime = "PT0H0M" + (till / tickReso + 1 | 0) + "S";
                timeHdl = setTimeout( countDownEl, (till % tickReso) + 10);
            } else {
                timeEl.dateTime = "PT0H0M0S";
                timeEl.textContent = 0;
            }
        console.log(till);
        countDownEl.output(till);
});


questionsAsked.forEach(( {
    question: "",
    A: "",
    B: "",
    C: "",
    D: "",
    correctAnswer: ""
},
index, array, {
    question: "",
    A: "",
    B: "",
    C: "",
    D: "",
    correctAnswer: ""
} 
) )
var currentQuestionsAsked = questionsAsked[question]
questionInput.innerText = currentQuestionsAsked.question
A.innerText = currentQuestionsAsked.A
B.innerText = currentQuestionsAsked.B
C.innerText = currentQuestionsAsked.C
D.innerText = currentQuestionsAsked.D
// for(i = 0; i < questionsAsked.length; i++){
// }



