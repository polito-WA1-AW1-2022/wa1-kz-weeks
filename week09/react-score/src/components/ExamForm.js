import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

function ExamForm(props) {
  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [course, setCourse] = useState('');
  const [score, setScore] = useState(30);
  const [date, setDate] = useState(dayjs());

  const handleSubmit = (event) => {
    event.preventDefault();
    const exam = {code: code, name: course, score: score, date: dayjs(date)};
    
    /* In this example data validation is executed through HTML5 validation attributes.
       If you want to use JavaScript validations, this could be the right place for coding them! */

    props.addExam(exam);
    navigate('/');
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
        <Form.Control type="date" value={date.format('YYYY-MM-DD')} onChange={event => setDate(dayjs(event.target.value))}/>
      </Form.Group>

      <Button variant="primary" type="submit">Save</Button> &nbsp;
      <Link to='/'>
        <Button variant="danger">Cancel</Button>
      </Link>
      
    </Form>
  )
}

export default ExamForm;