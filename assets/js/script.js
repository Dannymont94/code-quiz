// create timer variable that starts at 75 and score variable that starts at 0
var timeRemaining = 60;
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
var startSubmitBtn = document.querySelector("#start-submit-btn");
var feedbackEl = document.querySelector("#response-feedback");

// create question and answer choice array
var quizQuestionsArr = [
    {question: "#1. What case is used in JavaScript?", answer1: "camelCase", answer2: "kebab-case", answer3: "snake_case", answer4: "UPPERCASE"},
    {question: "#2. What case is used in CSS?", answer1: "kebab-case", answer2: "camelCase", answer3: "lowercase", answer4: "snake_case"},
    {question: "#2. Which CSS selector has the highest specificity?", answer1: "ID Selector", answer2: "Class Selector", answer3: "Element Selector", answer4: "Psuedo-Element Selector"},
    {question: "#4. Which HTML element is used to link the JavaScript file?", answer1: "<script>", answer2: "<link>", answer3: "<src>", answer4: "<js>"},
    {question: "#5. Which HTML element is used to link the CSS file?", answer1: "<link>", answer2: "<script>", answer3: "<css>", answer4: "<stylesheet>"},
    {question: "#6. Which is the correct place to insert a <script> tag?", answer1: "The bottom of the <body> section", answer2: "The top of the <head> section", answer3: "The bottom of the <head> section", answer4: "The top of the <body> section"},
    {question: '#7. How would you write "Hello World" in an alert box?', answer1: 'alert("Hello World");', answer2: 'alert.HelloWorld', answer3: 'alert(Hello World);', answer4: 'alertUser("Hello World");'},
    {question: "#8. How do you declare a function in JavaScript?", answer1: "function myFunction(){}", answer2: "function.myFunction(){};", answer3: 'function ("myFunction") = {};', answer4: "function = myFunction(){}"},
    {question: "#9. How do you call a function?", answer1: "myFunction();", answer2: "call myFunction;", answer3: 'call("myFunction");', answer4: "execute myFunction();"},
    {question: "#10. How do you write an if statement in JavaScript?", answer1: "if (i === 5)", answer2: "if i === 5", answer3: 'if "i === 5"', answer4: "if (i = 5)"},
    {question: "#11. How does a WHILE loop start?", answer1: "while (i <= 10)", answer2: 'while "i <= 10"' , answer3: "while (i =< 10)", answer4: "while i <= 10"},
    {question: "#12. How does a FOR loop start?", answer1: "for (var i = 0; i < 5; i++)", answer2: "for i = 1", answer3: "for (i = 0; i++)", answer4: "for (i = 0++)"},
    {question: "#13. How do you add a comment in HTML?", answer1: "<!-- my comment -->", answer2: "// my comment", answer3: "/* my comment */", answer4: 'comment: "my comment"'},
    {question: "#14. How do you add a comment in CSS?", answer1: "/* my comment */", answer2: "<!-- my comment -->", answer3: "// my comment", answer4: "comment {my-comment: my comment}"},
    {question: "#15. How do you add a comment in JavaScript?", answer1: "// my comment", answer2: "<!-- my comment -->", answer3: 'comment("my comment")', answer4: 'var myComment = "my comment"'},
    {question: "#16. How do you add a comment in JavaScript that has more than one line?", answer1: "/* my multi-line comment */", answer2: "<!-- my multi-line comment -->", answer3: 'comment("my multi-line comment")', answer4: "// my multi-line comment //"},
    {question: "#17. How do you create a JavaScript array?", answer1: 'var colors = ["red", "blue", "green"];', answer2: 'var colors = "red", "blue", "green";', answer3: 'array colors = ["red", "blue", "green"];', answer4: 'var colors = ("red", "green", "blue");'},
    {question: "#18. What method in JavaScript will always round a number down to the nearest whole number?", answer1: "Math.floor(x)", answer2: "Math.round(x)", answer3: "Math.random(x)", answer4: "Math.abs(x)"},
    {question: "#19. The Math.random method will return a random number between ______.", answer1: "0 and 1", answer2: "0 and 100", answer3: "1 and 10", answer4: "-1 and 1"},
    {question: "#20. How can we execute a function callback when a user clicks on a button?", answer1: 'myButtonEl.addEventListener("click", myFunction);', answer2: "myButtonEl.clickListener.myFunction();", answer3: "myButtonEl.onclick.myFunction();", answer4: "click.myButtonEl.myFunction();"},
    {question: "#21. How do you declare a JavaScript variable?", answer1: "var myVar = value;", answer2: "myVar = value;", answer3: "variable myVar = value;", answer4: "var(myVar) = value;"},
    {question: "#22. What is the logical operator for OR?", answer1: "||", answer2: "&&", answer3: "%%", answer4: "$$"},
    {question: "#23. What is the logical operator for AND?", answer1: "&&", answer2: "^^", answer3: "##", answer4: "||"},
    {question: "#24. What operator is used to assign a value to a variable?", answer1: "=", answer2: "==", answer3: "===", answer4: "!="},
    {question: "#25. Which of the following is not a JavaScript event?", answer1: "link", answer2: "submit", answer3: "drop", answer4: "click"}
];

// when start button is clicked, start decrementing counter once per second and ask user questions. 

// display questions as text and answer choices as buttons

// determine if user selected correct answer

    // if correct, let user know they answered correctly and increment score. Feedback message goes away after a few seconds.

    // if wrong, let user know they answered incorrectly and decrease timer by 10. Feedback message goes away after a few seconds.

// when timer reaches 0 or end of question array is reached, the game is over. Display user's final score and ask for their initials.

// store final score and initials in localStorage

// display top 5 high scores. Ask user if they want to clear scores or go back to quiz start page.