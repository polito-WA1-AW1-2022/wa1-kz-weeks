'use strict';

const express = require('express');
const morgan = require('morgan'); // logging middleware
const {check, validationResult} = require('express-validator'); // validation middleware
const dao = require('./dao'); // module for accessing the DB
const cors = require('cors');

// init express
const app = express();
const port = 3001;

// set up the middlewares
app.use(morgan('dev'));
app.use(express.json()); // for parsing json request body
// set uo and enable cors
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

/*** APIs ***/

// GET /api/exams
app.get('/api/exams', (request, response) => {
  dao.listExams()
  .then(exams => response.json(exams))
  .catch(() => response.status(500).end());
});

// POST /api/exams
app.post('/api/exams', [
  check('code').isLength({min: 7, max: 7}),
  check('score').isInt({min: 18, max: 31}),
  check('date').isDate({format: 'YYYY-MM-DD', strictMode: true})
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()});
  }

  try {
    await dao.addExam(req.body);
    res.status(201).end();
  } catch(err) {
    res.status(503).json({error: `Database error during the creation of exam ${exam.code}.`});
  }
});

// PUT /api/exams/<code>
app.put('/api/exams/:code', [
  check('code').isLength({min:7, max:7}),
  check('score').isInt({min: 18, max: 31}),
  check('date').isDate({format: 'YYYY-MM-DD', strictMode: true})
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty())
    return res.status(422).json({errors: errors.array()});

  const examToUpdate = req.body;
  if(req.params.code === examToUpdate.code) {
    try {
      await dao.updateExam(examToUpdate);
      res.status(200).end();
    }
    catch(err) {
      console.error(err);
      res.status(503).json({error: `Database error while updating ${examToUpdate.code}.`});
    }
  }
  else {
    res.status(503).json({error: `Wrong exam code in the request body.`});
  }
});

// DELETE /api/exams/<code>
app.delete('/api/exams/:code', async (req, res) => {
  try {
    await dao.deleteExam(req.params.code);
    res.status(204).end();
  } catch(err) {
    res.status(503).json({ error: `Database error during the deletion of exam ${req.params.code}.`});
  }
});

/*** Other express-related instructions ***/

// activate the server
app.listen(port, () => console.log(`Server started at http://localhost:${port}.`));