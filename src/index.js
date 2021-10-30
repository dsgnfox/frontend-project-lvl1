import askQuestion from './cli.js';

export default (description, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  /* eslint-disable-next-line */
  for (const questionAndAnswer of questionsAndAnswers) {
    const [question, answer] = questionAndAnswer;
    const userAnswer = askQuestion(`Question: ${question}\nYour answer: `);
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
