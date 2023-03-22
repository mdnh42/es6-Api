const student = {
    name: 'kolim uddin', 
    age: 15,
    class: 'Ten',
    marks:{
        math: 78,
        physics: 55,
        chemistry: 65
    },
}

const marks = student.marks.math;
console.log(marks);

const cheimstry  = student ['marks'] ['chemistry'];
console.log(cheimstry);