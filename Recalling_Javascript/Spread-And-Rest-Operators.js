const hobbies = ["Sports", "Cooking"];
//const copiedArray = hobbies.slice(); // Outputs new coppied array
//const copiedArray = [hobbies]; //Outputs nested arrays
const copiedArray = [...hobbies]; // (Spread operator !!!!!!!!!!!!!!!)Outputs new coppied array

const toArray1 = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
}; //Only takes 3 arguments!!!!!!!!

const toArray2 = (...args) => {
  return [...args];
}; // (Rest operator !!!!!!!!!!!!!!!!) No argument limit
console.log(toArray2(1, 3, 4, 6, 8));
