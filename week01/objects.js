'use strict';

const movie = {
  title: 'Avatar',
  genre: 'Sci-fi',
  duration: 300000000
}

console.log(movie.title);
console.log(movie['title']);

movie.director = 'Cameron';
//movie['director'] = 'Cameron';

delete movie.director;

for (const prop in movie) {
  console.log(`${prop} is ${movie[prop]}`);
}

const sameMovie = Object.assign({}, movie);
console.log(sameMovie);

Object.assign(movie, {budget: '10k'});
console.log(movie);

const avatarAgain = {... movie};
console.log(avatarAgain);