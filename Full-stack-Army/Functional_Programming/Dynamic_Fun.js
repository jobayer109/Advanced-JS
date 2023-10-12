const operations = [
  {
    params: ["a", "b"],
    args: [20, 10],
    body: `console.log("a+b =", a+b)`,
  },
  {
    params: ["a", "b"],
    args: [20, 10],
    body: `console.log("a-b =", a-b)`,
  },
  {
    params: ["a", "b"],
    args: [20, 10],
    body: `console.log('a*b =', a*b)`,
  },
];

operations.forEach((operation) => {
  const fn = new Function(...operation.params, operation.body);
  fn(...operation.args);
});

/*
    Output:
            a+b = 30
            a-b = 10
            a*b = 200
*/
