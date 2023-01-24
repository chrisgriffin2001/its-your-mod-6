//vars to keep track of quiz state

let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;


// HTML elements; 
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let startButton = document.getElementById("start");
let submitButton = document.getElementById("submitn");
let initialElement = document.getElementById("initials");
let feedBackElement = document.getElementById("feedback")

let sfxRight = new Audio("assets/sfx/correct.wav");


function quizEnd(){
    clearInterval(timerID);
    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;
    
    questionsElement.setAttribute("class","hide");

}


function clocktick(){
    time--;
    timerElement.textContent = time;

    if(tiem <= 0){
        quizEnd();
        
    }
}

function startQuiz(){
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clocktick, 1000)

    timerElement.textContent = time;

    getQuestion(); 

}

function questionClick(){
    let currentQuestion = questions[currentQuestionIndex];

    let timerElement = document.getElementById("question-title");

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choices, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton,textContent = `${index + 1}. ${choice}`

        choiceButton.addEventListener("click", questionClick);

        choicesElement.append(choiceButton);


    })
    
}

function clocktick(){
    time--;
    timerElement.textContent = time;

    if(tiem <= 0){
        quizEnd();
        
    }
}

function saveHighScore(){

}
function checkForEnter(evnt){

}

startButton.addEventListener("click", startQuiz);

