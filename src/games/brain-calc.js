import { COUNT_RIGHT_ANSWER } from '../constants.js';
import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

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

const getRoundsData = () => {
  const roundData = [];

  for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
    const operatorsIndex = getRandomNumber(0, operators.length - 1);
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const question = `${num1} ${operators[operatorsIndex].sign} ${num2}`;
    const answer = operators[operatorsIndex].method(num1, num2).toString();
    roundData.push([question, answer]);
  }

  return roundData;
};

export default () => {
  playGame(
    'What is the roundData of the expression?',
    getRoundsData(),
  );
};
