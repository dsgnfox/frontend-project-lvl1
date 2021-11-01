import { COUNT_RIGHT_ANSWER } from '../constants.js';
import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const getGcd = (a, b) => (b ? getGcd(b, a % b) : Math.abs(a));

const getRoundsData = () => {
  const roundData = [];

  for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const question = `${number1} ${number2}`;
    const answer = getGcd(number1, number2).toString();
    roundData.push([question, answer]);
  }

  return roundData;
};

export default () => {
  playGame(
    'Find the greatest common divisor of given numbers.',
    getRoundsData(),
  );
};
