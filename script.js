/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как str.length - и получить ее длину).

3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt("'Сколько фильмов вы уже посмотрели?'", "10");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 1; i <= 2; i++) {
    let film = prompt('Один из последних просмотренных фильмов?', 'Logan'),
        rating = prompt('На сколько оцените его?', '8.1');
    if ((film && rating != '') && (film && rating != null) && (film.length <= 50)) {
        personalMovieDB.movies[film] = rating;
        console.log('Done');
    } else {
        i--;
        console.log('Error');
    }
}
console.log(personalMovieDB);



if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель!');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка!');
}