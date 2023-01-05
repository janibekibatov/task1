

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", '').trim(),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectionPersonLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("Wathced too much films");
        } else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
            console.log('You are good filmman');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are really good at film');
        } else {
            console.log('Wrong');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === '' || genre === null) {
            //     console.log('Вы ввелинекорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            let genres = prompt(`Введите ваши любимые жанры через запятую`);

            if (genres === '' || genres === null) {
                console.log('Вы ввелинекорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
    }

};