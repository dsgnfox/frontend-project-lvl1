import askQuestion from '../src/cli.js';

const COUNT_RIGHT_ANSWER = 3; 

export const createGame = (description, questions, correctAnswers) => {
	console.log('Welcome to the Brain Games!');
	const name = askQuestion('May I have your name? ');
	console.log(`Hello, ${name}!`);

	if (description.length > 0) {
		console.log(description);		
	}

	if (questions.length > 0 && correctAnswers.length > 0) {
		console.log('questinos:' ,questions.join(' '))
		console.log('correctAnswers:' ,correctAnswers.join(' '))
	
		for (let i = 0; i <= COUNT_RIGHT_ANSWER;) {
			if (i === COUNT_RIGHT_ANSWER) {
				console.log(`Congratulations, ${name}!`);
				break;
			}
			const answer = askQuestion(`Question: ${questions[i]}\nYour answer: `);
			console.log(typeof(answer))
			console.log(typeof(correctAnswers[i]))
			if (answer === correctAnswers[i]) {
				i += 1;
				console.log('Correct!');
				
			} else {
				console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.\nLet's try again, ${name}!`);
				break;
			}
		}
	}
}