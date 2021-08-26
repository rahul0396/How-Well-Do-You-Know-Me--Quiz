var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hey! May I know your name?\n");

console.log("Welcome "+ userName + " to \'How much you know Rahul Sharma\'!\nEnter \'e\' at any point to exit.");

var score = 0;


var questionAnswers = [
  {
    question: "Where do I Live?",
    answer: "Jaipur"
  },
  {
    question: "Other than coding, what am I passionate about?",
    answer: "Sports"
  },
  {
    question: "Who is my mentor?",
    answer: "Tanay Pratap"
  },
  {
    question: "What do I prefer : Tea / Coffee / Water?",
    answer: "Water"
  },
  {
    question: "Which Cricketer I love the most?",
    answer: "Rohit sharma"
  }
]

function play(question,answer,questNum){
  console.log("___________________________________\n");
  var userAnswer = readlineSync.question("Q" + questNum + ") " + question + "\n>");
  if(userAnswer.toUpperCase() === 'E'){
    return 0;
  }

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    return true;
  }else{
    return false;
  }
}

for(var i = 0; i<questionAnswers.length; i++){
  var result = play(questionAnswers[i].question, questionAnswers[i].answer, i+1);
  if(result === 0){
    break;
  }

  if (result === true ){
    console.log("That's Correct!\n");
  }else{
    console.log("That's Incorrect!\nCorrect answer is: " + questionAnswers[i].answer);
  }

  console.log("Your Score is: " + score);
}

console.log("\nThanks For Playing!\nYour final score is: "+ score)
