/*
    Topics:
    -------
        A. Procedural syntax
        B. Object oriented syntax
    Notes:
    ------

*/

// ---------------------------------------------------------------------------->>

// A. Procedural syntax
var width = 10;
var height = 25;

function calculateArea(width, height) {
  return width * height;
}

function calculateRange(width, height) {
  return 2 * (width + height);
}

const res1 = calculateArea(width, height); // 250
const res2 = calculateRange(width, height); // 70
