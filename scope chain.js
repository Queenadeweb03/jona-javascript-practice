/*function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  return age;
}
const firstName = 'jonas';
calcAge(1991);*/

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}
const firstName = 'jonas';
calcAge(1991);*/

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      let millenial = true;
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);
      console.log(millenial);
    }
  }
  printAge();

  return age;
}
const firstName = 'jonas';
calcAge(1991);*/

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('me:', me);
