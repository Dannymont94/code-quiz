// create timer variable that starts at 75 and score variable that starts at 0
var timeRemaining = 75;
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

// when start button is clicked, start decrementing counter once per second and ask user questions. 

// display questions as text and answer choices as buttons

// determine if user selected correct answer

    // if correct, let user know they answered correctly and increment score. Feedback message goes away after a few seconds.

    // if wrong, let user know they answered incorrectly and decrease timer by 10. Feedback message goes away after a few seconds.

// when timer reaches 0 or end of question array is reached, the game is over. Display user's final score and ask for their initials.

// store final score and initials in localStorage

// display top 5 high scores. Ask user if they want to clear scores or go back to quiz start page.