#!/usr/bin/env node
import { createGame } from '../index.js';

const COUNT_RIGHT_ANSWER = 3;
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;
const MIN_PROGERSION_LENGTH = 5;
const MAX_PROGERSION_LENGTH = 10;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const questions = [];
const correctAnswers = [];

for (let i = 0; i < COUNT_RIGHT_ANSWER; i += 1) {
  const index = getRandomNumber(MIN_RANDOM_NUMBER, MAX_PROGERSION_LENGTH - 1);
  const progression = createProgression(
    getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER),
    getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER),
    getRandomNumber(MIN_PROGERSION_LENGTH, MAX_PROGERSION_LENGTH)
  )
  correctAnswers.push(progression[index].toString());
  progression[index] = '..';
  questions.push(progression.join(' '));
}

createGame(
  'What number is missing in the progression?',
  questions,
  correctAnswers
);
