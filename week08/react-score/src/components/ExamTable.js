import {Table, Button} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import ExamForm from './ExamForm';

function ExamTable(props) {
  const [showForm, setShowForm] = useState(false);

  return(<>
      <Table striped>
        <thead>
          <tr>
            <th>Code</th>
            <th>Exam</th>
            <th>Score</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.exams.map((ex) => <ExamRow exam={ex} key={ex.code}
              deleteExam={props.deleteExam}
            />)
          }
        </tbody>
      </Table>
      
      {showForm ? <ExamForm addExam={props.addExam}/> :
      <Button variant='success' onClick={() => setShowForm(true)}>Add</Button> }
    </>
  );
}

function ExamRow(props) {
  return(
    <tr><ExamData exam={props.exam}/><ExamActions deleteExam={props.deleteExam} exam={props.exam}/></tr>
  );
}

function ExamData(props) {
  return(
    <>
      <td>{props.exam.code}</td>
      <td>{props.exam.name}</td>
      <td>{props.exam.score}</td>
      <td>{props.exam.date.format('YYYY-MM-DD')}</td>
    </>
  );
}

function ExamActions(props) {
  return <td><Button variant='danger' onClick={() => {props.deleteExam(props.exam.code)}}><i className='bi bi-trash3'></i></Button></td>
}

export default ExamTable;