"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films?', '');
        }
    },
    rememberMyfilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("bad");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("norm");
        } else if (personalMovieDB.count >= 30) {
            console.log("cool");
        } else {
            console.log("error");
        }
      },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
      },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Favourite genre ${i}`);

            if (genre === '' || genre == null) {
                console.log('Incorrect data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
                // можна декілька жанрів через кому через метод .split
            }
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Favourite genre ${i+1} is ${item}`);
        });
      }
    };
        //personalMovieDB.movies.a = b;  - неправильно запишуться дані
        //detectPersonalLevel();