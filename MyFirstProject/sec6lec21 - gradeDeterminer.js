/*Programming Challenge: Grade Determiner
Section 6, Lecture 21

Dr. Fuentes teaches a Python class and uses the following grading scale for all of her exams.  You work as a teacher's assistant and due to 
her busy schedule she has requested that you write a program which will determine the grades of the class's 20 students.

Her grading scale is as follows:

    A score of 93 or above is an A

    A score of 83 or above is a B

    A score of 73 or above is a C

    A score of 66 or above is a D

    A score any lower is an F

For this exercise, you will write a program which uses a loop to iterate through the numbers 1 to 20 since the class has 20 students.  
For each student, you will randomly generate a score between and inclusive of 50 and 100.

Then, inside the loop, for each student, you will use the following set of instructions to determine and then display their score using 
console.log().

    If the student's score is greater than or equal to 93, then the student will receive an A grade.

    Otherwise, if the student's score is greater than or equal to 83, then the student will receive an B grade.

    Otherwise, if the student's score is greater than or equal to 73, then the student will receive an C grade.

    Otherwise, if the student's score is greater than or equal to 66, then the student will receive an D grade.

    Otherwise, the student will receive an F grade.

(hint: for this exercise, you should be using nested if and else statements.)*/

for (let stuNum = 1; stuNum < 21; stuNum++) {
    let score = Math.floor(Math.random() * 51) + 50;
    if (score >= 93) {
    console.log("Student #" + stuNum + "'s score of " + score + " is an A.");
    } else {
        if (score >= 83) {
        console.log("Student #" + stuNum + "'s score of " + score + " is an B.");
        } else {
            if (score >= 73) {
            console.log("Student #" + stuNum + "'s score of " + score + " is an C.");
            } else {
                if (score >= 66) {
                console.log("Student #" + stuNum + "'s score of " + score + " is an D.");
                } else {
                console.log("Student #" + stuNum + "'s score of " + score + " is an F.");
                }
            }
        }
    }
}