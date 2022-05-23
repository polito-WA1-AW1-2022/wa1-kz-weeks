import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ExamRoute, FormRoute, EditRoute, DefaultRoute } from './components/ExamViews';

import API from './API';

function App() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const getExams = async() => {
      const exams = await API.getAllExams();
      setExams(exams);
    };
    getExams();
  }, []);

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
        <Route path="/edit" element={ /* if there is no location.state we can add a new exam */
          <EditRoute editExam={updateExam} addExam={addExam} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
