function subArraysDivisibleByK(nums: Array<number>, k: number): number {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % k === 0) {
            count++;
        }
        let sum = nums[i];

        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j];

            if(sum % k === 0) {
                count++;
            }
        }
    }

    return count;
}
