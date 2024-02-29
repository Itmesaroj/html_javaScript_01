
const charToLower = (char) => char.toLowerCase();

const wordToLower = (word) => word.split('').map(charToLower).join('');


const arrayToLower = (arr) => arr.map((word) => wordToLower(word));


const inputArray = ["MA", "SA", "I", "SCH", "OOL"];


const outputArray = arrayToLower(inputArray);

console.log(outputArray); 
