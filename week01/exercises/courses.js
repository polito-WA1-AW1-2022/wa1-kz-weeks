'use strict';

const courseNames = `Web Applications I, Computer Architectures,
Data Science and Database Technology,
Computer network technologies and services, Information systems security,
Software engineering, System and device programming`;
// If you use `` instead of '', you can have multi-line strings, with newlines: then, you need to handle newlines with, e.g., replace() -- see below

// join multi-line string
const modif = courseNames.replace(/\n/g, ' ');

// create the courses array
const courses = modif.split(',');

// clean whitespace around commas
for (let i = 0; i < courses.length; i++) {
    courses[i] = courses[i].trim();
}

// ALTERNATIVE
/*
for(let [i, c]  of courses.entries())
  courses[i] = c.trim() ;
*/

// create acronyms
const acronyms = [];
for(const c of courses) {
  // each word in an array position
  const words = c.split(' ');
  let acronym = '';
  // make the first letter of each word uppercase and store it
  for(let w of words) {
    acronym += w[0].toUpperCase();
  }
  // store the acronym in the array
  acronyms.push(acronym);
}

// print each acronym + course name
const output = [];
for (let i = 0; i < courses.length; i++) {
  console.log(`${acronyms[i]} - ${courses[i]}`);
}

