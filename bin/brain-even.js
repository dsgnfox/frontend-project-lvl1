#!/usr/bin/env node
import readlineSync from 'readline-sync';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 10;
const COUNT_RIGHT_ANSWER = 3;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isOddNumber = (number) => number % 2 === 0;
let name = '';

const correctAnswerCount = 0;
const askQuestion = (count) => {
  let correctCount = count;
  if (correctCount >= COUNT_RIGHT_ANSWER) {
    console.log(`Congratulations, ${name}!`);
    return undefined;
  }
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const correctAnswer = isOddNumber(number) ? 'yes' : 'no';

  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);

  switch (answer) {
    case correctAnswer:
      console.log('Correct!');
      askQuestion(correctCount += 1);
      break;
    default:
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
  }
  return undefined;
};

console.log('Welcome to the Brain Games!');
name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
askQuestion(correctAnswerCount);

// задать вопрос и понять верный он или нет
// если верный то прибавить счетчик и задать еще один вопрос
// елси неверный то прекратить игру
