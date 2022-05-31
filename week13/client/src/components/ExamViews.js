import { Row, Col } from 'react-bootstrap';

import ExamTable from './ExamTable';
import { LoginForm } from './AuthComponents';

function DefaultRoute() {
  return(
    <>
      <Row>
        <Col>
          <h1>Nothing here...</h1>
          <p>This is not the route you are looking for!</p>
        </Col>
      </Row>
    </>
  );
}

function ExamRoute(props) {
  return(
    <>
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
    </>
  );
}

function LoginRoute(props) {
  return(
    <>
      <Row>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <LoginForm login={props.login} />
        </Col>
      </Row>
    </>
  );
}

export { ExamRoute, DefaultRoute, LoginRoute };