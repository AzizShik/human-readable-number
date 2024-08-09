module.exports = function toReadable(number) {
  const numsList = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
  };

	if (number <= 20 || (number % 10 === 0 && number < 100)) {
		return numsList[number];
	}

	const firstDigit = Number(String(number).split('').shift());
	const lastDigit = number % 10;

	const lastTwoDigits = Number(String(number).split('').slice(1).join(''));

	if (number > 20 && number < 100) {
		return `${numsList[firstDigit * 10]} ${numsList[lastDigit]}`;
	}

	if (number % 100 === 0) {
		return `${numsList[firstDigit]} ${numsList[100]}`;
	}

	if (lastTwoDigits <= 20) {
		return `${numsList[firstDigit]} ${numsList[100]} ${numsList[lastTwoDigits]}`;
	}

	if (lastTwoDigits % 10 === 0) {
		return `${numsList[firstDigit]} ${numsList[100]} ${
			numsList[Number(String(lastTwoDigits).split('')[0] * 10)]
		}`;
	}

	if (number > 120 && number <= 999) {
		return `${numsList[firstDigit]} ${numsList[100]} ${
			numsList[Number(String(lastTwoDigits).split('')[0] * 10)]
		} ${numsList[Number(String(lastTwoDigits).split('')[1])]}`;
	}
};
