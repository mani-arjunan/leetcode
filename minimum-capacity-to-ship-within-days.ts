const validateCapacityBasedOnDays = (weights: number[], capacity: number, days: number): boolean {
    let total = 0;
    let currentDay = 1;

    for(let i = 0;i < weights.length; i++) {
        total += weights[i];

        // If total is greater than capacity make the current weight to total.
        if(total > capacity) {
            total = weights[i];
            currentDay++;
        }

        // return false if the no of given days has exceeded before calculating weights based on capacity
        if(currentDay > days) {
            return false
        }
    }
    return true;
}

const shipBasedOnDays = (weights: number[], days: number): number => {
    let minimum = Math.max(...weights);
   
    // Validate the capacity based on days with starting from least minimum weight in the weights array
    while(!validateCapacityBasedOnDays(weights, minimum, days)) {
        minimum++;
    }

    return minimum;
}
