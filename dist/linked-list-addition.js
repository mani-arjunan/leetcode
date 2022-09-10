const addTwoNumbers = (l1, l2) => {
    const linkedList = {};
    let tempObj = linkedList;
    let sumCarry = 0;
    while (l1 || l2) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + sumCarry;
        if (sum > 9) {
            tempObj.val = sum % 10;
            sumCarry = Math.floor(sum / 10);
        }
        else {
            tempObj.val = sum;
            sumCarry = 0;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        if (!l1 && !l2) {
            if (sumCarry) {
                tempObj.next = {
                    val: sumCarry,
                    next: null,
                };
            }
            else {
                tempObj.next = null;
            }
        }
        else {
            tempObj.next = {};
        }
        tempObj = tempObj.next;
    }
    return linkedList;
};
