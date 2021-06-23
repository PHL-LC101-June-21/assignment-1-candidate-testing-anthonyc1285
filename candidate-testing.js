const input = require('readline-sync');

// // TODO 2: modify your quiz app to ask 5 questions //

// // TODO 1.1a: Define candidateName // 
// let candidateName = "";
// // TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// let question = "Who was the first American woman in space? ";
// let correctAnswer = "Sally Ride";
// let candidateAnswer = " ";
// let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
// let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
// let candidateAnswers = [];

let candidateName = "";
let question = "Who was the first American woman in space? ";
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "];
let correctAnswer = "Sally Ride";
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"];
let candidateAnswer = "";
let candidateAnswers = [];
let consoleTest = "";

// function askForName() {
//   // TODO 1.1b: Ask for candidate's name //
// const input = require('readline-sync');
//   let candidateName = input.question("Enter Candidate Name: ");
//   console.log("Hello, " + candidateName);
//   return candidateName;
// }
function askForName() {
	candidateName = input.question("Candidate Name: ")
	return console.log(`Hello, ${candidateName}.`);
}

// function askQuestion() {
//   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

//   for(let i = 0; i < 5; i++) {
//   candidateAnswers.push(input.question(questions[i]).toLowerCase());
// }

function askQuestion() {
	for (let i = 0; i < questions.length; i++) {
		candidateAnswers[i] = input.question(`${questions[i]}\nYour Answer: `);
		console.log(`Correct Answer: ${correctAnswers[i]}\n`);
	}
	return;
}

//console.log(candidateAnswers);


// let question = "Who was the first American woman in space? ";
//let correctAnswer = "Sally Ride";
// console.log(question);
// const x = require('readline-sync');
// let candidateAnswer = candidateAnswers.push(x.question("Enter answer: "));

//}

// function gradeQuiz(candidateAnswers) {

//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

//   let grade = 0;
// for(let i =0; i < 5; i++){
  
//   if(correctAnswers[i].toLowerCase() === candidateAnswers[i]) {
//     grade++ ;
//   }
// }
//   candidateAnswer = grade.toString();
//   grade = grade/5*100;  
//   console.log(`>>> Overall Grade: ${grade}% (${candidateAnswer} of 5 responses correct) <<<`)
//   if (grade >= 80) {
//     console.log(`>>> Status: PASSED <<<`)
//   } else { 
//     console.log(`>>> Status: FAILED <<<`)
//   }
//   return grade;

// // let passFail = " ";
// // if (grade <= 3) {
// //    passFail = "FAILED";
// // }
// // else {
// //    passFail = "PASSED";
// // }

// // grade = grade/5 * 100;
// // console.log(`>>> Overall Grade: ${grade}% (${(grade/100) * 5} of 5 responses correct) <<<
// // >>> Status: ${passFail} <<<`)

// // return grade;
// }

function gradeQuiz(candidateAnswers) {
	let grade = 0;
	for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      grade++;
		}
  }
	candidateAnswer = grade;
 	grade = grade/correctAnswers.length*100;
  console.log(`>>> Overall Grade: ${grade}% (${candidateAnswer} of 5 responses correct) <<<`)
  if (grade >= 80) {
    console.log(`>>> Status: PASSED <<<`)
  } else {
    console.log(`>>> Status: FAILED <<<`)
  }
  return grade;
	}


function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// function runProgram() {
//   let name = askForName();
//   // TODO 1.1c: Ask for candidate's name //
  
//   askQuestion();

//   console.log(`
// Candidate Name: ${name}
// 1) ${questions[0]}
// Your Answer: ${candidateAnswers[0]}
// Correct Answer: ${correctAnswers[0].charAt(0).toUpperCase() + correctAnswers[0].slice(1)}

// 2) ${questions[1]}
// Your Answer: ${candidateAnswers[1]}
// Correct Answer: ${correctAnswers[1].charAt(0).toUpperCase() + correctAnswers[1].slice(1)}

// 3) ${questions[2]}
// Your Answer: ${candidateAnswers[2]}
// Correct Answer: ${correctAnswers[2]}

// 4) ${questions[3]}
// Your Answer: ${candidateAnswers[3]}
// Correct Answer: ${correctAnswers[3].charAt(0).toUpperCase() + correctAnswers[3].slice(1)}

// 5) ${questions[4]}
// Your Answer: ${candidateAnswers[4]}
// Correct Answer: ${correctAnswers[4]}
// `)

// gradeQuiz(candidateAnswers);
// }

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