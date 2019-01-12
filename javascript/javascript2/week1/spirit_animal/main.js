//create an array representing a spirit animal
const spiritAnimals = ["Leviathan", "Pink Panter", "Black Swan", "Cheesy Goat", "Hummingbird", "Alkonost", "Sirin", "Meduza Gorgona", "Pegasus", "Lobster"];

//get random animal from spiritAnimals array
const randomSpiritAnimal = function () {
    const bigDecimal = Math.random();
    const improvedNum = (bigDecimal * 10);
    const randomAnimal = Math.floor(improvedNum);
    return spiritAnimals[randomAnimal];
}

//setting variables
const firstBtn = document.querySelector("#myBtn")
let userSpiritAnimal = document.querySelector("#print_animal");

//function to assign a spirit animal
function giveSpiritAnimal() {
    const userNameValue = document.getElementById("userName").value; //get the name the user wrote in the input field.
    if (userNameValue != "") {
        userSpiritAnimal.innerHTML = userNameValue + " – " + randomSpiritAnimal();
        document.querySelector(".forUserName").appendChild(userSpiritAnimal);
    } else {
        alert("Please enter your name");
    }
}
//create functionality where a user can press a button and then get a new spirit animal.
//(creating 2 buttons for yes and no)
function showNewBtns() {
    const userNameValue = document.getElementById("userName").value;
    const newYesButton = document.querySelector("#yesBtn");
    const newNoButton = document.querySelector("#noBtn"); //button to get a new spirit animal.
    if (userNameValue != "") {
        newYesButton.className = "showMe";
        newNoButton.className = "showMe";
        firstBtn.className = "noShow"; //first button disappears
        newNoButton.addEventListener("click", giveSpiritAnimal);
        newYesButton.addEventListener("click", function () {
            alert("It's a match!");
        });
    }
}

firstBtn.addEventListener("click", giveSpiritAnimal);
firstBtn.addEventListener("click", showNewBtns);

let noBtn = document.getElementById("noBtn");
let yesBtn = document.querySelector("#yesBtn");


//optional: possibility to select when the spirit animal should be created
function timingChange() {
    const selector = document.querySelector("#selectWhenShowAnimal").value;
    if (selector == "text") {
        inputFunction();
    } else if (selector == "input") {
        keyDownFunction();
    } else {
        firstBtn.addEventListener("click", giveSpiritAnimal);
        noBtn.addEventListener("click", giveSpiritAnimal);
    }
}

function inputFunction() {
    const selector = document.querySelector("#selectWhenShowAnimal").value;
    if (selector == "text") {
        noBtn.removeEventListener("click", giveSpiritAnimal);
        document.querySelector("#userName").onchange = giveSpiritAnimal(); //when text is written
    }
}

function keyDownFunction() {
    const selector = document.querySelector("#selectWhenShowAnimal").value;
    if (selector == "input") {
        noBtn.removeEventListener("click", giveSpiritAnimal);
        document.querySelector("#userName").onchange = giveSpiritAnimal();
    }
}