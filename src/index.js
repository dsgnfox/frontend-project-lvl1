import * as constants from './constants.js';
import askQuestion from './cli.js';

export default (description, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  let i = 0;
  while (i < questionsAndAnswers.length) {
    const answer = askQuestion(`Question: ${questionsAndAnswers[i][0]}\nYour answer: `);
    if (answer === questionsAndAnswers[i][1]) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionsAndAnswers[i][1]}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  if (i === constants.COUNT_RIGHT_ANSWER) {
    console.log(`Congratulations, ${name}!`);
  }
};
