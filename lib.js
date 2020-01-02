let x = 0;
function randomNumber() {
	x = Math.floor((Math.random() * 1000) + 1);
	return x;
}

console.log(randomNumber());

function counter() {
	let currentAttempt = 1;
		return function() {
			return currentAttempt++;
		}
}

let attempt = counter();

window.guessNumber = function() {
	// console.log(attempt()-1);
	if (parseFloat(attempt()) <= 10) {
		const num = prompt('Enter your number');
		if (!isNaN(parseFloat(num)) && isFinite(num)) {
			if (+num === x) {
				alert('Your number is the same');
				const res = confirm('One more time?');
				if (res) {
					randomNumber();
					console.log(randomNumber());
					guessNumber();
				} else {
					alert('Canceled');
				}
			} else if (+num > x) {
				alert('Your number is too big');
				guessNumber();
			} else {
				alert('Your number is too small');
				guessNumber();
			}
		} else if (num === null) {
			alert('Canceled');
		} else {
			alert('Enter valid number!');
			guessNumber();
		}
	} else {
		let reset = confirm('Maximumn attempts exceed, one more time?');
		if (reset) {
			attempt = counter();
			randomNumber();
			guessNumber();
		} else {
			alert('Cancelled');
		}
	}
}
// guessNumber();
