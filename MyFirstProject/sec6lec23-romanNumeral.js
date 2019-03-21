/*Programming Challenge: Roman Numeral Equivalent
Section 6, Lecture 23

For this exercise, start by creating a variable and assigning it a randomly generated integer between and inclusive of both 1 and 10. 

Then, using your knowledge of if, else if, and else statements, create a program which logs the roman numeral equivalent of the randomly 
generated number to the console. 

For example, if the randomly generated integer was 9, then the program would log IX to the console.*/

const oneTen = Math.floor(Math.random() * 10) + 1;
if (oneTen == 1) {
console.log("The roman numeral equivalent of " + oneTen + " is I.");
} else if (oneTen == 2) {
console.log("The roman numeral equivalent of " + oneTen + " is II.");
} else if (oneTen == 3) {
console.log("The roman numeral equivalent of " + oneTen + " is III.");
} else if (oneTen == 4) {
console.log("The roman numeral equivalent of " + oneTen + " is IV.");
} else if (oneTen == 5) {
console.log("The roman numeral equivalent of " + oneTen + " is V.");
} else if (oneTen == 6) {
console.log("The roman numeral equivalent of " + oneTen + " is VI.");
} else if (oneTen == 7) {
console.log("The roman numeral equivalent of " + oneTen + " is VII.");
} else if (oneTen == 8) {
console.log("The roman numeral equivalent of " + oneTen + " is VIII.");
} else if (oneTen == 9) {
console.log("The roman numeral equivalent of " + oneTen + " is IX.");
} else {
console.log("The roman numeral equivalent of " + oneTen + " is X.");
}