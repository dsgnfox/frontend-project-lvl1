#!/usr/bin/env node
import askQuestion from '../src/cli.js';
import * as functions from '../src/functions.js';
import * as constants from '../src/constants.js';

let name = '';

const correctAnswerCount = 0;

const playGame = (count) => {
  let correctCount = count;

  if (correctCount >= constants.COUNT_RIGHT_ANSWER) {
    console.log(`Congratulations, ${name}!`);
    return undefined;
  }

  const number = functions.getRandomNumber(
    constants.MIN_RANDOM_NUMBER,
    constants.MAX_RANDOM_NUMBER,
  );
  const correctAnswer = functions.isOddNumber(number) ? 'yes' : 'no';

  const answer = askQuestion(`Question: ${number}\nYour answer: `);

  switch (answer) {
    case correctAnswer:
      console.log('Correct!');
      playGame(correctCount += 1);
      break;
    default:
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
  }
  return undefined;
};

console.log('Welcome to the Brain Games!');
name = askQuestion('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
playGame(correctAnswerCount);
