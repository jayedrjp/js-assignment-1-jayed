// Task 5: BMI Calculator and Health Category

const weight = 70; // Weight in kilograms
const height = 1.75; // Height in meters

const bmi = weight / (height * height);

console.log("BMI:", bmi.toFixed(2));

// Determine health category using nested if-else statements
if (bmi < 18.5) {
    console.log("You are underweight.");
} else {
    if (bmi <= 24.9) {
        console.log("You are normal.");
    } else {
        if (bmi <= 29.9) {
            console.log("You are overweight.");
        } else {
            console.log("You are obese.");
        }
    }
}