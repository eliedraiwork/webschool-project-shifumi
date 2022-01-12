const SCISSORS_SIGN = '✂️';
const LEAF_SIGN = '🍃';
const STONE_SIGN = '🪨';

/**
 * This function return a boolean, according to the choice of the user:
 * Continue the game    ==> true
 * Leave the game       ==> false
 */
function continueTheGame() {
	const choice = prompt('Do you want to continue the game? (y/n)');

	if (choice === 'y' || choice === 'yes') {
		return true;
	} else {
		return false;
	}
}

/**
 * This function return one of the signs, according to user choice
 * SCISSORS_SIGN = '✂️';
 * LEAF_SIGN = '🍃';
 * STONE_SIGN = '🪨';
 */
function chooseASign() {
	// TODO: implement this function
	let choice;

	do {
		choice = prompt(`Please choose a sign:
1 - ${SCISSORS_SIGN}
2 - ${LEAF_SIGN}
3 - ${STONE_SIGN}
`);
		if (!['1', '2', '3'].includes(choice)) {
			alert('Please only choose 1, 2 or 3');
		}
	} while (!['1', '2', '3'].includes(choice));

	if (choice == 1) return SCISSORS_SIGN;
	else if (choice == 2) return LEAF_SIGN;
	else return STONE_SIGN;
}

/**
 * Make the computer choose randomly one of the signs
 * Return the sign chosen by the computer (SCISSORS_SIGN, LEAF_SIGN, STONE_SIGN)
 */
function randomChooseSign() {
	const randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 0) return SCISSORS_SIGN;
	else if (randomNumber === 1) return LEAF_SIGN;
	else return STONE_SIGN;
}

/**
 * This function return a number according to the comparison:
 * sign1 wins over sign2 ==> return 1
 * sign2 wins over sign1 ==> return -1
 * sign1 and sign2 are equals ==> return 0
 */
function compareSigns(sign1, sign2) {
	if (sign1 === sign2) return 0;

	if (sign1 === SCISSORS_SIGN) {
		if (sign2 === LEAF_SIGN) {
			return 1;
		} else {
			return -1;
		}
	}

	if (sign1 === LEAF_SIGN) {
		if (sign2 === STONE_SIGN) {
			return 1;
		} else {
			return -1;
		}
	}

	if (sign1 === STONE_SIGN) {
		if (sign2 === SCISSORS_SIGN) {
			return 1;
		} else {
			return -1;
		}
	}
}

/**
 * Run the program in a loop until the user asks to leave.
 * Keep the scores during the current game and display the scores at the end of every game.
 */
function main() {
	// TODO: implement this function

	let toContinue = continueTheGame();
	let userScore = 0;
	let computerScore = 0;

	while (toContinue) {
		const userSign = chooseASign();
		const computerSign = randomChooseSign();

		const comparison = compareSigns(userSign, computerSign);
		if (comparison === 1) userScore++;
		else if (comparison === -1) computerScore++;

		alert(`${userSign} vs ${computerSign}`);

		toContinue = continueTheGame();
	}

	alert(`User score: ${userScore}
Computer score: ${computerScore}`);
}

//  Run the program
main();
