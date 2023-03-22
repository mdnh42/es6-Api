// const array = [1, 3, 5, 7, 9];

// const even = array.map(number => number +1)

// console.log(even);


// const array2 = [33, 50, 79, 78, 90, 101, 30];

// const div = array2.filter(arr => arr/10);
// console.log(div);

// const people = [
//     {name: 'Meena', age: 20},
//     {name: 'Rina', age: 15},
//     {name: 'Suchorita', age: 22},
// ]; 

// // const totalAge = people.reduce(people.age(age))

// const sudent = {
//     name: 'Faredie', 
//     age: 26,
// }

// console.log(sudent.age);


// let data = {
//     location: [
//         {
//             latitue: '34, 5, 37.8', 
//             city: 'Hyderabad',
//             country: 'india',
//         }
//     ]
// }

// console.log(data.location[0].city);

// const obj = { foo: 1 };
// obj.bar = 2;

// console.log(obj);

function min(nums){ 
    return Math.min(nums) 
  }
  console.log(min( [1,3,2 ]))


  const cube=x=> x*x*x; 
console.log(cube(2))

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];

const l = friends.find(friend => friend.length == 5);

console.log(l);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

const{price} = product.price;