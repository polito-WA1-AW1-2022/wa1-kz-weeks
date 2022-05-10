'use strict';

const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan');
const dao = require('./dao');

// init express
const app = express();
const port = 3001;

// set up the middlewares
app.use(morgan('dev'));
app.use(express.json());

/*** APIs ***/

// GET /api/exams
app.get('/api/exams', (request, response) => {
  dao.listExams()
  .then(exams => response.json(exams))
  .catch(() => response.status(500).end());
});

// PUT /api/exams/<code>
/* ADD VALIDATION */
app.put('/api/exams/:code', async (req, res) => {
  const examToUpdate = req.body;

  if(req.params.code === req.body.code) {
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

// activate the server
app.listen(port, () => console.log(`Server started at http://localhost:${port}.`));