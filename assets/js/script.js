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
var quizQuestions = [
    {question: "What case is used in JavaScript?", answer1: "camelCase", answer2: "kebab-case", answer3: "snake_case", answer4: "UPPERCASE"},
    {question: "Q2", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q3", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q4", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q5", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q6", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q7", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q8", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q9", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q10", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q11", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q12", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q13", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q14", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q15", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q16", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q17", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q18", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q19", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q20", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q21", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q22", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q23", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q24", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"},
    {question: "Q25", answer1: "right", answer2: "wrong", answer3: "wrong", answer4: "wrong"}
];

// when start button is clicked, start decrementing counter once per second and ask user questions. 

// display questions as text and answer choices as buttons

// determine if user selected correct answer

    // if correct, let user know they answered correctly and increment score. Feedback message goes away after a few seconds.

    // if wrong, let user know they answered incorrectly and decrease timer by 10. Feedback message goes away after a few seconds.

// when timer reaches 0 or end of question array is reached, the game is over. Display user's final score and ask for their initials.

// store final score and initials in localStorage

// display top 5 high scores. Ask user if they want to clear scores or go back to quiz start page.