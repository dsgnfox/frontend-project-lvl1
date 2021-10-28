import * as constants from '../constants.js';
import getRandomNumber from '../functions.js';
import createGame from '../index.js';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const questionsAndAnswers = [];

for (let i = 0; i < constants.COUNT_RIGHT_ANSWER; i += 1) {
  const question = getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER);
  const answer = isPrime(question) ? 'yes' : 'no';
  questionsAndAnswers.push([question, answer]);
}

export default () => {
  createGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    questionsAndAnswers,
  );
};
