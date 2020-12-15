var readlineSync = require('readline-sync');

var userName = readlineSync.question("Do you know Me?")
console.log("Welcome " + userName + " lets play a game!")

score = 0;
function Play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer===answer){
    console.log("You are right")
    score = score+1;
    console.log("Your score is ",score)
    console.log("----------------")
  }

  else{
    console.log("You are wrong")
    console.log("your score is ",score)
    console.log("----------------")
    }

  
}

var questions = [{
  question:"Where do I live?",
  answer:"Nagpur"
},{
  question:"My favourite friend's character?",
  answer:"Joey"
},{
  question:"Who is my crush?",
  answer:"scarllet johannson"
}]

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  Play(currentQuestion.question,currentQuestion.answer)
}

console.log("Your final score is ",score)