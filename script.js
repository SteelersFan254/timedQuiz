var questions = [
        {
            "questionNum": 1,
            "question": "How many Super Bowl appearances do the Steelers have?",
            "answers": [6, 7, 8, 9],
            "correct": 8
        },
        {
            "questionNum": 2,
            "question": "How many Super Bowl wins do the Steelers have?",
            "answers": [5, 6, 7, 8],
            "correct": 6
        },
        {
            "questionNum": 3,
            "question": "Which running back has the most rushing yards in franchise history?",
            "answers": ["Franco Harris", "Jerome Bettis", "Willie Parker", "Le'Veon Bell"],
            "correct": "Franco Harris"
        },
        {
            "questionNum": 4,
            "question": "Which player has the most recieving yards in franchise history?",
            "answers": ["Lynn Swann", "John Stallwordth", "Hines Ward", "Antonio Brown"],
            "correct": "Hines Ward"
        },
        {
            "questionNum": 5,
            "question": "Who owns the Pittsburgh Steelers franchise?",
            "answers": ["Mike Tomlin", "Dan Rooney", "Kevin Colbert", "Bill Cowher"],
            "correct": "Dan Rooney"
        }
]

var modalEl = document.getElementById("modal");
var welcomeEl = document.getElementById("welcome");
var startBtn =document.getElementById("startBtn");
var nextBtn = document.getElementById("nexter");

var questionI = 0
// var ul = document.createElement("ul");
// modalEl.appendChild(ul);

function runQuiz(){
    // for ( i=0;i < questions.length;i++){
        var ul = document.createElement("ul");
        ul.setAttribute("id", "questionList");
        questions[questionI].answers.forEach(function(choice) {
            var li = document.createElement("li");
            li.textContent = choice;
            ul.appendChild(li);
        })
        modalEl.prepend(ul);
        var question = document.createElement("div");
        question.setAttribute("id", "question");
        question.textContent= questions[questionI].question;
        modalEl.prepend(question);
        var titleDiv = document.createElement("div");
        titleDiv.setAttribute("id", "questionnumber");
        titleDiv.textContent = "Question" + questions[questionI].questionNum;
        modalEl.prepend(titleDiv);

    // }
};

startBtn.addEventListener("click", function() {
    runQuiz();
    welcomeEl.setAttribute("style", "display:none")
    modalEl.setAttribute("style", "display:block")
});

nextBtn.addEventListener("click", function() {
    questionI++;
    var ul = document.getElementById("questionList");
    while(ul.firstChild) { 
        ul.removeChild(ul.firstChild); 
    } 
    questions[questionI].answers.forEach(function(choice) {
        var li = document.createElement("li");
        li.textContent = choice;
        ul.appendChild(li);
    })
    var question = document.getElementById("question");
    question.textContent= questions[questionI].question;

    var titleDiv = document.getElementById("questionnumber")
    titleDiv.textContent = "Question" + questions[questionI].questionNum;
    return questionI;
});

keepscore();

function keepscore () {
    setInterval(displayScore, 1000);
}

var score = 100;

function displayScore () {
    var timer = document.getElementById("timer");
    timer.textContent = score;
    score--;
    return score;
}