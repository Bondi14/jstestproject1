let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

        //personalMovieDB.movies.a = b;  - неправильно запишуться дані

function rememberMyfilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last film?', ''),
              b = prompt('rate?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

//rememberMyfilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("bad");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("norm");
    } else if (personalMovieDB.count >= 30) {
        console.log("cool");
    } else {
        console.log("error");
    }
}

//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Favourite genre ${i}`);
   }
}

writeYourGenres();