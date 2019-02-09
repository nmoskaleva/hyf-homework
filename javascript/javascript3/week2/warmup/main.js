//this is homework
//1 Warmup
function firstFunction(millisecondsToResolve) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            //console.log(`I am called asynchronously`);
        }, millisecondsToResolve);
    })
}

firstFunction(6000);

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
        //array of long movies
        let longMovies = movies.filter(movies => movies.running_times > 7000);
        console.log(longMovies)
        let longMovieTitles = longMovies.map(movie => movie.title);
        console.log(longMovieTitles)
    });
    
fetchMovies()
    .then((result) => {   
            //array of bad movies    
            let badMovies = result.filter(movie => movie.rating < 6);
            console.log(badMovies);
            let badMoviesSince2000 = result.filter(movie => movie.year > 1999);
            console.log(badMoviesSince2000);
            let badMoviesSince2000Titles = badMoviesSince2000.map(movie => movie.title);
            console.log(badMoviesSince2000Titles);      
    })


//Fetching and waiting
fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`)
.then(response => response.json())
.then(movies => {
    setTimeout(() => {
        console.log(movies);
    }, 3000);
})// is it using chaining?


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
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude, position.coords.longitude);
            resolve(position)
        });
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