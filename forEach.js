const array = [10, 20, 30, 40, 50];

for (let item of array) {
    console.log(item);
};

// Similar Advance Methods: forEach, map
/*
* Syntax of forEach
* (item) =>
* array.forEach((item) => item)
*/

// function show(a) {
//     console.log(a);
// }

// const show = (a) => console.log(a);

const show = (a) => {
    console.log(a);
}

array.forEach((a) => {
    console.log(a);
});

let sum = 0;
array.forEach((item) => {
    sum += item;
});
console.log(sum);


// CallBack Parameters (items, index, whole array)
array.forEach((item, index, arr) => {
    console.log("Item:", item, "Index:", index, arr);
});