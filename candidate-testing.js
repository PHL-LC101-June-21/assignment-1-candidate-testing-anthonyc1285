const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = [];
let correctAnswers = ["Sally Ride"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
  let candidateName = input.question("Enter Candidate Name: ");
  console.log("Hello, " + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";


console.log(question);
const x = require('readline-sync');
let candidateAnswer = candidateAnswers.push(x.question("Enter answer: "));

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade = "";
  if (candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase()){
    grade = "Correct!";
  }
  else {
    grade = "Wrong";
  }
  //console.log(grade);
  return grade;
  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  //gradeQuiz(this.candidateAnswers);
  gradeQuiz(candidateAnswers);
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