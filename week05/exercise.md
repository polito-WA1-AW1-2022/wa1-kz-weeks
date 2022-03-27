# Exercise 5: Dynamic Transcript Webpage
_Goal: adding dynamic behaviors to the "My Exams" webpage, using JavaScript and manipulating the DOM of the webpage developed last week._

## Loading the exam list
Load the list of exams from a dedicated JavaScript array and display it in the table present on the webpage. Use suitable DOM manipulation methods.

Each exam, in JavaScript, is represented as course code, course name, credits, score (with laude), and passed date. You can re-use the same data structure created for Exercise 3-4.

In addition, each exam has associated a red button to allow the removal of the specific exam from the list displayed on the webpage. Be sure to include such a button while building the displayed list.

## Deleting an exam
Implement the exam removal, from the webpage list, in JavaScript. To do so, you have to define an `EventListener` in a suitable place (in the code) for each deletion buttons.

Please, notice that after reloading the page, all the exams will appear again (i.e., the deletion is not persistent).