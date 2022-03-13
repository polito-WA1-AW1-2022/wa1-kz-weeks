'use strict';

const dayjs = require('dayjs');

function Exam(code, name, credits, date, score, laude = false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = date;
  this.score = score;
  this.laude = laude;

  this.toString = () => `${this.code} - ${this.name}: ${this.score}`;
}

function ExamList() {

  // add
  this.add = (exam) => {
    // write something clever
  };

  // getAll
  this.getAll = () => {
    // write something clever
  };

  // find
  this.find = (code) => {
    // write something clever
  }

  // afterDate
  this.afterDate = (date) => {
    // write something clever
  }

  //getWorst
  this.getWorst = (num) => {
    // write something clever
  };
}


/* TESTING */
const wa1 = new Exam('01TXYOV', 'Web Application I', 6, dayjs('2022-06-07'), 30, true);
const softeng = new Exam('01xxx', 'Software Engineering I', 6, dayjs('2022-07-02'), 28);

const exams = new ExamList();
exams.add(wa1);