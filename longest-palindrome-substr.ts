const longestPalindrome = (str: string): string => {
	var resultStr = '';
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < 2; j++) {
			var left = i;
			var right = left + j;
			while (str[left] === str[right]) {
				left--;
				right++;
			}

			if (str.slice(left + 1, right).length > resultStr.length) {
				resultStr = str.slice(left + 1, right);
			}
		}
	}
	return resultStr;
};
