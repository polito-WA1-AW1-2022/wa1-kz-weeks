import {Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import dayjs from 'dayjs';

function ExamForm(props) {
  const [code, setCode] = useState(props.exam ? props.exam.code : '');
  const [course, setCourse] = useState(props.exam ? props.exam.name : '');
  const [score, setScore] = useState(props.exam ? props.exam.score : 30);
  const [date, setDate] = useState(props.exam ? props.exam.date : dayjs());

  const handleSubmit = (event) => {
    event.preventDefault();
    const exam = {code: code, name: course, score: score, date: dayjs(date)};
    // VALIDATION!
    if(props.exam === undefined)
      props.addExam(exam);
    else
      props.editExam(exam);
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Course Code</Form.Label>
        <Form.Control type="text" required={true} minLength={5} maxLength={7} value={code} onChange={event => setCode(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Course Name</Form.Label>
        <Form.Control type="text" required={true} value={course} onChange={event => setCourse(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Score</Form.Label>
        <Form.Control type="number" min={18} max={31} value={score} onChange={event => setScore(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={date.format('YYYY-MM-DD')} onChange={event => setDate(event.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">Save</Button> <Button variant="danger" onClick={props.cancel}>Cancel</Button>
      
    </Form>
  )
}

export default ExamForm;