'use strict';

const express = require('express');
const morgan = require('morgan'); // logging middleware
const examDao = require('./exam-dao'); // module for accessing the DB
const cors = require('cors');

// init express
const app = express();
const port = 3001;

// set up the middlewares
app.use(morgan('dev'));
app.use(express.json()); // for parsing json request body
// set up and enable cors
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

/*** Exam APIs ***/

// GET /api/exams
app.get('/api/exams', (request, response) => {
  examDao.listExams()
  .then(exams => response.json(exams))
  .catch(() => response.status(500).end());
});

/*** Other express-related instructions ***/

// activate the server
app.listen(port, () => console.log(`Server started at http://localhost:${port}.`));