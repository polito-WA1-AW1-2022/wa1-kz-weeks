import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import dayjs from 'dayjs';
import ExamTable from './components/ExamTable';
import { useState } from 'react';

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

  return (
    <Container className='App'>
      <Row>
        <Col>
          <h1>My Exams ({exams.length})</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ExamTable exams={exams} deleteExam={deleteExam} addExam={addExam}></ExamTable>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
