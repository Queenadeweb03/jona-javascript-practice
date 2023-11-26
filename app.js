'use strict';

/*const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 19];

const calcAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcAmplitude(temperature);
console.log(amplitude);*/
//max = 3
//max = 7

/*const calcAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcAmplitudeNew([1, 2, 3], [3, 4, 5]);
console.log(amplitudeNew);*/

//how to fix the bugs

/*const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //value: prompt("degrees celsius:"),
    value: Number(prompt("degrees celsius:")),
  };
  //console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value)
  //console.error(measurement.value)

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());*/

//challenges
/*const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

console.log(
  `${temps1[0]} in 1 day..... ${temps1[1]} in 2 days.... ${temps1[2]} in 3 days`
);
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} in ${i + 1} days`;
  }
  console.log(str);
};
printForecast(temps1);*/

/*function expect(val) {
  return {
    toBe: function (otherVal) {
      if (val === otherVal) {
        return { value: true };
      } else {
        throw new Error(`Expected ${val} to be ${otherVal}`);
      }
    },
    notToBe: function (otherVal) {
      if (val !== otherVal) {
        return { value: true };
      } else {
        throw new Error(`Expected ${val} not to be ${otherVal}`);
      }
    },
  };
}

try {
  console.log(expect(5).toBe(5));
  console.log(expect(5).notToBe(5));
} catch (error) {
  console.error(error.message);
}*/
