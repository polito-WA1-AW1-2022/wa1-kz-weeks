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

const API = { getAllExams };
export default API;