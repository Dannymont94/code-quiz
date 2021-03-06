// define HTML element targets
const bodyEl = document.querySelector("body");
const headerEl = document.querySelector("header");
const viewHighScoresEl = document.querySelector("#view-high-scores");
const timerSpanEl = document.querySelector("#timer");
const pageTitleEl = document.querySelector("#page-title");
const quizEl = document.querySelector("#quiz");
const questionEl = document.querySelector("#question");
const answersContainerEl = document.querySelector("#answer-choices");
const choiceBtn1 = document.querySelector("#choice-button-1");
const choiceBtn2 = document.querySelector("#choice-button-2");
const choiceBtn3 = document.querySelector("#choice-button-3");
const choiceBtn4 = document.querySelector("#choice-button-4");
const startBtn = document.querySelector("#start-btn");
const highScoreEntryEl = document.querySelector("#high-score-entry");
const initialEntryEl = document.querySelector("#initial-entry");
const highScoreSubmitBtn = document.querySelector("#high-score-submit");
const highScoresListEl = document.querySelector("#high-scores-list");
const quizEndEl = document.querySelector("#quiz-end-form");
const goBackBtn = document.querySelector("#restart-btn");
const clearHighScoresBtn = document.querySelector("#clear-scores-btn")
const feedbackEl = document.querySelector("#feedback");

// create quiz bank array
const quizBankArr = [
    {question: "What case is used in JavaScript?", choice1: "UPPERCASE", choice2: "kebab-case", choice3: "snake_case", choice4: "camelCase", answer: "4"},
    {question: "What case is used in CSS?", choice1: "camelCase", choice2: "kebab-case", choice3: "lowercase", choice4: "snake_case", answer: "2"},
    {question: "Which CSS selector has the highest specificity?", choice1: "Psuedo-Element Selector", choice2: "Class Selector", choice3: "Element Selector", choice4: "ID Selector", answer: "4"},
    {question: "Which HTML element is used to link a JavaScript file?", choice1: "<script>", choice2: "<link>", choice3: "<src>", choice4: "<js>", answer: "1"},
    {question: "Which HTML element is used to link a CSS stylesheet?", choice1: "<script>", choice2: "<link>", choice3: "<css>", choice4: "<stylesheet>", answer: "2"},
    {question: "What is the best place to insert a <script> tag?", choice1: "The bottom of the <head> section", choice2: "The top of the <head> section", choice3: "The bottom of the <body> section", choice4: "The top of the <body> section", answer: "3"},
    {question: 'How would you write "Hello World" in an alert box?', choice1: 'alert("Hello World");', choice2: 'alert.HelloWorld', choice3: 'alert(Hello World);', choice4: 'alertUser("Hello World");', answer: "1"},
    {question: "How do you declare a function in JavaScript?", choice1: 'function ("myFunction") = {};', choice2: "function.myFunction(){};", choice3: "function myFunction(){}", choice4: "function = myFunction(){}", answer: "3"},
    {question: "How do you call a function in JavaScript?", choice1: "call myFunction;", choice2: "myFunction();", choice3: 'call("myFunction");', choice4: "execute myFunction();", answer: "2"},
    {question: "How do you write an if statement in JavaScript?", choice1: "if (i = 5)", choice2: "if i === 5", choice3: 'if "i === 5"', choice4: "if (i === 5)", answer: "4"},
    {question: "How does a WHILE loop start?", choice1: "while (i <= 10)", choice2: 'while "i <= 10"' , choice3: "while (i =< 10)", choice4: "while i <= 10", answer: "1"},
    {question: "How does a FOR loop start?", choice1: "for (i = 0++)", choice2: "for i = 1", choice3: "for (i = 0; i++)", choice4: "for (var i = 0; i < 5; i++)", answer: "4"},
    {question: "How do you add a comment in HTML?", choice1: "<!-- my comment -->", choice2: "// my comment", choice3: "/* my comment */", choice4: 'comment: "my comment"', answer: "1"},
    {question: "How do you add a comment in CSS?", choice1: "// my comment", choice2: "<!-- my comment -->", choice3: "/* my comment */", choice4: "{my-comment: my comment}", answer: "3"},
    {question: "How do you add a comment in JavaScript?", choice1: "<!-- my comment -->", choice2: "// my comment", choice3: 'comment("my comment")', choice4: 'var myComment = "my comment"', answer: "2"},
    {question: "How do you add a comment in JavaScript that has more than one line?", choice1: "/* my multi-line comment */", choice2: "<!-- my multi-line comment -->", choice3: 'comment("my multi-line comment")', choice4: "// my multi-line comment //", answer: "1"},
    {question: "How do you create a JavaScript array?", choice1: 'var colors = "red", "blue", "green";', choice2: 'var colors = ["red", "blue", "green"];', choice3: 'array colors = ["red", "blue", "green"];', choice4: 'var colors = ("red", "green", "blue");', answer: "2"},
    {question: "What method in JavaScript will always round down to the nearest whole number?", choice1: "Math.round(x)", choice2: "Math.floor(x)", choice3: "Math.random(x)", choice4: "Math.abs(x)", answer: "2"},
    {question: "The Math.random method will return a random number between ______.", choice1: "-1 and 1", choice2: "0 and 100", choice3: "1 and 10", choice4: "0 and 1", answer: "4"},
    {question: "How can we execute a function callback when a user clicks on a button?", choice1: "click.myButtonEl.myFunction();", choice2: "myButtonEl.clickListener.myFunction();", choice3: "myButtonEl.onclick.myFunction();", choice4: 'myButtonEl.onclick = myFunction;', answer: "4"},
    {question: "How do you declare a JavaScript variable?", choice1: "var myVar = value;", choice2: "myVar = value;", choice3: "variable myVar = value;", choice4: "var(myVar) = value;", answer: "1"},
    {question: "What is the logical operator for OR?", choice1: "%%", choice2: "&&", choice3: "||", choice4: "$$", answer: "3"},
    {question: "What is the logical operator for AND?", choice1: "||", choice2: "^^", choice3: "##", choice4: "&&", answer: "4"},
    {question: "Which operator is used to assign a value to a variable?", choice1: "=", choice2: "==", choice3: "===", choice4: "!=", answer: "1"},
    {question: "Which of the following is not a JavaScript event?", choice1: "submit", choice2: "link", choice3: "drop", choice4: "click", answer: "2"}
];

