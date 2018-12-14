//Adding an activity

let activities = [];

// Create a function called addActivity with 3 parameters
function addActivity(date, activity, duration){
activities.push({date: date, activity: activity, duration: duration});
return activities;
}

addActivity("14/12/2018", "Facebook", 30);
addActivity("14/12/2018", "News", 120);
console.log(activities);

//Show my status
function showStatus(){
    let usageLimitMin = 60; //Usage limit
    let calcDuration = 0;
    for (let j = 0; j < activities.length; j++){
        calcDuration += activities[j].duration;
    };
    for(let i = 0; i < activities.length; i++){
    };
    if(calcDuration >= usageLimitMin){ //Usage limit with if/else
        console.log("You have reached your limit, no more smartphoning for you!");
    }
    else{
        console.log("Go on");
    }
    for (let x = 0; x < activities.length; x++){  //Extra feature: too much
        if (activities[x].duration > 30){
            console.log(activities[x].duration + " minutes" + " was way too much for a singe " + activities[x].activity + " session.");
        }
    }
    return "You have added " + activities.length + " activities. They amount to " + calcDuration + " min. of usage."
};

console.log(showStatus(activities));







