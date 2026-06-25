const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedNumbersList = structuredClone(numbersList).sort((a, b) => a - b);
console.log(numbersList);
console.log(copiedNumbersList);

const numbersList1 = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedNumbersList1 = [...copiedNumbersList].sort((a, b) => a - b);
console.log(numbersList1);
console.log(copiedNumbersList1);
