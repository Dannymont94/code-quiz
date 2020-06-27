// create timer variable that starts at 75 and score variable that starts at 0
var timeRemaining = 3;
var score = 0;
var viewHighScoresEl = document.querySelector("#high-scores");
var timerSpanEl = document.querySelector("#timer");
var pageTitleEl = document.querySelector("#page-title");
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector("questions");
var answersContainerEl = document.querySelector("#answers");
var answerBtn1 = document.querySelector("#answer-button-1");
var answerBtn2 = document.querySelector("#answer-button-2");
var answerBtn3 = document.querySelector("#answer-button-3");
var answerBtn4 = document.querySelector("#answer-button-4");
var startBtn = document.querySelector("#start-btn");
var feedbackEl = document.querySelector("#response-feedback");

// create question and answer choice array
var quizQuestionsArr = [
    {question: "#1. What case is used in JavaScript?", choice1: "camelCase", choice2: "kebab-case", choice3: "snake_case", choice4: "UPPERCASE", answer: "camelCase"},
    {question: "#2. What case is used in CSS?", choice1: "kebab-case", choice2: "camelCase", choice3: "lowercase", choice4: "snake_case", answer: "kebab-case"},
    {question: "#3. Which CSS selector has the highest specificity?", choice1: "ID Selector", choice2: "Class Selector", choice3: "Element Selector", choice4: "Psuedo-Element Selector", answer: "kebab-case"},
    {question: "#4. Which HTML element is used to link the JavaScript file?", choice1: "<script>", choice2: "<link>", choice3: "<src>", choice4: "<js>", answer: "ID Selector"},
    {question: "#5. Which HTML element is used to link the CSS file?", choice1: "<link>", choice2: "<script>", choice3: "<css>", choice4: "<stylesheet>", answer: "<link>"},
    {question: "#6. Which is the correct place to insert a <script> tag?", choice1: "The bottom of the <body> section", choice2: "The top of the <head> section", choice3: "The bottom of the <head> section", choice4: "The top of the <body> section", answer: "The bottom of the <body> section"},
    {question: '#7. How would you write "Hello World" in an alert box?', choice1: 'alert("Hello World");', choice2: 'alert.HelloWorld', choice3: 'alert(Hello World);', choice4: 'alertUser("Hello World");', answer: 'alert("Hello World");'},
    {question: "#8. How do you declare a function in JavaScript?", choice1: "function myFunction(){}", choice2: "function.myFunction(){};", choice3: 'function ("myFunction") = {};', choice4: "function = myFunction(){}", answer: "function myFunction(){}"},
    {question: "#9. How do you call a function in JavaScript?", choice1: "myFunction();", choice2: "call myFunction;", choice3: 'call("myFunction");', choice4: "execute myFunction();", answer: "myFunction();"},
    {question: "#10. How do you write an if statement in JavaScript?", choice1: "if (i === 5)", choice2: "if i === 5", choice3: 'if "i === 5"', choice4: "if (i = 5)", answer: "if (i === 5)"},
    {question: "#11. How does a WHILE loop start?", choice1: "while (i <= 10)", choice2: 'while "i <= 10"' , choice3: "while (i =< 10)", choice4: "while i <= 10", answer: "while (i <= 10)"},
    {question: "#12. How does a FOR loop start?", choice1: "for (var i = 0; i < 5; i++)", choice2: "for i = 1", choice3: "for (i = 0; i++)", choice4: "for (i = 0++)", answer: "for (var i = 0; i < 5; i++)"},
    {question: "#13. How do you add a comment in HTML?", choice1: "<!-- my comment -->", choice2: "// my comment", choice3: "/* my comment */", choice4: 'comment: "my comment"', answer: "<!-- my comment -->"},
    {question: "#14. How do you add a comment in CSS?", choice1: "/* my comment */", choice2: "<!-- my comment -->", choice3: "// my comment", choice4: "comment {my-comment: my comment}", answer: "/* my comment */"},
    {question: "#15. How do you add a comment in JavaScript?", choice1: "// my comment", choice2: "<!-- my comment -->", choice3: 'comment("my comment")', choice4: 'var myComment = "my comment"', answer: "// my comment"},
    {question: "#16. How do you add a comment in JavaScript that has more than one line?", choice1: "/* my multi-line comment */", choice2: "<!-- my multi-line comment -->", choice3: 'comment("my multi-line comment")', choice4: "// my multi-line comment //", answer: "/* my multi-line comment */"},
    {question: "#17. How do you create a JavaScript array?", choice1: 'var colors = ["red", "blue", "green"];', choice2: 'var colors = "red", "blue", "green";', choice3: 'array colors = ["red", "blue", "green"];', choice4: 'var colors = ("red", "green", "blue");', answer: 'var colors = ["red", "blue", "green"];'},
    {question: "#18. What method in JavaScript will always round a number down to the nearest whole number?", choice1: "Math.floor(x)", choice2: "Math.round(x)", choice3: "Math.random(x)", choice4: "Math.abs(x)", answer: "Math.floor(x)"},
    {question: "#19. The Math.random method will return a random number between ______.", choice1: "0 and 1", choice2: "0 and 100", choice3: "1 and 10", choice4: "-1 and 1", answer: "0 and 1"},
    {question: "#20. How can we execute a function callback when a user clicks on a button?", choice1: 'myButtonEl.addEventListener("click", myFunction);', choice2: "myButtonEl.clickListener.myFunction();", choice3: "myButtonEl.onclick.myFunction();", choice4: "click.myButtonEl.myFunction();", answer: 'myButtonEl.addEventListener("click", myFunction);'},
    {question: "#21. How do you declare a JavaScript variable?", choice1: "var myVar = value;", choice2: "myVar = value;", choice3: "variable myVar = value;", choice4: "var(myVar) = value;", answer: "var myVar = value;"},
    {question: "#22. What is the logical operator for OR?", choice1: "||", choice2: "&&", choice3: "%%", choice4: "$$", answer: "||"},
    {question: "#23. What is the logical operator for AND?", choice1: "&&", choice2: "^^", choice3: "##", choice4: "||", answer: "&&"},
    {question: "#24. Which operator is used to assign a value to a variable?", choice1: "=", choice2: "==", choice3: "===", choice4: "!=", answer: "="},
    {question: "#25. Which of the following is not a JavaScript event?", choice1: "link", choice2: "submit", choice3: "drop", choice4: "click", answer: "link"}
];

// declare function that starts counter and asks user questions
function startQuiz() {
    askQuestions();
}

// declare function that displays timeRemaining to user and decrements timeRemaining once per second
function countdown() {
    var timerInterval = setInterval(function() {
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            // recordHighScore();
        }
        timerSpanEl.textContent = timeRemaining;
        console.log(timeRemaining);
        timeRemaining--;
    }, 1000);
}

// declare function that asks user questions
function askQuestions() {
    if (timeRemaining > 0) {
        for (var i = 0; i < quizQuestionsArr.length; i++) {
            console.log(quizQuestionsArr[i].question);
        }
    }
};

// display questions as text and answer choices as buttons

// determine if user selected correct answer

    // if correct, let user know they answered correctly and increment score. Feedback message goes away after a few seconds.

    // if wrong, let user know they answered incorrectly and decrease timer by 10. Feedback message goes away after a few seconds.

// when timer reaches 0 or end of question array is reached, the game is over. Display user's final score and ask for their initials.

// store final score and initials in localStorage

// display top 5 high scores. Ask user if they want to clear scores or go back to quiz start page.



// start quiz when start button is clicked
startBtn.onclick = startQuiz;