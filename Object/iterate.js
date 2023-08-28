/*
    Topics:
        A. Object traverse

            A. Object traverse:
                1. for-in loop 

*/

const obj = {
  x: 10,
  y: 15,
  z: 56,
};

for (let key in obj) {
  key; // x; y; z;
  obj[key]; // 10; 15; 56;
}
