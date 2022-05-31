import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Container, Row, Alert } from 'react-bootstrap';
import { ExamRoute, DefaultRoute, LoginRoute } from './components/ExamViews';
import { LogoutButton } from './components/AuthComponents';

import API from './API';

function App() {
  const [exams, setExams] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const getExams = async() => {
    const exams = await API.getAllExams();
    setExams(exams);
  };

  useEffect(() => {
    const checkAuth = async () => {
      await API.getUserInfo(); // we have the user info here
      setLoggedIn(true);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if(loggedIn)
      getExams();
  }, [loggedIn]);

  const handleLogin = async (credentials) => {
    try {
      const user = await API.logIn(credentials);
      setLoggedIn(true);
      setMessage({msg: `Welcome, ${user.name}!`, type: 'success'});
    }catch(err) {
      console.log(err);
      setMessage({msg: err, type: 'danger'});
    }
  };

  const handleLogout = async () => {
    await API.logOut();
    setLoggedIn(false);
    // clean up everything
    setExams([]);
    setMessage('');
  };

  return (
    <Container className='App'>
      {loggedIn && <LogoutButton logout={handleLogout} /> }
      {message && <Row>
        <Alert variant={message.type} onClose={() => setMessage('')} dismissible>{message.msg}</Alert>
      </Row> }
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            loggedIn ? <Navigate replace to='/' /> : <LoginRoute login={handleLogin} />
          } />
          <Route path='/' element={
            loggedIn ?  <ExamRoute exams={exams} /> : <Navigate replace to='/login' />
          } />
          <Route path='*' element={ <DefaultRoute/> } />
        </Routes>
      </BrowserRouter>
    </Container>
    
  );
}

export default App;
