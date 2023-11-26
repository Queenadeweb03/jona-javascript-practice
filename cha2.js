/*const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const calcMarkBmi = markWeight / markHeight ** 2;
const calcJohnBmi = johnWeight / (johnHeight * johnHeight);
console.log(calcMarkBmi, calcJohnBmi);

if (calcMarkBmi > calcJohnBmi){
    console.log(`Mark ${calcMarkBmi} has higher bmi than John ${calcJohnBmi}`);
}else{
    console.log(`John ${calcJohnBmi} has higher bmi than Mark ${calcMarkBmi}`)
};*/

/*const avegDolphins = (97 + 112 + 101) / 3;
const avegKoalas = (109 + 95 + 123) / 3;
console.log(avegDolphins, avegKoalas);
//console.log(avegDolphins > avegKoalas);

/*if (avegDolphins > avegKoalas){
    console.log('Dolphine win the trophy')
} else if (avegKoalas > avegDolphins){
    console.log('koalas win the trophy')
} else if (avegKoalas > avegDolphins){
    console.log('Both win the trophy')
}
 if (avegDolphins > avegKoalas && avegDolphins >= 100){
    console.log('Dolphine win the trophy');
} else if (avegKoalas > avegDolphins && avegKoalas >= 100){
    console.log('Koalas win the trophy');
}else {
    console.log('No one win the trophy');
}*/

/*const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the Tip was ${tip}. and the total value ${bill + tip}`)*/



 function calcTip(bill){
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
 }
 const bills = [125, 555, 44];
 const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
 const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
 console.log(bills, tip, total);


