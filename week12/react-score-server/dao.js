'use strict';
/* Data Access Object (DAO) module for accessing exams */

const sqlite = require('sqlite3');
const { Exam } = require('./Exam');

const db = new sqlite.Database('exams.sqlite', err => { if (err) throw err;});

// get all exams
exports.listExams = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM course JOIN score ON course.code = score.coursecode';
    db.all(sql, [], (err, rows) => {
      if(err)
        reject(err);
      else {
        const exams = rows.map(row => new Exam(row.code, row.name, row.CFU, row.datepassed, row.score, (row.laude ? true : false)));
        resolve(exams);
      }
    });
  });
};

// add a new exam
exports.addExam = (exam) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO score(coursecode, score, laude, datepassed) VALUES(?, ?, ?, DATE(?))';
    db.run(sql, [exam.code, exam.score, exam.laude, exam.date], function(err) {
      if(err) reject(err);
      else resolve(this.lastID);
    });
  });
};

// update an existing exam
exports.updateExam = (exam) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE score SET score=?, laude=?, datepassed=DATE(?) WHERE coursecode=?';
    db.run(sql, [exam.score, exam.laude, exam.date, exam.code], function(err) {
      if(err) reject(err);
      else resolve(this.lastID);
    });
  });
};

// delete an existing exam
exports.deleteExam = (courseCode) => {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM score WHERE coursecode=?';
    db.run(sql, [courseCode], (err) => {
      if (err) reject(err);
      else resolve(null);
    });
  });
};