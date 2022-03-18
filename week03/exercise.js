'use strict';

const dayjs = require('dayjs');
const sqlite = require('sqlite3');

function Exam(code, name, credits, date, score, laude = false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = dayjs(date);
  this.score = score;
  this.laude = laude;

  this.toString = () => `${this.code} - ${this.name}: ${laude ? this.score + 'L' : this.score}`;
}

function ExamList() {
  const db = new sqlite.Database('exams.sqlite', err => { if (err) throw err;});

  // add
  this.add = (exam) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO score(coursecode, score, laude, datepassed) VALUES(?, ?, ?, DATE(?))';
      db.run(sql, [exam.code, exam.score, exam.laude, exam.date.format('YYYY-MM-DD')], function(err) {
        if(err) reject(err);
        else resolve(this.lastID);
      });
    });
  };

  // getAll
  this.getAll = () => {
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

  // find -- DEVELOPED OUTSIDE THE CLASS
  this.find = (code) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM course JOIN score ON course.code=score.coursecode WHERE score.coursecode=?';
      db.get(sql, [code], (err, row) => {
        if (err)
          reject(err);
        else
          resolve(new Exam(row.code, row.name, row.CFU, row.datepassed, row.score, (row.laude ? true : false)))
      });
    });
  };

  // afterDate -- DEVELOPED OUTSIDE THE CLASS
  this.afterDate = (date) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM course JOIN score ON course.code=score.coursecode WHERE score.datepassed > ?' ;
      db.all(sql, [date], (err, rows) => {
        if(err)
          reject(err);
        else {
          const exams = rows.map(row => new Exam(row.code, row.name, row.CFU, row.datepassed, row.score, (row.laude ? true : false)));
          resolve(exams);
        }
      });
    });
  };

  /* afterDate -- ALTERNATIVE
  this.afterDate = async (date) => {
    const exams = await this.getAll();
    return exams.filter(course => course.date.isAfter(date));
  }; */

  // getWorst -- DEVELOPED OUTSIDE THE CLASS
  this.getWorst = async (num) => {
    const exams = await this.getAll();
    return exams.sort((a,b) => a.score - b.score).splice(0, num);
  };
}


/* TESTING */
async function main() {
  const examDb = new ExamList();

  const wa1 = new Exam('01TXYOV', 'Web Application I', 6, '2022-06-07', 30, true);
  const softeng = new Exam('04GSPOV', 'Software Engineering I', 6, '2022-07-02', 28);

  //const id = await examDb.add(wa1);
  //console.log(id);

  const myExams = await examDb.getAll();
  console.log(`All exams: ${myExams}`);

  const found = await examDb.find('01TXYOV');
  console.log(`01TXYOV? ${found}`);

  const recentExams = await examDb.afterDate('2022-03-16');
  console.log(`Recent exams: ${recentExams}`);

  const worstTwo = await examDb.getWorst(2);
  console.log(`Worst two exams: ${worstTwo}`);
}

main();