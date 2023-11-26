'use strict';
//expression and statement
/*if (23 > 10) {
    const str = '23 is bigger'
}
const me = 'Adeola';
console.log(`I'm ${2047 - 2010} years old ${me}`)*/

/*const age = 23;
age >= 18 ? console.log('i like to drink wine'):
console.log('I like to drink water');*/

//Array
/*const jonasArray = [
    'Jonas',
    'Schemedtmann',
    2037 - 1991,
    'Teacher'
    ['Michel', 'Peter', 'Steven']
];*/
//array object
/*const jonas = {
    firstName: 'jonas',
    lastName: 'Schemedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friend: ['Micheal', 'peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
//or
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

const intrestedIn = prompt('what do you want know about jonas? choose between firstName, lastName, job, age, friend');*/

/*if (jonas[intrestedIn]){
console.log(jonas[intrestedIn]);
} else {
    console.log('wrong request! choose between firstName, lastName, job, age, friend')
};

jonas.location = 'portugal'
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friend.length} friends, and his best friend is called ${jonas.friend[0]}`);

const jonas = {
    firstName: 'jonas',
    lastName: 'Schemedtmann',
    age: 1991,
    job: 'teacher',
    friend: ['Micheal', 'peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear; 
    }
};
console.log(jonas.calcAge(1991))
//or
console.log(jonas['calcAge'](1991))

console.log(`${jonas.firstName} is a ${this.calcAge}-years old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'}`)*/

//loop
//for (let rep = 1; rep <= 10; rep++){
    //console.log(`Lifting weight repetition ${rep}`)
//}

/*const jonas = [
    'Jonas',
    'Schemedtmann',
    2037 - 1991,
    'Teacher',
    ['Michel', 'Peter', 'Steven']
];

const types = [];

//for (let i = 0; i < 5; i++){
    //console.log(jonas[i])
//}

for (let i = 0; i < jonas.length; i++){
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

   //filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i< years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages)

  console.log('---ONLY STRINGS---')
  for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
  }

  console.log('---BREAK WITH NUMBER---')
   for (let i = 0; i < jonas.length; i++){
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
  }*/

/*const jonas = [
    'Jonas',
    'Schemedtmann',
    2037 - 1991,
    'Teacher',
    ['Michel', 'Peter', 'Steven']
];

//4, 3, ....,

for (let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i])
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`-------starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    }
}*/

//WHILE LOOP

/*let rep = 1;
while (rep < 6){
    console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++; 
}*/

/*let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end.....');
    
}*/
  