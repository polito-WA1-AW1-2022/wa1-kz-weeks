import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Container, Row, Alert } from 'react-bootstrap';
import { ExamRoute, DefaultRoute } from './components/ExamViews';

import API from './API';

function App() {
  const [exams, setExams] = useState([]);
  const [message, setMessage] = useState('');

  const getExams = async() => {
    const exams = await API.getAllExams();
    setExams(exams);
    // this message is not particularly useful here
    setMessage({msg: 'Loading complete!', type: 'success'});
  };


  useEffect(() => {
    getExams();
  }, []);


  return (
    <Container className='App'>
      {message && <Row>
        <Alert variant={message.type} onClose={() => setMessage('')} dismissible>{message.msg}</Alert>
      </Row> }
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ExamRoute exams={exams} /> } />
          <Route path='*' element={ <DefaultRoute/> } />
        </Routes>
      </BrowserRouter>
    </Container>
    
  );
}

export default App;
