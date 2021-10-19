#!/usr/bin/env node
import askQuestion from '../src/cli.js';
import * as functions from '../src/functions.js';
import * as constants from '../src/constants.js';

let name = '';

const MIN_PROGERSION_LENGTH = 5;
const MAX_PROGERSION_LENGTH = 10;

const correctAnswerCount = 0;

const playGame = (count) => {
  let correctCount = count;

  if (correctCount >= constants.COUNT_RIGHT_ANSWER) {
    console.log(`Congratulations, ${name}!`);
    return undefined;
  }

  const progression = functions.createProgression(
    functions.getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER),
    functions.getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER),
    functions.getRandomNumber(MIN_PROGERSION_LENGTH, MAX_PROGERSION_LENGTH),
  );

  const answerIndex = functions.getRandomNumber(
    constants.MIN_RANDOM_NUMBER, progression.length - 2,
  );
  const correctAnswer = progression[answerIndex];
  progression[answerIndex] = '..';

  const answer = askQuestion(`Question: ${progression.join(' ')}\nYour answer: `);

  switch (parseInt(answer, 10)) {
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
console.log('What number is missing in the progression?');
playGame(correctAnswerCount);
