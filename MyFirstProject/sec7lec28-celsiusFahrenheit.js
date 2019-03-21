/*Programming Challenge: Celsius to Fahrenheit
Section 7, Lecture 28

The formula for converting from degrees Celsius to degrees Fahrenheit is as follows:

F = 1.8 * C + 32

Where F is the Fahrenheit temperature and C is the Celsius temperature.

For this programming challenge, write a function called Fahrenheit that takes in an integer representing a Celsius temperature as its input. 
The function should return the temperature after it has been converted to Fahrenheit.

To demonstrate that the function works, call it in a loop that iterates up by 10 from 0 to 100 and for each number display the Fahrenheit 
equivalent.

For example, if the fahrenheit function is called with 0 as its input, a message stating that the Fahrenheit equivalent of 0 degrees Celsius 
is 32 should be logged to the console.*/

function fahrenheit(Cel) {
    return 1.8 * Cel + 32;
}
    
for (let i = 0; i < 100; i += 10) {
    console.log("The Fahrenheit equivalent of " + i + " degrees Celsius is " + fahrenheit(i) + ".");
}