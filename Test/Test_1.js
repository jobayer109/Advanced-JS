"use strict";

function Operations(coef) {
  return {
    sum: (...args) => {
      return arguments[0] + coef;
    },
  };
}

const ops = Operations(0.1);
const result = ops.sum(1, 2, 3); // 0.2

// ------------------------------------------------------------------------->>

const Num = function () {
  this.getNum = () => 10;
};

Num.prototype.getNum = () => 20;

const num = new Num();

// console.log(num.getNum());

// ------------------------------------------------------------------------->>
