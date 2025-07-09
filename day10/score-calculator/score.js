// Student Test Score Management System - Day 10 Assignment
// Score calculation using JavaScript operators and conditional statements

// Variable declarations using var, let, and const
const maxScore = 100;
const bonusPoints = 5;
const passingScore = 60;
let input;
let score;
var grade;
var status;
var message;
let finalScore;

// Get score input from user
input = prompt("점수를 입력하세요.");

// Convert string input to number
score = Number(input);

// Challenge Task: Input validation
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
    // Calculate final score with bonus
    finalScore = score + bonusPoints;
    
    // Challenge Task: Additional operations
    // Increment by 1 using unary operator
    finalScore++;
    
    // Apply 10% scaling using compound assignment
    finalScore *= 1.1;
    
    // Round the final score to integer
    finalScore = Math.floor(finalScore);
    
    // Limit score to maximum if it exceeds 100
    if (finalScore > 100 && finalScore < 110) {
        finalScore = 100;
    }
    
    // Determine grade using if-else if-else statements
    if (finalScore >= 100) {
        grade = "S";
    } else if (finalScore >= 90 && finalScore < 100) {
        grade = "A";
    } else if (finalScore >= 80 && finalScore < 90) {
        grade = "B";
    } else if (finalScore >= 70 && finalScore < 80) {
        grade = "C";
    } else if (finalScore >= 60 && finalScore < 70) {
        grade = "D";
    } else {
        grade = "F";
    }
    
    // Determine pass/fail status using ternary operator
    status = finalScore >= passingScore ? "Pass" : "Fail";
    
    // Determine message using switch statement
    switch (grade) {
        case "S":
            message = "Super!!";
            break;
        case "A":
            // Special case for perfect score
            if (finalScore === 100) {
                message = "Perfect Score!";
            } else {
                message = "Excellent work!";
            }
            break;
        case "B":
            message = "Good job!";
            break;
        case "C":
            message = "Satisfactory performance.";
            break;
        case "D":
            message = "Needs improvement.";
            break;
        case "F":
            message = "Please try harder!";
            break;
        default:
            message = "Unknown grade";
    }
    
    // Output results
    console.log("Final Score: " + finalScore);
    console.log("Grade: " + grade);
    console.log("Status: " + status);
    console.log("Message: " + message);
}

// Basic implementation (without challenge tasks) for reference:
/*
// Get score input from user
input = prompt("점수를 입력하세요.");

// Convert to number
score = Number(input);

// Add bonus points using binary arithmetic operator
finalScore = score + bonusPoints;

// Alternative: using compound assignment
// score += bonusPoints;
// finalScore = score;

// Determine grade using if-else if-else
if (finalScore >= 100) {
    grade = "S";
} else if (finalScore >= 90) {
    grade = "A";
} else if (finalScore >= 80) {
    grade = "B";
} else if (finalScore >= 70) {
    grade = "C";
} else if (finalScore >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Determine pass/fail using ternary operator
status = finalScore >= 60 ? "Pass" : "Fail";

// Get message using switch
switch (grade) {
    case "S":
        message = "Super!!";
        break;
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;
    case "C":
        message = "Satisfactory performance.";
        break;
    case "D":
        message = "Needs improvement.";
        break;
    case "F":
        message = "Please try harder!";
        break;
}

// Output
console.log("Final Score: " + finalScore);
console.log("Grade: " + grade);
console.log("Status: " + status);
console.log("Message: " + message);
*/