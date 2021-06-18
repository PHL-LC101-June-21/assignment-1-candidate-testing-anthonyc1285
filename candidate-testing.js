const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["sally ride", "true", "40", "trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
  let candidateName = input.question("Enter Candidate Name: ");
  console.log("Hello, " + candidateName);
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for(let i = 0; i < 5; i++) {
  candidateAnswers.push(input.question(questions[i]).toLowerCase());
}

//console.log(candidateAnswers);


// let question = "Who was the first American woman in space? ";
// let correctAnswer = "Sally Ride";
// console.log(question);
// const x = require('readline-sync');
// let candidateAnswer = candidateAnswers.push(x.question("Enter answer: "));

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade = 0;
for(let i =0; i < 5; i++){
  
  if(correctAnswers[i] === candidateAnswers[i]) {
    grade += 1;
  }
}

return grade;
}

function runProgram() {
  let name = askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
 let gradePercent = gradeQuiz(this.candidateAnswers);
  //console.log(x);
  //gradeQuiz(candidateAnswers);
  let passFail = " ";
if (gradePercent <= 3) {
   passFail = "FAILED";
}
else {
   passFail = "PASSED";
}
  console.log(`
Candidate Name: ${name}
1) ${questions[0]}
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0].charAt(0).toUpperCase() + correctAnswers[0].slice(1)}

2) ${questions[1]}
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1].charAt(0).toUpperCase() + correctAnswers[1].slice(1)}

3) ${questions[2]}
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}

4) ${questions[3]}
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3].charAt(0).toUpperCase() + correctAnswers[3].slice(1)}

5) ${questions[4]}
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}

>>> Overall Grade: ${gradePercent/5 * 100}% (${gradePercent} of 5 responses correct) <<<
>>> Status: ${passFail} <<<
`)
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};