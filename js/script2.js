const numberOfFilms = +prompt('How many films?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

        //personalMovieDB.movies.a = b;  - неправильно запишуться дані

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

if (personalMovieDB.count < 10) {
    console.log("bad");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("norm");
} else if (personalMovieDB.count >= 30) {
    console.log("cool");
} else {
    console.log("error");
}

console.log(personalMovieDB);

