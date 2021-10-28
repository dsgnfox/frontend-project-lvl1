import * as constants from '../constants.js';
import getRandomNumber from '../functions.js';
import createGame from '../index.js';

const questionsAndAnswers = [];
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

for (let i = 0; i < constants.COUNT_RIGHT_ANSWER; i += 1) {
  const operatorsIndex = getRandomNumber(0, operators.length - 1);
  const num1 = getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER);
  const num2 = getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER);
  const question = `${num1} ${operators[operatorsIndex].sign} ${num2}`;
  const answer = operators[operatorsIndex].method(num1, num2).toString();
  questionsAndAnswers.push([question, answer]);
}

export default () => {
  createGame(
    'What is the result of the expression?',
    questionsAndAnswers,
  );
};
