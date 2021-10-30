import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER, COUNT_RIGHT_ANSWER } from '../constants.js';
import getRandomNumber from '../getRandomNumber.js';
import createGame from '../index.js';

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

const getQuestionAndAnswers = () => {
  const result = [];

  for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
    const operatorsIndex = getRandomNumber(0, operators.length - 1);
    const num1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const num2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const question = `${num1} ${operators[operatorsIndex].sign} ${num2}`;
    const answer = operators[operatorsIndex].method(num1, num2).toString();
    result.push([question, answer]);
  }

  return result;
};

export default () => {
  createGame(
    'What is the result of the expression?',
    getQuestionAndAnswers(),
  );
};
