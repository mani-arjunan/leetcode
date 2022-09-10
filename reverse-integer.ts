const reverse = (num: number) => {
	let quotient = 0;
	let sum = 0;
	while (Math.abs(num) !== 0) {
		quotient = num % 10;
		sum = sum * 10 + quotient;
		num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
	}

	return sum > Math.pow(2, 31) - 1 || sum < Math.pow(-2, 31) ? 0 : sum;
};
