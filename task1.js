/* const computerTechnology = {
    subject: "JavaScript",
    semeter: 6,
}; */

const mySelf = { 
    name: "MD Nur Hasan",
    age: 23, 
    hobby: ['Traveling', 'Coding'],
    isMarried: false, 
    quotes: function(){
        return this.isMarried();
    }
};

console.log(mySelf.name);
console.log(mySelf.age);
console.log(mySelf.hobby);
console.log(mySelf.isMarried);
console.log(mySelf.quotes);