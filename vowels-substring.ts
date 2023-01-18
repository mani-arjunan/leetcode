function checkIfVowel(char: string): boolean {
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    }

    return false;
}


function countVowels(word: string): number {
    word = word.toLowerCase();
    let totalCount = 0;
    for(let i = 0; i < word.length; i++) {
        const firstChar = word[i];
        let length = word.length - 1 - i;
        let nextCharIndex = i + 1;
        let totalCountSubstr = checkIfVowel(firstChar) ? 1 : 0;
        let previousResult = totalCountSubstr;

        while(length) {
            if(checkIfVowel(word[nextCharIndex])) {
                const temp = totalCountSubstr;
                totalCountSubstr += previousResult;
                previousResult = totalCountSubstr - temp;
            } else {
                totalCountSubstr += previousResult;
            }

            length--;
            nextCharIndex++;
        }
        totalCount += totalCountSubstr;
    }

    return totalCount
}
