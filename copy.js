'use strict';

//primitive types
/*let lastName = 'Adeleke';
let oldLastName = lastName;
lastName = 'Adeola';
console.log(lastName, oldLastName);

//Reference
const Sulaikha = {
  firstName: 'Sulaikha',
  lastName: 'Adeleke',
  age: 27,
};
const otherName = Sulaikha;
otherName.lastName = 'Adeola';
console.log('marriage:', Sulaikha); //output Adeola
console.log('still married:', otherName); // output Adeola
//because it not create new object in heap (otherName is not new in the heap), both variables point to the same address in the heap*/

//copying object
/*const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';
console.log(' before marriage:', jessica);
console.log('after married:', jessicaCopy);*/

/*const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';
console.log(' before marriage:', jessica);
console.log('after married:', jessicaCopy);*/

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary', 'john');
console.log(' before marriage:', jessica);
console.log('after married:', jessicaCopy);
