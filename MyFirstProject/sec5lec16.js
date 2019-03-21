/*Programming Challenge: Sum of Numbers From A Positive Integer
Section 5, Lecture 16

Write a program which generates a random integer between and inclusive of 1 and 15.  Assign that random integer to a variable. 

The program should then use a while loop to get the sum of all of the integers from the random integer that was generated down to 1.  
For example, if the number generated was 6, the while loop would find the sum of 6, 5, 4, 3, 2, and 1, which is 21.

At the end of your program, use some console log statements to display the randomly generated number and the sum found by the while loop.
Resources for this lecture*/


// posInt is a variable which holds a randomly generated integer between 1 and 15.
// It is a let variable since its value will be changed later in a while loop.
let posInt = Math.floor(Math.random() * 10) + 1;

// This variable stores the initial value of posInt before it is used in the loop so
// that later it can be used to display posInt's initial value in the output.
const intInit = posInt;

let summed = 0;
// The while loop will run while posInt's stored integer value is greater than 0
while (posInt > 0) {
    // This is the equivalent of summed = summed + posInt;
    // In other words: new value of summed = old value of summed + new value of posInt;
    summed += posInt;
    // This will decrement posInt so that posInt will eventually equal 0 and the while
    // loop will stop running its code.
    posInt--;
}
console.log(intInit); // displays the initial value of posInt
console.log(summed); // displays the sum of integers from posInt
