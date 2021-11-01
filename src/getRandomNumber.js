import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from './constants.js';

const getRandomNumber = (min = MIN_RANDOM_NUMBER, max = MAX_RANDOM_NUMBER) => Math.floor(Math.random() * (max - min + 1)) + min;
export default getRandomNumber;
