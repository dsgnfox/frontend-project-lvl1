import { COUNT_RIGHT_ANSWER } from '../constants.js';
import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const getRoundsData = () => {
  const roundData = [];

  for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
    const question = getRandomNumber();
    const answer = isPrime(question) ? 'yes' : 'no';
    roundData.push([question, answer]);
  }

  return roundData;
};

export default () => {
  playGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    getRoundsData(),
  );
};
