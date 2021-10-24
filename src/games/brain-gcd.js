#!/usr/bin/env node
import createGame from '../index.js';

const COUNT_RIGHT_ANSWER = 3;
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const questions = [];
const correctAnswers = [];

for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
  const number1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const number2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  questions.push(`${number1} ${number2}`);
  correctAnswers.push(getGcd(number1, number2).toString());
}

createGame(
  'Find the greatest common divisor of given numbers.',
  questions,
  correctAnswers,
);
