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
