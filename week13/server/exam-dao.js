'use strict';
/* Data Access Object (DAO) module for accessing exams */

const { db } = require('./db');
const { Exam } = require('./Exam');

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