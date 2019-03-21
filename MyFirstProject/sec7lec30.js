/*Programming Challenge: Factorial
Section 7, Lecture 30

Create a function which takes one positive integer as its input and returns its factorial.

To make sure that your function works correctly, you should call it with some inputs like 3, 4, and 5 and log those calls to the console. 
For those inputs, you should get 6, 24, and 120, respectively.*/

// The input facNum's name is short for factorial number.
function factorial(facNum) {
    // The let variable toRe will be used in the for loop used to calculate facNum's
    // factorial. To do this, it will be multipled by decrementing values of
    // facNum. Since it is will be multiplied, it was initialized with the initial value
    // of 1.
    let toRe = 1;
    // By the end of this for loop, toRe will have been reassigned facNum's factorial.
    // Here is how it works:
    // 1.Check the current value of facNum and see if that value is >= 1
    // 2.Run code to reassign toRe itself multiplied by the current value
    // of facNum if facNum is >= 1
    // 3.Decrement facNum then repeat steps 1 and 2
    // 4.The for loop stops running when facNum is decremented to 0
    for (let i = facNum; facNum >= 1; facNum--) {
        toRe *= facNum;
    }
    // returns toRe, which now holds the value of facNum's factorial
    return toRe;
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120