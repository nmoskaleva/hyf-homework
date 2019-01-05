function intoSeconds (hours, minutes, seconds){
    let calcresult = hours * 3600 + minutes * 60 + seconds;
    return calcresult;
}

let calcresult = intoSeconds (2, 15, 40);
console.log(calcresult);