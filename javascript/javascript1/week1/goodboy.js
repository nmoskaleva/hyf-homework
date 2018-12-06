let dogYearOfBirth = 2017;
let dogYearFuture = 2030;
let dogYear = 7;
let dogAgeHumanYears = dogYearFuture - dogYearOfBirth;
let dogAgeDogYears = dogAgeHumanYears * dogYear;
let shouldShowResultInDogYears = true; 
if(shouldShowResultInDogYears === true) {
    console.log("Your dog will be " + dogAgeDogYears + " dog years old in " + dogYearFuture);
} 
else {console.log("Your dog will be " + dogAgeHumanYears + " human years old in " + dogYearFuture);
}



