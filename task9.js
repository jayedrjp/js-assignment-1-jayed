// Task 9: Ticket Fare Calculator

const age = 25;
const isStudent = false;

const ticketFare = 800;
let finalFare;

if (age < 10) {
    finalFare = 0;
    console.log("Children's ticket is free.");
} else if (isStudent) {
    finalFare = ticketFare * 0.5;
    console.log("Student discount: 50%");
} else if (age >= 60) {
    finalFare = ticketFare * 0.85;
    console.log("Senior citizen discount: 15%");
} else {
    finalFare = ticketFare;
    console.log("Regular ticket fare.");
}

console.log("Final ticket fare:", finalFare, "tk");