function random_sign() {
	let random = Math.floor(Math.random() * 3) + 1;
	if (random == 1) {
		return 'stone';
	} else if (random == 2) {
		return 'leaf';
	} else {
		return 'scissors';
	}
}

function comper_signs(sign1, sign2) {
	console.log('sign1: ' + sign1 + ', sign2: ' + sign2);
	if (sign1 == sign2) {
		return 'doual';
	} else if (sign1 == 'stone' && sign2 == 'leaf') {
		return 'sign2';
	} else if (sign1 == 'stone' && sign2 == 'scissors') {
		return 'sign1';
	} else if (sign1 == 'leaf' && sign2 == 'stone') {
		return 'sign1';
	} else if (sign1 == 'leaf' && sign2 == 'scissors') {
		return 'sign2';
	} else if (sign1 == 'scissors' && sign2 == 'stone') {
		return 'sign2';
	} else if (sign1 == 'scissors' && sign2 == 'leaf') {
		return 'sign1';
	}
}

function main() {
	let answer = prompt('play or leave?');
	while (answer == 'play') {
		let sign = prompt('stone, leaf or scissors');
		let pc_sign = random_sign();
		let res = comper_signs(sign, pc_sign);
		if (res == 'sign1') {
			alert('player wins');
		} else if (res == 'sign2') {
			alert('pc wins');
		} else {
			alert('doual');
		}
		answer = prompt('play or leave?');
	}
	return;
}
main();
