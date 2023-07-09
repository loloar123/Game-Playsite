function init(){
  
}

let score = 0;

let startGame = document.querySelector(".start");
let quiz = document.querySelector(".wrapper");
let line = document.querySelector(".line2");

function start(){
  startGame.style.display = "none";
  line.style.display = "none";
  quiz.style.display = "block";
  document.querySelector(".points").innerText = 0;
}

window.onload = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {
          '1. What is the best-selling game console of all time?' : ['PS2', 'PS4', 'XBOX', 0],
          
          '2.  What is the most-played video game of all time?' : ['Call Of Duty', 'Fortnite' , 'Mario', 1],
          
          '3. Roughly how many people play Roblox each month?' : ['150M', '100M', '125M', 0],
          
          '4. Which game is widely regarded as the worst video game ever created?' : ['Pacman', 'Sonic', 'Atari ET', 2],

          '5. Pacman was designed to resemble which food?' : ['Hamburger', 'Pizza', 'Mellon', 1]
        };
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is sams as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.
      
      return function () {
        var givenAnswer = i,
        correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);        
          score = score + 20;
        } else {
          addChecker(false);                        
        }
        
        let points = document.querySelector(".points");
        points.innerText = score;

        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          document.querySelector(".again").style.display = " block";
          document.querySelector(".again").style.marginLeft = "34%";
          document.querySelector(".again").style.marginTop = "20px";
          questionArea.innerHTML = 'Game Over';
          answerArea.innerHTML = '';
        }
                                
      };
    }

    
    
    function addChecker(bool) {
      // This function adds a div element to the page
      // Used to see if it was correct or false
      
      var createDiv = document.createElement('div'),
      txt       = document.createTextNode(current + 1);
      
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    
    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);
    
  };

  function startover(){
    window.location.reload();
  }
init();