// Array Spreading
const array1 = [1, 2, 3, 4, 5];
const array2 = [...array1];
// for (let item of array1) {
//     array2.push(item);
// }

// array1.push(6);
// console.log(array2);

array2.push(7, 8);
console.log(array1);
console.log(array2);


// Array Destructuring
const names = ["Abul Kashem", "Kuddus Miya", "Mokbul Hossain"];

// const name1 = names[0];
// const name2 = names[1];
// const name3 = names[2];

// console.log(name1);
// console.log(name2);
// console.log(name3);

// const [ , , z] = ["Abul Kashem", "Kuddus Miya", "Mokbul Hossain"];
const [_, y, z] = names;

console.log(z);