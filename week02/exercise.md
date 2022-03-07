# Exercise 3: Transcript
_Goal: managing a simple data structure as an array of objects_.

Using JavaScript objects manage a list of objects that include information about the exams.

Each exam will contain:

- Course code
- Course ame
- Credits
- Score (number between 18 and 30, plus a Boolean for the honors)
- Date

Define a constructor function `Exam` to create a new object.

Define a constructor function `ExamList`, with the following methods: 

- `add(exam)` // pass a fully-constructed `Exam` object
- `find(courseCode)` // returns the matching Exam
- `afterDate(date)` // returns an ExamList with the subset of Exams after the given date
- `listByDate()` // returns an array of Exams, sorted by increasing date
- `listByScore()` // idem, by decreasing score
- `average()` // return the average value (weighted by credits)

## Now with functional programming
Implement the methods of `ExamList` using functional programming methods.