// shuffle quiz bank array
quizBankArr.sort(function() {
    return 0.5 - Math.random()
});

// define other variables
var timeRemaining = 150;
var score = 0;
var lastQuestionIndex = quizBankArr.length -1;
var currentQuestionIndex = 0;
var countdown = "";
var highScores = JSON.parse(localStorage.getItem("highScoreData")) || [];
var maxHighScores = 5;

// starts counter and starts loading questions
function startQuiz() {
    viewHighScoresEl.classList.add("hidden");
    headerEl.setAttribute("style", "justify-content:center");
    pageTitleEl.classList.add("hidden");
    startBtn.classList.add("hidden");
    answersContainerEl.classList.remove("hidden");
    countdown = setInterval(timer, 1000);
    askQuestions();
}

// display timeRemaining to user and decrement timeRemaining once per second
function timer() {
    // when timer reaches 0, the game is over
    if (timeRemaining <= 0) {
        clearInterval(countdown);
        checkGameOver();
    }
    timerSpanEl.textContent = timeRemaining;
    timeRemaining--;
}

// asks user questions from quizBankArr
function askQuestions() {
    // display questions as text and answer choices as buttons
    questionEl.textContent = "#" + (currentQuestionIndex+1) + ": " + quizBankArr[currentQuestionIndex].question;
    choiceBtn1.textContent = "1. " + quizBankArr[currentQuestionIndex].choice1;
    choiceBtn2.textContent = "2. " + quizBankArr[currentQuestionIndex].choice2;
    choiceBtn3.textContent = "3. " + quizBankArr[currentQuestionIndex].choice3;
    choiceBtn4.textContent = "4. " + quizBankArr[currentQuestionIndex].choice4;
};

