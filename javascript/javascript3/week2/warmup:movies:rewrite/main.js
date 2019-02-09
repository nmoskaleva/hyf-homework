// // // // fetch(`https://yesno.wtf/api`)
// // // // .then(response => response.json())
// // // // .then((result) => {
// // // //     console.log(result.answer);
// // // // })


// // // ///battery

// // // let batteryPromise = navigator.getBattery();

// // // let batteryIsCharging = false;

// // // navigator.getBattery().then(function(battery) {
// // //   batteryIsCharging = battery.charging;
// // //   console.log(batteryIsCharging);
// // //   console.log(battery.level * 100);
// // //   console.log(battery);
// // // });

// // // // //Create a promise that resolves with a message after 4 seconds. Use this promise by logging out 'hello' after 4 seconds
// // // // let fourSecondsPromise = new Promise(function(resolve){
// // // //     setTimeout(function(){
// // // //         resolve("hello");
// // // //     }, 4000);
// // // // });

// // // // fourSecondsPromise.then(function(message){
// // // //     console.log(message);
// // // // });

// // // // let twoSecondsPromise = new Promise((resolve) => {
// // // //     setTimeout(() => resolve(alert("hello")), 2000
// // // //     );
// // // // })

// // // // twoSecondsPromise.then(function(){

// // // // });

// // // ///Excercise 4
// // // //4.1 Get battery level
// // // navigator.getBattery().then(function(battery){
// // //     console.log(battery.level * 100 + "%") ;
// // // })
// // // //4.2 After the battery level has been gotten, fetch the movies
// // // .then(() => {
// // //     return fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`)
// // // })

// // // //4.3 Log out the movies
// // // .then((response) => response.json())
// // // .then((result) => console.log(result));



// // //4
// // // let promiseOne = navigator.getBattery();
// // // let promiseTwo = fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`);

// // // Promise.all([promiseOne, promiseTwo]).then((data) => {console.log(data[1].json.then((movie) => {console.log(movie.type)}))})


// // // //****//
// // // applyForVisa() //it's a promise
// // // .then(bookHotel)
// // // .then(buyTickets)
// // // .catch(cancelVacation);

// // // applyForVisa()
// // // .then(bookHotel, cancelVacation);

// // //this is homework
// // //1 Warmup
// // function firstFunction(millisecondsToResolve) {
// //     return new Promise(function (resolve) {
// //         setTimeout(() => {
// //             //console.log(`I am called asynchronously`);
// //         }, millisecondsToResolve);
// //     })
// // }

// firstFunction(6000);

//2. Movies
//without chaining
// fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`)
// .then(response => response.json())
// .then((movies) => {
//     console.log(movies);
//     //array of long movies
//     let longMovies = movies.filter(movies => movies.running_times > 7000);
//     console.log(longMovies);
//     //array of long movie titles
//     let longMovieTitles = longMovies.map(movie => movie.title);
//     console.log(longMovieTitles);
//     //array of bad movies
//     let badMovies = movies.filter(movie => movie.rating < 6);
//     console.log(badMovies);
//     //bad movies since 2000
//     let badMoviesSince2000 = badMovies.filter(movie => movie.year > 1999);
//     console.log(badMoviesSince2000);
//     //bad movies since 2000 titles
//     let badMoviesSince2000Titles = badMoviesSince2000.map(movie => movie.title);
//     console.log(badMoviesSince2000Titles);
// });

//2. Movies with chaining (but not entire chain)
let fetchMovies = function () {
    return new Promise((resolve) => {
        resolve(
            fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`)
            .then(response => response.json()))
    })
}
fetchMovies()
    .then((movies) => {
        console.log(movies);
        return new Promise((resolve) => {
            //array of long movies
            let longMovies = movies.filter(movies => movies.running_times > 7000);
            resolve(longMovies);
        })
    })
    .then(result => {
        //array of long movie titles
        return new Promise((resolve) => {
            let longMovieTitles = result.map(movie => movie.title);
            console.log(longMovieTitles);
            resolve(longMovieTitles);
        })
    });

fetchMovies()
    .then((result) => {
        return new Promise((resolve) => {
            //array of bad movies    
            let badMovies = result.filter(movie => movie.rating < 6);
            console.log(badMovies);
            resolve(badMovies);
        })
    })
    .then((result) => {
        return new Promise((resolve) => {
            //bad movies since 2000
            let badMoviesSince2000 = result.filter(movie => movie.year > 1999);
            console.log(badMoviesSince2000);
            resolve(badMoviesSince2000);
        })
    })
    .then((result) => {
        //bad movies since 2000 titles
        let badMoviesSince2000Titles = result.map(movie => movie.title);
        console.log(badMoviesSince2000Titles);
    })


// //Fetching and waiting
// fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`)
// .then(response => response.json())
// .then(movies => {
//     setTimeout(() => {
//         console.log(movies);
//     }, 3000);
// })// is it using chaining?


//Rewrite timeout
function setTimeoutPromise(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });

//rewrite geolocation
function getCurrentLocation() {
    return new Promise(resolve => {
        resolve(navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude, position.coords.longitude);
        }));
    });
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

//*** */

const promise = new Promise((resolve) => {
    setTimeout(() => {
        const tea = {
            color: 'green',
            taste: 'Bitter',
        };

        resolve(tea);
    }, 3000);
});

const isThereMoreTea = true;

function makeTea() {
    console.log('Start making tea');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tea = {
                color: 'green',
                taste: 'Bitter',
            };

            if (isThereMoreTea) {
                resolve(tea);
            } else {
                reject('We dont have more TEA!!');
            }
        }, 3000);
    });
}

console.log(makeTea());

makeTea()
    .then((returnedTeaObject) => {
        console.log(returnedTeaObject);
    })
    .catch((error) => {
        console.log(error);
    })