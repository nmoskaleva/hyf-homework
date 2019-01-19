//1. Create an array with 3 items. All items should be functions. Go through the array and call them.
let functionsArr = [function One() {
        console.log("first function")
    }, function Two() {
        console.log("second function")
    },
    function Three() {
        console.log("third function")
    }
];
for (let i = 0; i < functionsArr.length; i++) {
    functionsArr[i]();
}

//2. Create a function as a const and try creating a function normally. Call both function.
const funConst = function () {
    console.log("I am a constant")
};

function justFunction() {
    console.log("I am a function")
}
funConst();
justFunction();

// 3. Create an object that has a key whose value is a function. Try calling this function.
let keyOne = function () {
    console.log("I am a function and a key")
};
let objectWithFunction = {
    one: keyOne()
}
keyOne();

//4.Create two setTimeouts one uses a function that is defined as a const. The other uses an anonomous function that is defined inside the setTimeout.
const forSetTimeout = function () {
    console.log("hi")
}

setTimeout(function () {
    alert("Hello");
}, 500);
setTimeout(forSetTimeout, 1000);

//5. Create a function (outer) that returns a function (inner). Call the outer function and assign the return to a variable. 
//Now call this variable (that is the inner function)

let varForFunction = function () {
    let innerFunction = function () {
        console.log("Hello from the inner function")
    };
    return innerFunction();
}

varForFunction();