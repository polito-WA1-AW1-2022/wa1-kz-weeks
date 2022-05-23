import 'bootstrap-icons/font/bootstrap-icons.css';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ExamTable(props) {
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
            props.exams.map((ex) => 
              <ExamRow exam={ex} key={ex.code} deleteExam={props.deleteExam}/>)
          }
        </tbody>
      </Table>
      
      <Link to='/add'>
        <Button variant='success'>Add Exam</Button>
      </Link>
    </>
  );
}

function ExamRow(props) {
  return(
    <tr>
      <ExamData exam={props.exam}/>
      <ExamActions exam={props.exam} deleteExam={props.deleteExam} />
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
  return (
    <td>
      <Link to={`/edit`}
            state={{exam: props.exam, examDate: props.exam.date.format("YYYY-MM-DD")}}>
        <Button variant="primary"><i className='bi bi-pencil-square'/></Button>
      </Link>
      &nbsp; { /* adding a blank space between the two buttons */ }
      <Button variant='danger' onClick={() => {props.deleteExam(props.exam.code)}}><i className='bi bi-trash3'></i></Button>
    </td>
  );
}

export default ExamTable;