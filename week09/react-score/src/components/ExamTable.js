import {Table, Button} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import ExamForm from './ExamForm';

function ExamTable(props) {
  const [showForm, setShowForm] = useState(false);
  const [editableExam, setEditableExam] = useState();

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
              deleteExam={props.deleteExam} setShowForm={setShowForm} setEditableExam={setEditableExam}
            />)
          }
        </tbody>
      </Table>
      
      {showForm ? <ExamForm key={editableExam ? editableExam.code : '0'} exam={editableExam} addExam={(exam) => {props.addExam(exam); setShowForm(false);}} editExam={(exam) => {props.editExam(exam); setShowForm(false);}} cancel={() => setShowForm(false)} /> :
      <Button variant='success' onClick={() => {setShowForm(true); setEditableExam();}}>Add</Button> }
    </>
  );
}

function ExamRow(props) {
  return(
    <tr>
      <ExamData exam={props.exam}/>
      <ExamActions setShowForm={props.setShowForm} setEditableExam={props.setEditableExam} deleteExam={props.deleteExam} exam={props.exam}/>
    </tr>
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
  return <td>
    <Button variant="primary" onClick={() => {props.setShowForm(true); props.setEditableExam(props.exam);}}><i className='bi bi-pencil-square'></i></Button>&nbsp;
    <Button variant='danger' onClick={() => {props.deleteExam(props.exam.code)}}><i className='bi bi-trash3'></i></Button>
  </td>
}

export default ExamTable;