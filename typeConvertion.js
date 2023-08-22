// Some type Constructors:
String();
Number();
Boolean();

// Type conversion:
// টাইপ কনভার্শন হলো- একটি ডেটা টাইপ থেকে আরেক টাইপে রুপান্তরিত করা।

//
//
let x = "abcd";
let x1 = Number(x); // NaN   // This not possible to convert in number
let x2 = Number(""); // 0
let x3 = Number(" "); // 0
let x4 = Number("11 22"); // NaN
//
//
//
// Number Methods:
Number();
parseFloat();
parseInt();

let a = parseInt(21.305); // 21
let a1 = parseFloat(12); // 12
let a2 = Number("100"); // 100
let a3 = Number("aaa"); // NaN
//
//
//
// The Unary + Operator
//The unary + operator can be used to convert a variable to a number:
let b = "5";
let b1 = +b; // 5

// String can't convert in Number
let b2 = "aaa";
let b3 = +b2; // NaN
//
//
//
// Notes:
// Convert Dates to Numbers
// Convert Dates to Strings
// Convert Booleans to Numbers
// Convert Booleans to Strings
//
//
// Automatic Type Conversion:
5 + null; // returns 5              because null is converted to 0
"5" + null; // returns "5null"      because null is converted to "null"
"5" + 2; // returns "52"            because 2 is converted to "2"
"5" - 2; // returns 3               because "5" is converted to 5
"5" * "2"; // returns 10            because "5" and "2" are converted to 5 and 2

//JavaScript Type Conversion Table:
//
//  OriginalValue	         to Number	             to String	               to Boolean
//      "0"	                    0	                    "0"	                        true
//      "000"	                0	                    "000"	                    true
//      NaN	                    NaN	                    "NaN"	                    false
//      Infinity	        Infinity	               "Infinity"	                true
//      -Infinity	        -Infinity	               "-Infinity"	                true
//      ""	                    0	                    ""	                        false
//      [ ]	                    0	                    ""	                        true
//      [20]	                20	                    "20"	                    true
//      function(){}	        NaN	                "function(){}"	                true
//      { }	                    NaN	                "[object Object]"	            true
//      null	                0	                "null"	                        false
//      undefined	            NaN	                "undefined"	                    false
//      ["twenty"]	            NaN	                "twenty"	                    true
//      ["ten","twenty"]	    NaN	                "ten,twenty"	                true

const test = null;
console.log(String(test));
