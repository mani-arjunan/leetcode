function isPowerOfThree(n: number): boolean {
    while (n > 1) {
        n /= 3;
    }

    if(n === 1){ 
        return true
    }

    return false
};

console.log(isPowerOfThree(243))