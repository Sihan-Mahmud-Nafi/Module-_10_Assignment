// 1. calculateDifference
function calculateDifference(a, b) {
  return a - b;
}
console.log("Difference:", calculateDifference(10, 4));

// 2. isOdd
function isOdd(num) {
  return num % 2 !== 0;
}
console.log("Is 5 Odd?", isOdd(5));

// 3. findMin
function findMin(numbers) {
  return Math.min(...numbers);
}
console.log("Smallest Number:", findMin([3, 5, 1, 7]));

// 4. filterEvenNumbers
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// 5. sortArrayDescending
function sortArrayDescending(numbers) {
  return numbers.sort((a, b) => b - a);
}
console.log("Sorted Descending:", sortArrayDescending([5, 3, 8, 1]));

// 6. lowercaseFirstLetter
function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercased String:", lowercaseFirstLetter("Hello"));

// 7. findAverage
function findAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
console.log("Average:", findAverage([2, 4, 6, 8]));

// 8. isLeapYear
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("Is 2024 Leap Year?", isLeapYear(2024));
