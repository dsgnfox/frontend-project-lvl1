#!/usr/bin/env node
import createGame from '../index.js';

const COUNT_RIGHT_ANSWER = 3;
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const questions = [];
const correctAnswers = [];

for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  questions.push(number);
  correctAnswers.push(isPrime(number) ? 'yes' : 'no');
}

createGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  questions,
  correctAnswers,
);