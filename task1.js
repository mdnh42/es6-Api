

const mySelf = { 
    name: "MD Nur Hasan",
    age: 23,
    computerTechnology: {
        subject: "JavaScript",
        semeter: 6,
    },
    hobby: ['Traveling', 'Coding'],
    isMarried: false, 
    quotes: function(){
        return this.isMarried();
    }
};

console.log(mySelf.name);
console.log(mySelf.age);
/* console.log(myself.computerTechnology.subject);
console.log(myself.computerTechnology.semeter); */
console.log(mySelf.hobby);
console.log(mySelf.isMarried);
console.log(mySelf.quotes);


// Template String 

const div = document.getElementById('check'); 
div.innerHTML = `
    <ul> Hobby: 
    <li>${mySelf.hobby[0]} </li>
    <li>${mySelf.hobby[1]} </li>
    </ul>
    <h2> My Study:  ${mySelf.computerTechnology.semeter} Semester </h2>
`;