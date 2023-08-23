/* 
    Logical operators:

        1. && (AND Operator)
        1. || (OR Operator)
        1. !  (NOT Operator)
*/
//
/*
    Falsy value:

        * null
        * undefined
        * ('', "", ``)
        * false
        * 0
        * NaN
*/
//
// OR Operator:
// নোট: এই অপারেটরের ক্ষেত্রে যদি প্রথম ভ্যালু মিথ্যা হয় তাহলে পরের অংশ প্রিন্ট হবে। আর যদি প্রথম অংশ সত্য হয় তাহলে পরের অংশ আর এক্সিকিউট হবেনা। অন্যভাবে বলতে গেলে -  এইক্ষেত্রে যেকোনো একাট শর্ত সত্য হতে হবে।

const name1 = "";
const result1 = name1 || "Second part"; // Second part

const name2 = "First part";
const result2 = name2 || "Second part"; // First part

//
//
// AND Operator:
// নোট:  এইক্ষেত্রে  দুটি  শর্তই সত্য হতে হবে। তাছাড়া এটি কোনো আউটপুট দিবেনা।

const isOk = 25; // Truthy value
const result3 = isOk && console.log("Everything is good"); // Everything is good

const notOk = 0; // Falsy value
const result4 = notOk && console.log("Something went wrong"); // Code won't execute.
