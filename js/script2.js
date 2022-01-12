const numberOfFilms = +prompt('How many films?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt('Last film?', ''),
        b = prompt('rate?', ''),
        c = prompt('Last film?', ''),
        d = prompt('rate?', '');

        //personalMovieDB.movies.a = b;  - неправильно запишуться дані
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

