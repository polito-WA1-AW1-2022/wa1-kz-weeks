import Exam from './Exam';

const SERVER_URL = 'http://localhost:3001';

const getAllExams = async () => {
  const response = await fetch(SERVER_URL + '/api/exams');
  const examsJson = await response.json();
  if(response.ok) {
    return examsJson.map(ex => new Exam(ex.code, ex.name, ex.credits, ex.date, (ex.laude ? ex.score + 'L' : ex.score)));
  }
  else
    throw examsJson;
};

const addExam = async (exam) => {
  // handling the laude
  if(exam.score === 31) {
    exam.score = 30;
    exam.laude = true;
  }
  else exam.laude = false;

  const response = await fetch(SERVER_URL + '/api/exams', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ code: exam.code, score: exam.score, laude: exam.laude, date:exam.date.format('YYYY-MM-DD') })
  });

  if(!response.ok){
    const errMessage = await response.json();
    throw errMessage;
  }
  else return null;
  // add other error handling
}

const deleteExam = async (courseCode) => {
  try {
    const response = await fetch(`${SERVER_URL}/api/exams/${courseCode}`, {
      method: 'DELETE'
    });
    if(response.ok)
      return null;
    else {
      const errMessage = await response.json();
      throw errMessage;
    }
  } catch(err){
    throw new Error('Cannot communicate with the server');
    // and/or we can get some info from the 'err' object
  }
}

const API = {getAllExams, addExam, deleteExam};
export default API;