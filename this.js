'use strict';

/*const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => console.log(`hey ${this.firstName}`),
};
jonas.greet();*/
//console.log(this.firstName);

/*const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: function () {
    console.log(`hey ${this.firstName}`);
  },
};
jonas.greet();*/

/*const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();*/

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();
