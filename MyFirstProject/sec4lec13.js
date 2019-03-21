/*Programming Challenge: Miles Per Gallon
Section 4, Lecture 13

For this exercise, you will create a program that calculates the number of miles per gallon that a car gets. 

In a .js file, create two variables, one which will hold a randomly generated integer between 10 and 25 (inclusive of both 10 and 25), 
and another which will hold a randomly generated integer between and inclusive of 200 and 400.  The first variable represents the number 
of gallons of gas that the car's fuel tank holds.  The second variable represents the miles that the car can travel on a full tank before 
needing a refuel.

Using the formula miles per gallon (MPG) = miles driven/gallons used, calculate the car's MPG and display it in the output with one decimal 
shown after the decimal point.  In addition, display the values held in the variables you created for gallons of gas in the car's fuel tank 
and miles it can travel on a full tank.*/


// generates random number between and inclusive of 10 and 25
const fuel = Math.floor(Math.random()*10) + 10;

// generates random number between and inclusive of 200 and 400
const miles = Math.floor(Math.random()*100) + 200;

// calculates and displays the MPG of the car
console.log("The car can travel " + (miles / fuel).toFixed(1) + " miles per gallon.");

// displays the number of gallons of fuel that the car's fuel tank can hold
console.log("The car's fuel tank can hold " + fuel + " gallons.");

// displays the number of miles that the car can travel on a full tank
console.log("The car can travel " + miles + " miles on a full tank.");