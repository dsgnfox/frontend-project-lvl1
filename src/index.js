import askQuestion from './cli.js';

const COUNT_RIGHT_ANSWER = 3;

export default (description, questions, correctAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (description.length > 0) {
    console.log(description);
  }

  if (questions.length > 0 && correctAnswers.length > 0) {
    for (let i = 0; i <= COUNT_RIGHT_ANSWER;) {
      if (i === COUNT_RIGHT_ANSWER) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
      const answer = askQuestion(`Question: ${questions[i]}\nYour answer: `);
      if (answer === correctAnswers[i]) {
        i += 1;
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.\nLet's try again, ${name}!`);
        break;
      }
    }
  }
};
