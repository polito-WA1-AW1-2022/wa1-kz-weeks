# Exercise 1: Better Scores
_Goal: basic handling of JavaScript arrays_

Develop a small JavaScript program to manage the scores of the exams you had in your Bachelor's degree. You should:
 
- Define an array with all your scores in chronological order. For the moment:
  - Embed the scores directly in the source code.
  - Ignore the course name, credits, and date.
  - Ignore the 30L.
- Duplicate the array, but:
  - Eliminate the two lowest-ranking scores.
  - Add two new scores, in the end, equal to the (rounded) average of the existing scores.
- Print both arrays, comparing the scores before and after the "improvement," and showing the averages in both cases.

# Exercise 2: My Courses' List
_Goal: basic handling of JavaScript strings_

Develop a small JS program to manage the list of your courses.

- Define the names of your courses as a comma-separated list.
  - For instance: "Web Applications I, Computer Architectures, Data Science and Database Technology, Computer network technologies and services, Information systems security, Software engineering, System and device programming."
- Parse the string and create an array containing the names, one name per array position.
  - Beware: no extra spaces should be present.
- Create a second array by computing the acronyms of the courses as the initial letters of the name. Acronyms should be all-capital letters.
  - For example, Computer Architectures -> CA.
- Print the resulting list of acronyms and full course names.
  - Extra: in alphabetical order of acronym.