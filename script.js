// All functional variables for JS code quiz
var startButton = document.querySelector (".start-button"); 
var highScores = document.querySelector (".high-scores");
var quizQuestions = document.querySelector (".quiz-questions");
var gameTimer = document.querySelector (".game-timer");
var gameOver = document.querySelector (".game-over");
var multiChoice = document.querySelector (".multiple-choice");
var highScores = document.querySelector (".high-score"); 
var currentQuestion = document.querySelector ("#current-question");
var playAgain = document.querySelector ("play-again")

var playerInitals = []
var count = 60; 

var qIndex = 0

// var choiceA = ""
// var choiceB = ""
// var choiceC = ""
// var choiceD = ""

// 5 quiz questions to be run to test user
  var quizQuestions =[
    {
      question : "What does the acronym DOM stand for?",
      choiceA : "Digital Object Model",
      choiceB : "Document Object Model",
      choiceC : "Display Our Magic",
      choiceD : "Document Object Model",
      answer: "Document Object Model"
    },{
      question : "Inside which HTML element do we wrap JavaScript?",
      choiceA : "<scripting>",
      choiceB : "<css>",
      choiceC : "<script>",
      choiceD : "<html>",
      answer: "<script>"
    },{
      question : "The _______ method of an Array object adds and/or removes elements from an array.?",
      choiceA : "Splice",
      choiceB : "Shift",
      choiceC : "String",
      choiceD : "Sway",
      answer: "Splice"
    },{
      question : "_____  is a box which allows the user to enter input by providing a text box.",
      choiceA : "Alert",
      choiceB : "Array",
      choiceC : "Confirm",
      choiceD : "Prompt",
      answer: "Prompt"

    },{
      question : "What are variables used for in JavaScript Programs?",
      choiceA : "Storing Numbers, Dates or Other Values",
      choiceB : "Solving Math Equationgs",
      choiceC : "Storing Functions",
      choiceD : "None of the above",
      answer: "Storing Numbers, Dates or Other Values",
    },];

startButton.addEventListener("click", function() {
        console.log("Timer Begin")
        qIndex = 0
        startTimer()
        runQuestions()
        
});

    // // Setting Fuction to begin 60 second timer. Need to deduct 5 seconds for every incorrect answer, and timer to reset at 0. Clock currently stops at 0.
    function startTimer() {
      var timer = setInterval(function() {
        count--;
        if (count == 0){
          clearInterval (timer)
        }
        console.log(count)
        gameTimer.textContent = count;
      }, 1000);
    }

    // Setting function to begin running questions in sequential order, 1-5, using the current-question variable.
    function runQuestions(){
      console.log(quizQuestions[qIndex])
      var thisQuestion = quizQuestions [qIndex]
      console.log(thisQuestion.question)
      var questionDisplay = document.createElement("h3")
      questionDisplay.textContent = thisQuestion.question
      currentQuestion.appendChild(questionDisplay)
      var answer1 = document.createElement ("p")
      answer1.textContent = thisQuestion.choiceA
      currentQuestion.appendChild(answer1)
      var answer2 = document.createElement ("p")
      answer2.textContent = thisQuestion.choiceB
      currentQuestion.appendChild(answer2)
      var answer3 = document.createElement ("p")
      answer3.textContent = thisQuestion.choiceB
      currentQuestion.appendChild(answer3)
      var answer4 = document.createElement ("p")
      answer4.textContent = thisQuestion.choiceB
      currentQuestion.appendChild(answer4)
      


    
    }
    
    // NEED TO STILL DEVELOP - Was having much difficulty with these criteria sections - 4.17.21 - AS
    
    // create radio buttons - button next to each answer to choose answers

    // Local Storage function needed to save user initials and score, post-game.
  
    // localStorage.getItem("user", JSON.stringify(playerInitals));

    // let playerInitals = localStorage.getItem(key);
