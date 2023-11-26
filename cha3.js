/*const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);


if (scoreDolphins > scoreKoalas) {
    console.log("dolphins win the competition")
}
else if (scoreKoalas > scoreDolphins){
    console.log("koalas win the competition")
}else if (scoreDolphins === scoreKoalas){
    console.log("both win the com")
}*/

const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("dolphins win the competition");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("koalas win the competition");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("both win the com");
} else {
  console.log("none of them win the competition");
}
