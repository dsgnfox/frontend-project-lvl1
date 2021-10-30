import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER, COUNT_RIGHT_ANSWER } from '../constants.js';
import getRandomNumber from '../getRandomNumber.js';
import createGame from '../index.js';

const getGcd = (a, b) => (b ? getGcd(b, a % b) : Math.abs(a));

const getQuestionAndAnswers = () => {
  const result = [];

  for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
    const number1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const number2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const question = `${number1} ${number2}`;
    const answer = getGcd(number1, number2).toString();
    result.push([question, answer]);
  }

  return result;
};

export default () => {
  createGame(
    'Find the greatest common divisor of given numbers.',
    getQuestionAndAnswers(),
  );
};
