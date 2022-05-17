import dayjs from 'dayjs';

/**
 * Constructor function for new Exam objects
 * @param {string} code course code (e.g., '01ABC')
 * @param {string} name course name
 * @param {number} credits number of credits (e.g., 6)
 * @param {string} date date of the exam, in a format parseable by dayjs()
 * @param {string} score score attained at the exam
 */
function Exam (code, name, credits, date, score) {
    this.code = code;
    this.name = name;
    this.credits = credits;
    this.date = dayjs(date);
    this.score = score;
}

export default Exam;