// ==========================================
// JAVASCRIPT ARRAY METHODS CHEAT-SHEET
// ==========================================

// Let's define sample arrays to work with
const numbers = [1, 2, 3, 4, 5];
const fruits = ["Apple", "Pear", "Banana"];

// ------------------------------------------
// 1. ADDING & REMOVING ELEMENTS (Mutates the original array)
// ------------------------------------------

// push(): Adds a new element to the END of the array.
fruits.push("Strawberry");
// fruits is now: ["Apple", "Pear", "Banana", "Strawberry"]

// pop(): Removes the LAST element of the array and returns it.
const removedLast = fruits.pop();
// removedLast = "Strawberry", fruits is now: ["Apple", "Pear", "Banana"]

// unshift(): Adds a new element to the BEGINNING of the array.
fruits.unshift("Watermelon");
// fruits is now: ["Watermelon", "Apple", "Pear", "Banana"]

// shift(): Removes the FIRST element of the array and returns it.
const removedFirst = fruits.shift();
// removedFirst = "Watermelon", fruits is now: ["Apple", "Pear", "Banana"]

// splice(): Changes the array contents by removing, replacing, or adding elements.
// (startIndex, deleteCount, item1, item2, ...)
fruits.splice(1, 1, "Cherry", "Kiwi");
// Removes 1 element at index 1 ("Pear"), and adds "Cherry" and "Kiwi" there.
// fruits is now: ["Apple", "Cherry", "Kiwi", "Banana"]

// ------------------------------------------
// 2. ARRAY TRANSFORMERS (Do not mutate original array, return a NEW array)
// ------------------------------------------

// map(): Loops through all elements, modifies them, and returns a brand-new array.
const squares = numbers.map((num) => num * num);
// squares: [1, 4, 9, 16, 25]

// filter(): Filters elements based on a condition and collects them in a new array.
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers: [2, 4]

// slice(): Copies a specific portion of an array into a new array.
// (startIndex inclusive, endIndex exclusive)
const subset = numbers.slice(1, 4);
// subset: [2, 3, 4]

// concat(): Merges two or more arrays and returns a single new array.
const mergedArray = numbers.concat([6, 7]);
// mergedArray: [1, 2, 3, 4, 5, 6, 7]

// ------------------------------------------
// 3. SEARCHING & INDEXING METHODS
// ------------------------------------------

// find(): Returns the value of the FIRST element that passes the condition. Returns undefined if not found.
const firstGreaterThanThree = numbers.find((num) => num > 3);
// firstGreaterThanThree = 4

// findIndex(): Returns the index of the FIRST element that passes the condition. Returns -1 if not found.
const bananaIndex = fruits.findIndex((fruit) => fruit === "Banana");
// bananaIndex = 3 (Remember, index counting starts at 0: "Apple"=0, "Cherry"=1, "Kiwi"=2, "Banana"=3)

// indexOf(): Returns the first index at which a given element can be found. Useful for flat strings/numbers.
const kiwiIndex = fruits.indexOf("Kiwi");
// kiwiIndex = 2

// includes(): Checks if an array contains a certain element. Returns true or false.
const hasBanana = fruits.includes("Banana");
// hasBanana = true

// ------------------------------------------
// 4. VALIDATION & UTILITY METHODS
// ------------------------------------------

// every(): Returns true if ALL elements pass the condition, otherwise returns false.
const allPositive = numbers.every((num) => num > 0);
// allPositive = true

// some(): Returns true if AT LEAST ONE element passes the condition.
const hasGreaterThanFive = numbers.some((num) => num > 5);
// hasGreaterThanFive = false

// reduce(): Executes a reducer function on each element, resulting in a single output value (e.g., Summing up).
// (accumulator: accumulated total, current: current element, 0: initial value)
const totalSum = numbers.reduce(
  (accumulator, current) => accumulator + current,
  0,
);
// totalSum = 15

// ------------------------------------------
// 5. SORTING & ITERATION METHODS
// ------------------------------------------

// forEach(): Executes a provided function once for each array element. Does not return a new array.
numbers.forEach((num) => console.log("Current Number:", num));

// reverse(): Reverses the order of the elements in place (Mutates the original array).
const countdown = [1, 2, 3];
countdown.reverse();
// countdown is now: [3, 2, 1]

// join(): Creates and returns a new string by concatenating all elements, separated by a specified string.
const fruitBasketString = fruits.join(" - ");
// fruitBasketString = "Apple - Cherry - Kiwi - Banana"
