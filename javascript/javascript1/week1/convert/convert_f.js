function hoursIntoMinutes (hours, minutes){
    let calcresult = hours * 60 + minutes;
    return calcresult;
}

let calcresult = hoursIntoMinutes (2, 15);
console.log(calcresult);