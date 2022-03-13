# Exercise 4: Transcript, with a database
_Goal: interacting with a database while experimenting with async code_.

Update the previous "Transcript" exercise to use a database.

Manage a list of objects and related database tables (`exams.sqlite`) that include information about the exams:

– Course code, name, credits
– Attained score (number between 18 and 30, plus a boolean for the laude)
– Date

The list of `Exam` objects, named `ExamList`, will have the following methods, operating on the database, which return Promises:

– `add(exam)` // pass a fully-constructed `Exam` object
– `getAll()` // returns (a Promise that resolves to) an `ExamList` with all the `Exams`
– `find(courseCode)` //returns (a Promise that resolves to) the matching `Exam`
– `afterDate(date)` // returns (a Promise that resolves to) an `ExamList` with the subset of `Exams` after the given date
– `getWorst(num)` // returns (a Promise that resolves to) an `ExamList` with the _num_ `Exams` with the lowest score