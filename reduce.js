const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let item of numbers) {
    sum += item;
}

console.log(sum);

let multi = 1;

for (let item of numbers) {
    multi *= item;
}

console.log(multi);


// Using Reduce
// arr.reduce((previous, current) => previous + current, initial value)
/*
* 0 + 1 = 1
* 1 + 2 = 3
* 3 + 3 = 6
* 6 + 4 = 10
*/
const num = [1, 2, 3, 4];

const add = num.reduce((prev, current) => prev + current, 0);
console.log(add);

const multiply = num.reduce((prev, current) => prev * current, 1);
console.log(multiply);

const myNumbers = [{a : 1}, {a : 2}, {a : 3}, {a : 4}];
const addition = myNumbers.reduce((prev, current) => prev + current.a, 0);
console.log(addition);

const multiplication = myNumbers.reduce((prev, current) => prev * current.a, 1);
console.log(multiplication);