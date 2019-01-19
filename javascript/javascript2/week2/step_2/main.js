//Add a button (e.g. 'click me') that when clicked console.logs 'you clicked me!'
let button = document.querySelector(".btnOne");
//button.onclick = () => (console.log("You clicked me!"));

//When the button is clicked, get the number from the input element
function getInputValue() {
    return document.querySelector("input").value;
}

function threeCallback(){
    document.body.style.background = "blue";
}

function fiveCallback() {
    document.body.style.background = "yellow";
}

//changing background
function changeBackground() {
    const inputValue = getInputValue();
    if (inputValue != "") {
        if (inputValue % 3 == 0) {
            threeCallback();
        }
        else if (inputValue % 5 == 0) {
            fiveCallback();
        }
        else {
            console.log(inputValue);
        }
    } else {
        alert("Please enter a number")
    }
}

button.addEventListener("click", changeBackground);