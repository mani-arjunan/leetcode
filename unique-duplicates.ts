const arr: number[] = [3,5,5,5,6,6,7,7,9,9,10,11,12,13,17];

const set = new Set(arr);

const duplicates = arr.filter(item => !set.delete(item))

console.log(new Set(duplicates))
