'use strict';

function Exam(code, name, credits, date, score, laude=false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = dayjs(date);
  this.score = score;
  this.laude = laude;
}

function ExamList() {
  this.list = [];

  this.init = () => {
    this.list.push(
      new Exam('02GOL', 'Computer Architecture', 10, '2022-02-01', 21),
      new Exam('01SQM', 'Data Science and Database Technology', 8, '2022-02-15', 30, true),
      new Exam('02KPN', 'Computer Network Technologies and Services', 6, '2022-02-06', 26),
    );
  };

  this.getAll = () => {
    return this.list;
  }
}

// STRING LITERAL WAY
/*function createExamRow(exam) {
  return `<tr>
    <td>${exam.date.format('YYYY-MM-DD')}</td>
    <td>${exam.name}</td>
    <td>${exam.credits}</td>
    <td>${exam.score} ${(exam.laude ? 'L' : '')}</td>
    <td><button class="btn btn-danger">X</button></td>
  </tr>`;
}*/

// CLASSIC WAY: creating the single elements
function createExamRow(exam) {
  const tr = document.createElement('tr');

  const tdDate = document.createElement('td');
  tdDate.innerText = exam.date.format('YYYY-MM-DD');
  tr.appendChild(tdDate);

  const tdName = document.createElement('td');
  tdName.innerText = exam.name;
  tr.appendChild(tdName);

  const tdCredits = document.createElement('td');
  tdCredits.innerText = exam.credits;
  tr.appendChild(tdCredits); 
  
  const tdScore = document.createElement('td');
  tdScore.innerText = exam.score + (exam.laude ? 'L' : '');
  tr.appendChild(tdScore);

  const tdActions = document.createElement('td');
  tdActions.innerHTML = `<button id="exam-${exam.code}" class="btn btn-danger">X</button>`;
  tr.appendChild(tdActions);

  tdActions.addEventListener('click', e => {
    tr.remove();
    console.log(e.target.id);
  });

  return tr;
}

function fillExamTable(exams) {
  const examTable = document.getElementById('exam-table');
  //alternative: const examTable = document.querySelector('#exam-table');
  for(const exam of exams) {
    // create tr etc. the selected exam
    const examEl = createExamRow(exam);
    // add the tr to the table
    // classic way:
    examTable.prepend(examEl);
    // string literal way:
    //examTable.insertAdjacentHTML('afterbegin', examEl);
  }
}

/* Main */
const examList = new ExamList();
examList.init();
const exams = examList.getAll();
fillExamTable(exams);