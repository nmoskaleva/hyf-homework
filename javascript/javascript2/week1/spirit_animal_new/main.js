//create an array representing a spirit animal
const spiritAnimals = ["Leviathan", "Pink Panter", "Black Swan", "Cheesy Goat", "Hummingbird", "Alkonost", "Sirin", "Meduza Gorgona", "Pegasus", "Lobster"];

//get random animal from spiritAnimals array
const getRandomSpiritAnimal = function () {
    const randomAnimalIndex = Math.floor((Math.random()) * 10);
    return spiritAnimals[randomAnimalIndex];
}

//setting variables
const generateInitialAnimal = document.querySelector("#first-btn")
const userNameDiv = document.querySelector(".for-user-name")
const userSpiritAnimal = document.querySelector("#print-animal");
let userName = document.querySelector("#user-name");

//get the name the user wrote in the input field.
function getUserNameValue() {
    return document.querySelector("#user-name").value;
}

//function to assign a spirit animal
function giveSpiritAnimal() {
    const userNameValue = getUserNameValue();
    if (userNameValue != "") {
        userSpiritAnimal.innerHTML = userNameValue + " – " + getRandomSpiritAnimal();
        userNameDiv.appendChild(userSpiritAnimal);
    } else {
        alert("Please enter your name");
    }
}

//create functionality where a user can press a button and then get a new spirit animal.
//(creating 2 buttons for yes and no)
let noBtn = document.querySelector("#no-btn"); //button to get a new spirit animal.
let yesBtn = document.querySelector("#yes-btn");

function showNewBtns() {
    const userNameValue = getUserNameValue();
    if (userNameValue != "") {
        yesBtn.className = "show-me";
        noBtn.className = "show-me";
        generateInitialAnimal.className = "no-show"; //first button disappears
        yesBtn.addEventListener("click", function () {
            alert("It's a match!");
        });
    }
}

generateInitialAnimal.addEventListener("click", giveSpiritAnimal);
generateInitialAnimal.addEventListener("click", showNewBtns);

userName.oninput = function () {
    inputFunction()
};
userName.onkeydown = function () {
    keyDownFunction()
};

//optional: possibility to select when the spirit animal should be created
function selectorFunction() {
    return document.querySelector("#select-when-show-animal").value;
}

function timingChange() {
    const selector = selectorFunction();
    if (selector == "text") {
        inputFunction();
    } else if (selector == "input") {
        keyDownFunction();
    } else {
        generateInitialAnimal.addEventListener("click", giveSpiritAnimal);
        noBtn.addEventListener("click", giveSpiritAnimal);
        userName.removeEventListener("keydown", giveSpiritAnimal);
        userName.removeEventListener("input", giveSpiritAnimal);
    }
}

function inputFunction() {
    const selector = selectorFunction();
    if (selector == "text") {
        userName.addEventListener("input", giveSpiritAnimal); //when text is written
        noBtn.removeEventListener("click", giveSpiritAnimal);
    } else {
        timingChange();
    }
}

function keyDownFunction() {
    const selector = selectorFunction();
    if (selector == "input") {
        userName.addEventListener("keydown", giveSpiritAnimal);
        noBtn.removeEventListener("click", giveSpiritAnimal);
    } else {
        timingChange();
    }
}