import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

function ExamForm(props) {
  const navigate = useNavigate();

  /* If we have an examCode in the URL, we retrieve the exam to edit from the list.
     In a full-stack application, starting from the examCode, 
     we could query the back-end to retrieve all the exam data (updated to last value). */
  const {examCode} = useParams();
  const editableExam = examCode && props.exams.find(ex => ex.code === examCode);

  // If the exam exists we configure the form, otherwise we use default values.
  const [code, setCode] = useState(editableExam ? editableExam.code : '');
  const [course, setCourse] = useState(editableExam ? editableExam.name : '');
  const [score, setScore] = useState(editableExam ? editableExam.score : 30);
  const [date, setDate] = useState(editableExam ? editableExam.date : dayjs());

  const handleSubmit = (event) => {
    event.preventDefault();
    const exam = {code: code, name: course, score: score, date: dayjs(date)};
    
    /* In this example data validation is executed through HTML5 validation attributes.
       If you want to use JavaScript validations, this could be the right place for coding them! */

    if(editableExam === undefined)
      props.addExam(exam);
    else
      props.editExam(exam);
    
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

      <Button variant="primary" type="submit">Save</Button>
      &nbsp; { /* Adding a blank space between the two buttons */ }
      <Link to='/'>
        <Button variant="danger">Cancel</Button>
      </Link>
      
    </Form>
  )
}

export default ExamForm;