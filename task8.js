// Task 8: Using if-else

const num1 = 10;
const num2 = 5;

let result;

if (num1 > num2) {
    result = num1 * 2;
} else {
    result = num1 + num2;
}

console.log("Result using if-else:", result);

// Using ternary operator

const resultUsingTernary = num1 > num2 ? num1 * 2 : num1 + num2;

console.log("Result using ternary operator:", resultUsingTernary);