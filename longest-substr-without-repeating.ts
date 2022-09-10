const lengthOfLongestSubstring = (str: string): number => {
	let finalSubStr = '';
	let tempStr = '';
	let fromStart = 0;
	for (let i = fromStart; i < str.length; i++) {
		if (!tempStr.includes(str[i])) {
			tempStr += str[i];
		} else {
			finalSubStr = finalSubStr.length < tempStr.length ? tempStr : finalSubStr;
			tempStr = '';
			i = fromStart++;
		}
	}
	finalSubStr = finalSubStr.length < tempStr.length ? tempStr : finalSubStr;

	return finalSubStr.length;
};
