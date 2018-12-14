//Function that returns an empty object
function emptyObject() {
    let object = {};
    object.time = 12; //Inside the function, add a key to the object called time with the value of the number 12
    return object;
}
//Create a new variable called timeObject and assign it to the result of calling the previous function.
let timeObject = emptyObject();

console.log(timeObject);


//***Color function

//Create a function that returns an array with with 3 empty objects.
function colorFunc(color1, color2, color3){ //Give the function 3 parameters called color1, color2 and color3.
    let myArray = [{color: color1}, {color: color2}, {color: color3}]; //change the array so that all the objects have one key called color. 
//For every object in the array log out the color of the object. 
    for(let i = 0; i < myArray.length; i++){ //For every object in the array log out the color of the object. 
     console.log(myArray[i].color);}
    return myArray;
}

let colorObjects = colorFunc("red", "pink", "black"); //Call the function and assign to the variable colorObjects
console.log(colorObjects);