// checks user's answer against correct answer
function checkResponse(response) {
    // if correct, let user know they answered correctly and increment score by 1
    if (response == quizBankArr[currentQuestionIndex].answer) {
        score += 10;
        feedbackEl.textContent = "Correct!";
        bodyEl.setAttribute("style", "background-color:rgb(0, 151, 70)");
        feedbackEl.classList.remove("hidden");
        setTimeout(clearFeedback, 1000 * .75);
        checkGameOver();
    }
    // if wrong, let user know they answered incorrectly and decrement timer by 10
    else {
        timeRemaining -= 10;
        if (timeRemaining <= 0) {
            timeRemaining = 0;
        }
        timerSpanEl.textContent = timeRemaining;
        feedbackEl.textContent = "Wrong!";
        bodyEl.setAttribute("style", "background-color:rgb(206, 66, 87)");
        feedbackEl.classList.remove("hidden");
        setTimeout(clearFeedback, 1000 * .75);
        checkGameOver();
    }
}

function clearFeedback() {
    feedbackEl.classList.add("hidden");
    bodyEl.setAttribute("style", "background-color:white");
}

function checkGameOver() {
    // when end of question array is reached, game is over
    if (currentQuestionIndex === lastQuestionIndex || timeRemaining <= 0) {
        answersContainerEl.classList.add("hidden");
        clearInterval(countdown);
        endQuiz();
    } 
    // if there are more questions left to ask, generate them
    else {
        currentQuestionIndex++;
        askQuestions();
    }
}

// display user's final score and ask for their initials
function endQuiz() {
    highScoreEntryEl.classList.remove("hidden");
    questionEl.textContent = "Final Score: " + score;
}

// store final score and initials in localStorage if within top 5 results
function storeHighScore(event){
    event.preventDefault();

    var mostRecentScore = {initials: initialEntryEl.value.toUpperCase(), highScore: score};
    highScores.push(mostRecentScore);
    highScores.sort(function(a,b) {
        return b.highScore - a.highScore;
    })
    highScores.splice(maxHighScores);
    localStorage.setItem("highScoreData", JSON.stringify(highScores));

    highScoreEntryEl.classList.add("hidden");
    questionEl.classList.add("hidden");
    displayHighScores();
}

// display top 5 high scores. Ask user if they want to clear scores or go back to quiz start page.
function displayHighScores() {
    if (localStorage.getItem("highScoreData")) {
        headerEl.classList.add("hidden");
        questionEl.classList.add("hidden");
        startBtn.classList.add("hidden");
        pageTitleEl.textContent = "High Scores";
        pageTitleEl.setAttribute("style", "margin-top: 90px");
        pageTitleEl.classList.remove("hidden");
        goBackBtn.classList.remove("hidden");
        clearHighScoresBtn.classList.remove("hidden");
        var highScoreData = JSON.parse(localStorage.getItem("highScoreData"));
        highScoresListEl.classList.remove("hidden");
        highScoresListEl.innerHTML = highScoreData.map(function(score) {
            return '<li class="high-score">' + score.initials + " - " + score.highScore + "</li>"
        }).join("");
    }
    else {
        noHighScores();
    }
}

// if user clicks "view high scores" while highScoreData in localStorage doesn't exist OR if user clears highScoreData from localStorage
function noHighScores() {
    pageTitleEl.textContent = "No High Scores!";
    pageTitleEl.setAttribute("style", "margin-top: 90px");
    headerEl.classList.add("hidden");
    questionEl.classList.add("hidden");
    startBtn.classList.add("hidden");
    goBackBtn.classList.remove("hidden");
}

// clear data from localStorage if there is any
function clearHighScores() {
    event.preventDefault();
    localStorage.removeItem("highScoreData")
    highScoresListEl.classList.add("hidden");
    clearHighScoresBtn.classList.add("hidden");
    noHighScores();
}

startBtn.onclick = startQuiz;

choiceBtn1.addEventListener("click", function() {checkResponse(1)});
choiceBtn2.addEventListener("click", function() {checkResponse(2)});
choiceBtn3.addEventListener("click", function() {checkResponse(3)});
choiceBtn4.addEventListener("click", function() {checkResponse(4)});

highScoreEntryEl.addEventListener("submit", storeHighScore);

viewHighScoresEl.addEventListener("click", displayHighScores);

clearHighScoresBtn.addEventListener("click", clearHighScores);