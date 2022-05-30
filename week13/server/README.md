# `react-score-server-mini`

The `react-score-server-mini` in this project is a minimal server-side app companion of `react-scores-mini`. It presents one API to get a student's university exams and to perform the login/logout.

## APIs
Hereafter, we report the HTTP APIs implemented in the project.

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

### __Create a new session (login)__

URL: `/api/sessions`

HTTP Method: POST

Description: Create a new session starting from given credentials.

Request body:
```
{
  "username": "student@studenti.polito.it",
  "password": "password"
}
```

Response: `200 OK` (success) or `500 Internal Server Error` (generic error).

Response body: _None_

### __Get the current session__

URL: `/api/sessions/current`

HTTP Method: GET

Description: Verify if the given session is still valid and return the info about the logged-in user. A cookie with a valid session id must be provided.

Request body: _None_ 

Response: `201 Created` (success) or `401 Unauthorized` (error).

Response body:
```
{
  "username": "student@studenti.polito.it",
  "id": "1",
  "name": "Student"
}
```

### __Destroy the current session (logout)__

URL: `/api/sessions/current`

HTTP Method: DELETE

Description: Delete the current session. A cookie with a valid session id must be provided.

Request body: _None_

Response: `200 OK` (success) or `500 Internal Server Error` (generic error).

Response body: _None_