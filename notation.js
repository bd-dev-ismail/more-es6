const student = {
    name: 'Sajib uddin',
    age: 15,
    class: 'Ten',
    marks: {
        bangla: 90,
        english: 89,
        math: 65
    }
};
console.log(student.marks.math);//Math marks
const english = student['marks']['english'];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);