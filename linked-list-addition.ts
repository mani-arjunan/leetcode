interface LinkedList {
	val?: number;
	next?: null | LinkedList;
}

const addTwoNumbers = (l1: LinkedList | null, l2: LinkedList | null): LinkedList => {
	const linkedList: LinkedList = {};
	let tempObj: LinkedList = linkedList;
	let sumCarry = 0;

	while (l1 || l2) {
		const sum = (l1 ? (l1.val as number) : 0) + (l2 ? (l2.val as number) : 0) + sumCarry;
		if (sum > 9) {
			tempObj.val = sum % 10;
			sumCarry = Math.floor(sum / 10);
		} else {
			tempObj.val = sum;
			sumCarry = 0;
		}

		l1 = l1 ? (l1.next as LinkedList) : null;
		l2 = l2 ? (l2.next as LinkedList) : null;
		if (!l1 && !l2) {
			if (sumCarry) {
				tempObj.next = {
					val: sumCarry,
					next: null,
				};
			} else {
				tempObj.next = null;
			}
		} else {
			tempObj.next = {} as LinkedList;
		}
		tempObj = tempObj.next as LinkedList;
	}

	return linkedList;
};
