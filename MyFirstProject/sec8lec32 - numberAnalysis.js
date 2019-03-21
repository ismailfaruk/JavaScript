/*Programming Challenge: Number Analysis
Section 8, Lecture 32

Create an array with a randomly generated length of 25 to 50.  Each of the arrays item's should be a randomly generated integer 
from the range between and inclusive of 1 and 10.

Now, write a program that gets and displays the following five things:

    The array you created

    The number of even numbers in the array

    The number of odd numbers in the array

    The number of items in the array

    The average of the numbers in the array displayed to 2 decimals of precision
*/

let arr = []; // This variable will hold the array for this programming challenge.
let evens = 0; // This will hold the number of even numbers in the array.
let odds = 0; // This will hold the number of odd numbers in the array.
let avg = 0; // This will hold the average of the numbers in the array.

// generates a random number between 25 and 50 as the length of the array
const randy = Math.floor(Math.random() * 26) + 25;

// gives the array values
for (let i1 = 0; i1 < randy; i1++) {
// generate random number between 1 and 10 then push it to the array
    arr.push(Math.floor(Math.random() * 10) + 1);
}

//number of even and odd numbers in the array
for (let i2 = 0; i2 < arr.length; i2++) {
// Anything with a remainder of 0 when divided by 2 is an even number.
// Anything from the array that isn't an even number must be an odd number.
    if (arr[i2] % 2 == 0) {
        evens += 1;
    } else {
        odds +=1;
    }
    avg += arr[i2]; // This holds the sum of all of the numbers from the array arr.
}

// This assigns avg the average of all of the numbers from the array by dividing the
// sum of all of those numbers by the length of the array.
avg /= arr.length;

console.log(arr); // logs the array to the console
console.log(evens); // logs the number of even numbers in the array to the console
console.log(odds); // logs the number of odd numbers in the array to the console
console.log(arr.length); // logs the length of the array to the console
console.log(avg.toFixed(2)); // logs average of the array's numbers with 2 decimal places showing