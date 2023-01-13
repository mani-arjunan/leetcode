function bestRotation(nums: Array<number>): number {
    const numLength = nums.length;
    let i = 0;
    let maxScore = {
        value: 0,
        index: -1
    }

    while(i < numLength) {
        let count = 0;
        let j = i;
        let score = 0;

        while(count < numLength) {
            if(j >= numLength) {
                if(nums[j % numLength] <= count) {
                    score++;
                }
            } else {
                if(nums[j] <= count) {
                    score++;
                }
            }
            j++;
            count++;
        }
        maxScore = {
            ...maxScore,
            value: maxScore.value < score ? score : maxScore.value,
            index: maxScore.value < score ? i : maxScore.index
        }
        i++;
    }

    return maxScore.index;
}

// This algo is not optimized it still with O(N^2), the optimized algo resolves in O(N) time complexity
// will comeback to this algo once i mastered the leetcode :)
// sample test cases;
console.log(bestRotation([2, 3, 1, 4, 0]))

