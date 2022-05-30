import 'bootstrap-icons/font/bootstrap-icons.css';
import { Table } from 'react-bootstrap';

function ExamTable(props) {
  return(<>
      <Table striped>
        <thead>
          <tr>
            <th>Code</th>
            <th>Exam</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            props.exams.map((ex) => 
              <ExamRow exam={ex} key={ex.code} deleteExam={props.deleteExam}/>)
          }
        </tbody>
      </Table>
    </>
  );
}

function ExamRow(props) {
  let statusClass = null;

  switch(props.exam.status) {
    case 'added':
      statusClass = 'table-success';
      break;
    case 'edited':
      statusClass = 'table-warning';
      break;
    case 'deleted':
      statusClass = 'table-danger';
      break;
    default:
      break;
  }

  return(
    <tr className={statusClass}>
      <ExamData exam={props.exam}/>
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

export default ExamTable;