import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER, COUNT_RIGHT_ANSWER } from '../constants.js';
import getRandomNumber from '../getRandomNumber.js';
import createGame from '../index.js';

const MIN_PROGERSION_LENGTH = 5;
const MAX_PROGERSION_LENGTH = 10;

const createProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswers = () => {
  const result = [];

  for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
    const progression = createProgression(
      getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER),
      getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER),
      getRandomNumber(MIN_PROGERSION_LENGTH, MAX_PROGERSION_LENGTH),
    );
    const index = getRandomNumber(MIN_RANDOM_NUMBER, progression.length - 1);
    const answer = progression[index].toString();
    progression[index] = '..';
    const question = progression.join(' ');
    result.push([question, answer]);
  }

  return result;
};

export default () => {
  createGame(
    'What number is missing in the progression?',
    getQuestionAndAnswers(),
  );
};
