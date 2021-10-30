import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER, COUNT_RIGHT_ANSWER } from '../constants.js';
import getRandomNumber from '../getRandomNumber.js';
import createGame from '../index.js';

const isEvenNumber = (number) => number % 2 === 0;

const getQuestionAndAnswers = () => {
  const result = [];

  for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
    const question = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const answer = isEvenNumber(question) ? 'yes' : 'no';
    result.push([question, answer]);
  }

  return result;
};

export default () => {
  createGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    getQuestionAndAnswers(),
  );
};
