function Day(num){
    let meetDay = num % 7;
    return meetDay;
}
let today = "Sunday";
let daysToMeet = 9;
let resultDay = Day(daysToMeet - 1); 

let weekArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

 console.log("Today is: " +  today);
 console.log("How many days to meet: " + daysToMeet);
 console.log("We are meeting on: " + weekArr[resultDay]);
