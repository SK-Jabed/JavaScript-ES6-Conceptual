const numbers = [22, 43, 85, 36, 95, 66, 82, 72, 55];

// let find = null;
// for (let item of numbers) {
//     if (item > 80) {
//         find = item;
//         break;
//     }
// };

// console.log(find);

const result = numbers.find((item) => item > 50 && item % 2 == 0);
console.log(result);