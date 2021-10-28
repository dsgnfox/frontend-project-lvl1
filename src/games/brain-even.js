import * as constants from '../constants.js';
import getRandomNumber from '../functions.js';
import createGame from '../index.js';

const isOddNumber = (number) => number % 2 === 0;

const questionsAndAnswers = [];

for (let i = 0; i < constants.COUNT_RIGHT_ANSWER; i += 1) {
  const question = getRandomNumber(constants.MIN_RANDOM_NUMBER, constants.MAX_RANDOM_NUMBER);
  const answer = isOddNumber(question) ? 'yes' : 'no';
  questionsAndAnswers.push([question, answer]);
}

export default () => {
  createGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    questionsAndAnswers,
  );
};
