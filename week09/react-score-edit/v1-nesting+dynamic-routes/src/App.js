import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import dayjs from 'dayjs';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ExamRoute, FormRoute, EditRoute, DefaultRoute } from './components/ExamViews';
import ExamForm from './components/ExamForm';

const fakeExams = [
  {code: '01TYMOV', name: 'Information systems security', score: 30, date: dayjs('2022-02-01')},
  {code: '01SQJOV', name: 'Data Science and Database Technology', score: 21, date: dayjs('2021-06-15')},
  {code: '04GSPOV', name: 'Software Engineering', score: 26, date: dayjs('2022-06-04')}
];

function App() {
  const [exams, setExams] = useState(fakeExams);

  const deleteExam = (courseCode) => {
    setExams((exs) => exs.filter(ex => ex.code !== courseCode));
  }

  const addExam = (exam) => {
    setExams(oldExams => [...oldExams, exam]);
  }

  const updateExam = (exam) => {
    setExams(oldExams => {
      return oldExams.map(ex => {
        if(exam.code === ex.code)
          return {code: exam.code, name: exam.name, score: exam.score, date: exam.date};
        else
          return ex;
      });
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ExamRoute exams={exams} deleteExam={deleteExam}/> } />
        <Route path='*' element={ <DefaultRoute/> } />
        <Route path="/add" element={ <FormRoute addExam={addExam} /> } />
        <Route path="/edit" element={ <EditRoute editExam={updateExam} /> } >
          <Route index element={<h2>Please, specify an exam code in the URL!</h2>} />
          <Route path=":examCode" element={
            <ExamForm exams={exams} deleteExam={deleteExam} editExam={updateExam} 
              addExam={addExam} /* if the examCode does not exist we add a new exam */ /> 
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
