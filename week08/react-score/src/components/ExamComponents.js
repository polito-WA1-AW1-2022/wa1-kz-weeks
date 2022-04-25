import {Col, Table, Button, Form} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import dayjs from 'dayjs';

function ExamScores(props) {
  return(
    <Col>
      <ExamTable exams={props.exams} deleteExam={props.deleteExam} addExam={props.addExam}></ExamTable>
    </Col>
  );
}

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

function ExamForm(props) {
  const [code, setCode] = useState('');
  const [course, setCourse] = useState('');
  const [score, setScore] = useState(30);
  const [date, setDate] = useState(dayjs());

  return(
    <Form>
      <Form.Group>
        <Form.Label>Course Code</Form.Label>
        <Form.Control type="text" value={code} onChange={event => setCode(event.target.value)}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Course Name</Form.Label>
        <Form.Control type="text" value={course} onChange={event => setCourse(event.target.value)}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Score</Form.Label>
        <Form.Control type="number" value={score} onChange={event => setScore(event.target.value)}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={date.format('YYYY-MM-DD')} onChange={event => setDate(event.target.value)}/>
      </Form.Group>

      <Button type="submit">Save</Button>

    </Form>
  )
}

export default ExamScores;