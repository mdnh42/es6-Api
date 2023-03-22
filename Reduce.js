// Map, foreach, filter, find, reduce. 

const numbers = [1, 2, 3, 4, 5, 6];

const total = numbers.reduce((previce, current)=>{
    console.log(previce, current);
    return previce + current; 
}, 0);

console.log(total);