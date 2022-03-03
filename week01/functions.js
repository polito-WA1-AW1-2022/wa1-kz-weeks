'use strict';

function Movie(title, genre, duration) {
  this.title = title;
  this.genre = genre;
  this.time = duration;
  this.isLong = () => (duration > 180); // (this.time > 180) is equivalent
}

let avatar = new Movie('Avatar', 'Sci-fi', 300000);
let back2theFuture = new Movie('Back to the future', 'Sci-fi', 170);

console.log(avatar);
console.log(back2theFuture.isLong());