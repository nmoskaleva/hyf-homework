// functions to use as callbacks
function divisblebyThree() {
    console.log("threeCallback");
}

function divisibleByFive() {
    console.log(`fivecallback`);
}

// function with 4 arguments
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    let numbers = [];
    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        if (numbers[i] % 3 == 0) {
            threeCallback();
        }
        if (numbers[i] % 5 == 0) {
            fiveCallback();
        }
    }
}

threeFive(8, 10, divisblebyThree, divisibleByFive);

// threeFive(9, 10, () => {

// }, () => {

// });