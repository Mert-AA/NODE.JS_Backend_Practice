// ==========================================
// PRIMITIVE VS REFERENCE VALUES CHEAT-SHEET
// ==========================================

// ------------------------------------------
// 1. PRIMITIVES (Stored by Value in the Stack)
// Types: Number, String, Boolean, undefined, null
// ------------------------------------------
let age = 28;
let newAge = age; // A real, independent copy of the value '28' is created.

newAge = 30; // Changing the copied variable...

console.log(age); // 28 (Original stays perfectly safe!)
console.log(newAge); // 30 (Only the copy changed)

// ------------------------------------------
// 2. REFERENCE TYPES (Stored by Pointer in the Heap)
// Types: Objects, Arrays
// ------------------------------------------
let person = { name: "Max" };
let newPerson = person;
// WARNING: This ONLY copies the POINTER (memory address), not the actual object!
// Both variables now look at the exact same object in the Heap.

newPerson.name = "Anna"; // Changing the copy...

console.log(person.name); // "Anna" (The original object mutated too!)
console.log(newPerson.name); // "Anna"

// ------------------------------------------
// 3. HOW TO PROPERLY COPY ARRAYS (Shallow Copies)
// ------------------------------------------
let hobbies = ["Sports", "Cooking"];

// Approach A: Using slice() method
let copiedHobbies1 = hobbies.slice();

// Approach B: Using the Spread Operator (Modern & Popular)
let copiedHobbies2 = [...hobbies];

// Let's test if it's a real copy:
copiedHobbies2.push("Music");

console.log(hobbies); // ["Sports", "Cooking"] (Original is safe!)
console.log(copiedHobbies2); // ["Sports", "Cooking", "Music"]

// ------------------------------------------
// 4. HOW TO PROPERLY COPY OBJECTS (Shallow Copies)
// ------------------------------------------
let user = { name: "Max", age: 28 };

// Approach A: Using Object.assign()
let copiedUser1 = Object.assign({}, user);

// Approach B: Using the Spread Operator (Modern & Popular)
let copiedUser2 = { ...user };

// Let's test if it's a real copy:
copiedUser2.name = "Manu";

console.log(user.name); // "Max" (Original is safe!)
console.log(copiedUser2.name); // "Manu"

// ------------------------------------------
// 5. THE "DEEP CLONE" PROBLEM (Nested References)
// ------------------------------------------
// Spread operator (...) and Object.assign() ONLY do a "Shallow Copy" (1 level deep).
// If you have arrays inside objects, those inner arrays STILL share the same pointer!

let complexUser = {
  name: "Max",
  skills: ["JavaScript", "React"], // An Array inside an Object
};

// We make a shallow copy
let shallowCopiedUser = { ...complexUser };

// Modifying the nested array of the copy...
shallowCopiedUser.skills.push("Node.js");

// Uh oh! The original object's nested array is also mutated!
console.log(complexUser.skills); // ["JavaScript", "React", "Node.js"]

// --- THE SOLUTION: Deep Cloning ---
// Modern JavaScript has a built-in function to safely clone nested objects:
let deepCopiedUser = structuredClone(complexUser);

deepCopiedUser.skills.push("Python");

// Now the original is completely safe, even deeply nested properties!
// complexUser.skills will NOT contain "Python".
