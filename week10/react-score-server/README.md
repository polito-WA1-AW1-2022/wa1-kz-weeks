# `react-score-server`

The `react-score-server` is the server-side app companion of `react-scores`. It presents some APIs to perform CRUD operations on a student's university exams.

## APIs
Hereafter, we report the designed HTTP APIs, also implemented in the project.

### __List all the exams__

URL: `/api/exams`

HTTP Method: GET

Description: Get all the exams that the student already passed.

Request body: _None_

Response: `200 OK` (success) or `500 Internal Server Error` (generic error).

Response body:
```
[
  {
    "code": "01abc",
    "name": "Web Applications I",
    "credits": 6,
    "score": 30,
    "laude": true,
    "date": "2022-06-03"
  },
  {
    "code": "02def",
    "name": "How to pass exams",
    "credits": 3,
    "score": 18,
    "laude": false,
    "date": "2021-09-15"
  },
  ...
]
```

### __Create a new exam__

URL: `/api/exams`

HTTP Method: POST

Description: Add a new passed exam.

Request body:
```
{
  "code": "01abc",
  "score": 30,
  "laude": true,
  "date": "2022-06-03"
}
```

Response: `201 Created` (success) or `503 Service Unavailable` (generic error) or `422 Unprocessable Entity`.

Response body: _None_.

### __Update an exam__

URL: `/api/exams/<code>`

HTTP Method: PUT

Description: Update some information of an exam.

Example: `/api/exams/01abc`

Request body:
```
{
  "code": "01abc",
  "score": 30,
  "laude": true,
  "date": "2022-06-03"
}
```

Response: `200 OK` (success) or `503 Service Unavailable` (generic error) or `422 Unprocessable Entity`.

Response body: _None_.

### __Delete an existing exam__

URL: `/api/exams/<code>`

HTTP Method: DELETE

Description: Delete a passed exam given its code.

Example: `/api/exams/01abc`

Request body: _None_.

Response: `204` (success) or `503 Service Unavailable` (generic error) or `404`.

Response body: _None_.