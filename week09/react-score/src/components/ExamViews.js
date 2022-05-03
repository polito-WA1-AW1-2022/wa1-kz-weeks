import {Container, Row, Col} from 'react-bootstrap';

import ExamTable from './ExamTable';
import ExamForm from './ExamForm';

function DefaultRoute() {
  return(
    <Container className='App'>
      <h1>No data here...</h1>
      <h2>This is not the route you are looking for!</h2>
    </Container>
  );
}

function ExamRoute(props) {
  return(
    <Container className='App'>
      <Row>
        <Col>
          <h1>My Exams ({props.exams.length})</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ExamTable exams={props.exams} deleteExam={props.deleteExam} />
        </Col>
      </Row>
    </Container>
  );
}

function FormRoute(props) {
  return(
    <Container className='App'>
      <Row>
        <Col>
          <h1>Enter exam data</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ExamForm exams={props.exams} addExam={props.addExam} />
        </Col>
      </Row>
    </Container>
  );
}

export { ExamRoute, FormRoute, DefaultRoute };