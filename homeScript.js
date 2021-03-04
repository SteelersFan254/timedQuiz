var questions = [
    {
        "questionNum": 1,
        "question": "How many Super Bowl appearances do the Steelers have?",
        "answers": ["6", "7", "8", "9"],
        "correct": "8"
    },
    {
        "questionNum": 2,
        "question": "How many Super Bowl wins do the Steelers have?",
        "answers": ["5", "6", "7", "8"],
        "correct": "6"
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
];
var players = [];
var keyCode = 1;
var questionI = 0;
var score = 99;

var modalEl = document.getElementById("modal");
var welcomeEl = document.getElementById("welcome");
var startBtn = document.getElementById("startBtn");
var highScoreTable = document.getElementById("highScoreTable");



/////////////////////////////////////////////////
startBtn.addEventListener("click", function () {
    getQuestion();
    welcomeEl.setAttribute("style", "display:none");
    modalEl.setAttribute("style", "display:block");
    keepscore();
});

function getQuestion() {
    var ul = document.createElement("ul");
    ul.setAttribute("id", "questionList");
    questions[questionI].answers.forEach(function (choice) {
        var li = document.createElement("li");
        li.innerHTML = choice;
        ul.appendChild(li);
    })
    modalEl.prepend(ul);
    var question = document.createElement("div");
    question.setAttribute("id", "question");
    question.textContent = questions[questionI].question;
    modalEl.prepend(question);
    var titleDiv = document.createElement("div");
    titleDiv.setAttribute("id", "questionnumber");
    titleDiv.textContent = "Question" + questions[questionI].questionNum;
    modalEl.prepend(titleDiv);
};

/////////////////////////////////////////////////////////////////////

modalEl.addEventListener("click", function (event) {
    if (event.target.matches("li") && questionI < 4) {
        if (event.target.innerHTML === questions[questionI].correct) {
            console.log("correct")
        } else {
            console.log("incorrect")
            score = score - 10;
        }
        generateQuestions();
    } else if (event.target.matches("li")) {
        console.log("finished")
        while (modalEl.firstChild) {
            modalEl.removeChild(modalEl.firstChild);
        };
        clearInterval(displayScore, minusScore);
        var h1 = document.createElement("h1");
        h1.textContent = "You're finished!"
        modalEl.appendChild(h1);
        var p = document.createElement("p");
        p.textContent = "Your score was " + score;
        modalEl.appendChild(p);
        var p2 = document.createElement("p");
        p2.textContent = "Enter your initials below";
        modalEl.appendChild(p2);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        modalEl.appendChild(input);
        window.addEventListener('keydown', e => {
            if ('Enter' === e.key) {
                console.log(input.value);
                console.log(score);
                if (JSON.parse(localStorage.getItem("players")) !== null) {
                    players = JSON.parse(localStorage.getItem("players"));
                    keyCode = players.length + 1;
                    players.push(
                        {
                            initials: input.value,
                            score: score,
                            keyCode: keyCode
                        }
                    )
                } else {
                    players.push(
                        {
                            initials: input.value,
                            score: score,
                            keyCode: keyCode
                        }
                    )
                }
                keyCode++;
                console.log(keyCode);
                localStorage.setItem("players", JSON.stringify(players));
                return keyCode;
            }
        }, false);
    }
});

function generateQuestions() {
    questionI++;
    var ul = document.getElementById("questionList");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    questions[questionI].answers.forEach(function (choice) {
        var li = document.createElement("li");
        li.textContent = choice;
        ul.appendChild(li);
    })
    var question = document.getElementById("question");
    question.textContent = questions[questionI].question;

    var titleDiv = document.getElementById("questionnumber")
    titleDiv.textContent = "Question" + questions[questionI].questionNum;
    return questionI;
}

////////////////////////////////////////////////////////////////////
function keepscore() {
    displayScore;
    minusScore;
}

var displayScore = function () {
    var timer = document.getElementById("timer");
    timer.textContent = score;
}

var minusScore = function () {
    score--;
    return score;
}




