//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 19;

//Add code here

if ((q1test % 3 === 0) && (q1test % 5 === 0)) {
    console.log(q1test + " is divisible by 3 and 5.");
} else if (q1test % 3 === 0){
    console.log(q1test + " is divisible by 3.");
} else if (q1test % 5 === 0){
    console.log(q1test + " is divisible by 5.");
} else {
    console.log(q1test + " is not divisible by 3 or 5.");
}

//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

let year = 1999;
// let year = 2000;
// let year = 1900;
// let year = 2024;

//Add code here

if (year % 4 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

//Add code here

for (let i = 1; i < 101; i++){
    if (i % 3 === 0 || i % 4 ===0) {
    console.log(i);
    }
}