import {Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import dayjs from 'dayjs';

function ExamForm(props) {
  const [code, setCode] = useState('');
  const [course, setCourse] = useState('');
  const [score, setScore] = useState(30);
  const [date, setDate] = useState(dayjs());

  return(
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Course Code</Form.Label>
        <Form.Control type="text" value={code} onChange={event => setCode(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Course Name</Form.Label>
        <Form.Control type="text" value={course} onChange={event => setCourse(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Score</Form.Label>
        <Form.Control type="number" value={score} onChange={event => setScore(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={date.format('YYYY-MM-DD')} onChange={event => setDate(event.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">Save</Button>
      
    </Form>
  )
}

export default ExamForm;