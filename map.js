const array = [10, 20, 30, 40, 50];

array.map((item, index, arr) => {
    console.log("Item:", item, "Index:", index, arr);
});

const result = array.map((a) => a * 2);

console.log(result);
console.log(array);

array.map((item) => console.log(item));

const double = array.map((item) => {
    const x = item * 2;
    return x;
})
console.log(double);