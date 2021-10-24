#!/usr/bin/env node
import { createGame } from '../index.js';

const COUNT_RIGHT_ANSWER = 3;
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 10;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const questions = [];
const correctAnswers = [];
const operators = [
  {
    sign: '+',
    method: (a, b) => a + b,
  },
  {
    sign: '-',
    method: (a, b) => a - b,
  },
  {
    sign: '*',
    method: (a, b) => a * b,
  },
];

for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
  const operatorsIndex = getRandomNumber(0, operators.length - 1);
  const num1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const num2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  questions.push(`${num1} ${operators[operatorsIndex].sign} ${num2}`);
  correctAnswers.push(operators[operatorsIndex].method(num1, num2).toString());
}

createGame(
  'What is the result of the expression?',
  questions,
  correctAnswers
);
