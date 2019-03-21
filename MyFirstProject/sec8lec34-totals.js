



/*Programming Challenge: Totals
Section 8, Lecture 34

Paste this 10 x 10 2D array into a JavaScript file:

const arr = [
    [0, 6, 1, 6, 5, 1, 0, 8, 2, 7],
    [4, 6, 3, 7, 9, 1, 0, 2, 3, 6],
    [0, 1, 4, 2, 7, 4, 5, 8, 5, 5],
    [7, 3, 4, 1, 7, 4, 8, 3, 9, 1],
    [1, 0, 2, 3, 9, 0, 6, 5, 7, 3],
    [3, 3, 5, 2, 7, 6, 8, 9, 7, 6],
    [5, 6, 6, 7, 3, 3, 4, 9, 1, 9],
    [6, 3, 5, 4, 7, 0, 8, 9, 1, 2],
    [2, 3, 2, 3, 5, 7, 6, 8, 9, 8],
    [9, 8, 6, 7, 5, 4, 2, 3, 1, 0]
];

Then do the following:

    Create a variable called row and assign it a randomly generated number between 1 and 10.

    Create a variable called column and assign it randomly generated number between 1 and 10 .

    Create a loop that gets the total sum of all of the numbers contained within the row held at arr[row].

    Create a loop that gets the total sum of all of the numbers in column number column of arr.

    At the end of your program, you should use console.log() statements to display row, column, the sum from step 3, and the sum from step 4.
*/

//initial copy pasted array
const array = [
    [0, 6, 1, 6, 5, 1, 0, 8, 2, 7],
    [4, 6, 3, 7, 9, 1, 0, 2, 3, 6],
    [0, 1, 4, 2, 7, 4, 5, 8, 5, 5],
    [7, 3, 4, 1, 7, 4, 8, 3, 9, 1],
    [1, 0, 2, 3, 9, 0, 6, 5, 7, 3],
    [3, 3, 5, 2, 7, 6, 8, 9, 7, 6],
    [5, 6, 6, 7, 3, 3, 4, 9, 1, 9],
    [6, 3, 5, 4, 7, 0, 8, 9, 1, 2],
    [2, 3, 2, 3, 5, 7, 6, 8, 9, 8],
    [9, 8, 6, 7, 5, 4, 2, 3, 1, 0]
    ];


// Generates a random number between 0 and 9 for the row. It starts at 0 since array indexes start at 0.
const row = Math.floor(Math.random() * 10);

// Generates a random number between 0 and 9 for the column. It starts at 0 since array indexes start at 0.
const column = Math.floor(Math.random() * 10);

// variable to store the sum of the randomly chosen row
let rowSum = 0;

// this for loop goes from 0 to 9 to iterate through the indexes of the array.
for (let i1 = 0; i1 < 10; i1++) {
// To assign rowSum the sum of the chosen row, the row stays the same each time the for loop runs, hence
// the arr[row], while all of its columns are iterated through, hence the [i1] in arr[row][i1].
    rowSum += array[row][i1]; // equivalent of rowSum = rowSum + arr[row][i1];
}

// variable to store the sum of the randomly chosen column
let colSum = 0;

// this for loop goes from 0 to 9 to iterate through the indexes of the array.
for (let i2 = 0; i2 < 10; i2++) {
// To assign colSum the sum of the chosen column, the column stays the same each time the for loop runs,
// hence the [column] in arr[i2][column], while all of its rows are iterated through, hence the [i2] in
// arr[i2][column].
    colSum += array[i2][column]; // equivalent of colSum = colSum + arr[i2][column];
}

console.log(row); // logs the randomly generated value of row to the console
console.log(column); // logs the randomly generated value of column to the console
console.log(rowSum); // logs the sum of all of the numbers from the row to the console
console.log(colSum); // logs the sum of all of the numbers from the column to the console
