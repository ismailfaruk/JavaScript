/* Programming Challenge: Grocery Store Purchase
Section 4, Lecture 11

A customer of a grocery store is purchasing 6 items.  The names and prices of the items are as follows:

    Penne 16 oz Pack of 12 - $16.68

    Arrabiata Pasta Sauce 24 oz - $6.98

    Bag of 20 Organic Garlic Cloves - $16.78

    Italian Seasoning 1.5 oz Bottle - $15.26

    Artisan Baguettes Twin Pack - $3.00

    12 oz Bag of Meatballs - $4.39

The area that the grocery store is in also charges a 5% sales tax on top of the price of the items.

In a .js file, write a program which holds the prices of the six items in variables as decimal numbers. Then, using a few console.log() 
statements, display the subtotal of the purchase, the amount of sales tax, and the total cost of the items after taxes.*/

// Variables holding the prices of the six items
const pasta = 16.68; // penne 16 oz, pack of 12
const sauce = 6.98; // Arrabiata sauce 24oz
const garlic = 16.78; // 20 pack garlic clove
const seasoning = 15.26; // Italian Seasoning
const bread = 3.00; // Baguette twin pack
const meatballs = 4.39; // 12 oz bag of meatballs

// subtotal is the sum of all prices before any sales taxes or discounts are added
const subtotal = (pasta + sauce + garlic + seasoning + bread + meatballs).toFixed(2);

// this calculates what a 5% sales tax would be by finding 5% of the subtotal
const tax = ((pasta + sauce + garlic + seasoning + bread + meatballs) * 0.05).toFixed(2);

// the total cost of all items after taxes = subtotal * 1.05
const total = ((pasta + sauce + garlic + seasoning + bread + meatballs) * 1.05).toFixed(2);

console.log("SUBTOTAL: $" + subtotal); // displays subtotal
console.log("SALES TAX: $" + tax); // displays sales tax
console.log("TOTAL: $" + total); // displays total cost