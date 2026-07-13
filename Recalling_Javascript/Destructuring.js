const person = {
  name: "Mert",
  age: 28,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ["Sports", "Gaming", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
