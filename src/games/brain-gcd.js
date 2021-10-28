import * as constants from '../constants.js';
import getRandomNumber from '../functions.js';
import createGame from '../index.js';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const questionsAndAnswers = [];

for (let i = 0; i < constants.COUNT_RIGHT_ANSWER; i += 1) {
  const number1 = getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER);
  const number2 = getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  questionsAndAnswers.push([question, answer]);
}

export default () => {
  createGame(
    'Find the greatest common divisor of given numbers.',
    questionsAndAnswers,
  );
};
