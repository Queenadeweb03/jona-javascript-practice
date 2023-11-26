'use strict';

/*const firstName = 'Adeola';
const job = 'programmer';
const birthYear = 1984;
const year = 2023;

const Adeola = "I'john " + firstName + ', a ' + (year - birthYear) + ' year old ' + ' is ' + ' a ' + job;
console.log(Adeola)

const adeolaNew = `I'john ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(adeolaNew);




console.log('just a regular string...')

console.log('string with \n\
multiple \n\
lines');

console.log(`string
multiple
lines`);*/


/*const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
//function

/*function logger(){
console.log('my name is Adeola');
}
//calling / runing / invoking function
logger(23);

function fruitProcessor(apple, orange){
    const juice = `juice with ${apple} apple and ${orange} orange.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');*/



//function declaration
/*function calcAge1(birthYear){
    return 2023 - birthYear
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);


//Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 -birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} year`;
}

console.log(yearUntilRetirement(1991, "Adeola"))*/


/*const calcAverageDolphins = score => 3 / score;
const calcAverageKoalas = score => 3 / score;
const avegDolphins = (calcAverageDolphins(44 + 23 + 71)); 
const avegKoalas = (calcAverageKoalas(65 + 54 + 49));
console.log(avegDolphins);
console.log(avegKoalas);


const checkWinner = function (avegDolphins, avegKoalas){
    const avegDolphins = Dolphins;
    const avegKoalas = Koalas;{
        return
    }
}*/
/*const calcAverage = (a, b, c) => (a + b + c) /3;
console.log(calcAverage(3, 5, 7));

const dolphinScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(65, 54, 49);
 console.log(dolphinScore,koalasScore);

 const checkWinner = function (avegDolphins, avegKoalas){
     if (avegDolphins >= 2 * avegKoalas) {
        console.log(`Dolphins win (${avegDolphins} vs. ${avegKoalas})`);
     } else if (avegKoalas >= 2 * avegDolphins){
        console.log(`Koalas win (${avegKoalas} vs. ${avegDolphins})`);
     } else {
        console.log('No one wins')
     }
 }
 checkWinner(dolphinScore, koalasScore);*/


 /*const calcTip = function(bill){
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
 }
    const bills = [155, 555, 44];
    const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    
    
    const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
    console.log(bills, tip);
    console.log(total);*/
    
 
    /*const mark = {
        fullName:  'Mark Miller',
        mass: 78,
        height: 1.69,

        calcMarkBmi: function(){
            this.Bmi = this.mass / this.height ** 2;
            return this.Bmi;
        }
    };
    
    const john = {
        fullName:  'John Smith',
        mass: 92,
        height: 1.95,

        calcJohnBmi: function(){
            this.Bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    };

    mark.calcMarkBmi()
    john.calcJohnBmi()

    if (john.Bmi > mark.Bmi){
    console.log(`${john.fullName}'s BMI (${john.Bmi}) is higher than ${mark.fullName} BMI (${mark.Bmi})`);

    }else if (mark.Bmi > john.Bmi){
        console.log(`${mark.fullName}'s BMI (${mark.Bmi}) is higher than ${john.fullName} BMI (${john.Bmi})`);
    }*/

    const calcTip = function (bill){
        return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
     }
        const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
        const tips = [];
        const total = [];

        for (let i = 0; i < bills.length; i++){
          tips.push(calcTip(bills[i]));
          total.push(calcTip(bills[i]) + bills[i]);
        }
        console.log(bills, tips, total);

        const calcAverage = function (arr){
            let sum = 0;
            for (let i = 0; i < arr.length; i++){
                sum += arr[i]
            }
            //console.log(sum)
            return sum / arr.length;
        }
        console.log(calcAverage([2, 3, 7]));
        console.log(calcAverage(total));
        console.log(calcAverage(tips));
        
        