import { COUNT_RIGHT_ANSWER } from '../constants.js';
import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const isEvenNumber = (number) => number % 2 === 0;

const getRoundsData = () => {
  const roundData = [];

  for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
    const question = getRandomNumber();
    const answer = isEvenNumber(question) ? 'yes' : 'no';
    roundData.push([question, answer]);
  }

  return roundData;
};

export default () => {
  playGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    getRoundsData(),
  );
};
