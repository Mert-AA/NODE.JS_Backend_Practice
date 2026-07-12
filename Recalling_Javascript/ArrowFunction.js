var name = "Mert";
var age = 28;
var hasHobbies = true;

const sumUser = (name, age, hasHobbies) => {
  return (
    "Name is " +
    name +
    "\nAge is " +
    age +
    "\nThe user has hobbies: " +
    hasHobbies
  );
};

const add = (a, b) => a + b;
const addOne = (a) => a + 1;
const addRandom = () => 4 + 5;

console.log(add(1, 2));
console.log(addOne(4));
console.log(addRandom());
console.log(sumUser(name, age, hasHobbies));
