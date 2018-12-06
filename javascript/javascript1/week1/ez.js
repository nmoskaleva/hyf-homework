let firstWords = ["Cute", "Christmas", "Brave", "Rude", "Polite", "Direct", "Late", "Platonic", "Running", "Kind"];
let secondWords = ["Breaker", "Fixer", "Chopin", "Mood", "Chicken", "Circuit", "Pillow", "Pizza", "Onion", "Stop"];
const randomNumber = Math.floor(Math.random() * 10) + 0;
const randomNumber1 = Math.floor(Math.random() * 10) + 0;
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber1];
console.log("The startup: " + "\"" + startupName + "\"" + " contains " + startupName.length + " characters.");