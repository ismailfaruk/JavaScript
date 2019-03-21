/*Programming Challenge: Fizz Buzz
Section 6, Lecture 25

Write a program that logs the numbers from 1 to 50 to the console using a loop. 

However, for numbers which are multiples of both 3 and 5 log “FizzBuzz” to the console.  For numbers which are multiples of 3 but not 5 
log “Fizz” instead of the number and for the numbers that are multiples of 5 but not 3 log “Buzz” instead of the number. 

All of the remaining numbers which are not multiples of 3 or 5 should be logged to the console.*/

for (let i = 1; i <= 50; i++) {
    // If i is divisible by both 3 and 5, "FizzBuzz" will be logged to the console.
    if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    // If i is only divisible by 3, "Fizz" will be logged to the console.
    } else if (i % 3 == 0) {
    console.log("Fizz");
    // If i is only divisible by 5, "Buzz" will be logged to the console.
    } else if (i % 5 == 0) {
    console.log("Buzz");
    // i will be logged to the console in all other cases.
    } else {
    console.log(i);
    }
}