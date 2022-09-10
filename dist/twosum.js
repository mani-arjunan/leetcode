const twoSum = (nums, target) => {
    const checkPairSum = (nums, target, currentNum, currentNumIndex) => {
        for (let i = currentNumIndex + 1; i < nums.length; i++) {
            if (currentNum + nums[i] === target) {
                return i;
            }
        }
        return -1;
    };
    for (let i = 0; i < nums.length; i++) {
        const checkPairSumResult = checkPairSum(nums, target, nums[i], i);
        if (checkPairSumResult > -1) {
            return [i, checkPairSumResult];
        }
    }
    return null;
};
