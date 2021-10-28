import * as constants from '../constants.js';
import getRandomNumber from '../functions.js';
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

const questionsAndAnswers = [];

for (let i = 0; i < constants.COUNT_RIGHT_ANSWER; i += 1) {
  const progression = createProgression(
    getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER),
    getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER),
    getRandomNumber(MIN_PROGERSION_LENGTH, MAX_PROGERSION_LENGTH),
  );
  const index = getRandomNumber(constants.MIN_RANDOM_NUMBER, progression.length - 1);
  const answer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  questionsAndAnswers.push([question, answer]);
}

export default () => {
  createGame(
    'What number is missing in the progression?',
    questionsAndAnswers,
  );
};
