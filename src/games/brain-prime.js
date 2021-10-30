import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER, COUNT_RIGHT_ANSWER } from '../constants.js';
import getRandomNumber from '../getRandomNumber.js';
import createGame from '../index.js';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const getQuestionAndAnswers = () => {
  const result = [];

  for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
    const question = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const answer = isPrime(question) ? 'yes' : 'no';
    result.push([question, answer]);
  }

  return result;
};

export default () => {
  createGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    getQuestionAndAnswers(),
  );
};
