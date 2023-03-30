/*
8 ways to get undefined 
1. variable that is not inititalized will give undefined
2. Function with no return 
3. Parameter that is not passed will be undeifed. 
4. If return has nothing on the right side will return undefined. 
5. Property that doens't exist on an object will give you undefined. 
6. Acceing array elements outside outside of the index.
 
*/

let first; 
// console.log(first);

function second(a, b){
    const totol = a + b; 
}
// console.log(second());

function third(a, b, c, d){
    const total = a+b+c+d; 
    console.log(a, b, c, d);
}

// console.log(third(2,5));

function noNegative(a, b){
    if(a<0 || b<0){
        return 'negative';
    }else
    {
        return a+b;
    }
}
// console.log(noNegative(2, -5));


const fifth = {id: 2, name: "pnchom", age: 40};
// console.log(fifth.age, fifth.name);


const sixth = [4, 89, 87, 56, 54];
console.log(sixth[5], sixth[200]);