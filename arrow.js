// Normal Function
function myName() {
    return "Sheikh Jabed";
}

const result = myName();
console.log(result);

// Arrow Function
const myName2 = () => "Sheikh Jabed";
const result2 = myName2()
console.log(result2);


function double(x) {
    return x * 2;
}
console.log(double(25));

const double2 = x => x * 2;
console.log(double2(500));


const add = (x, y) => {
    const total = x + y;
    return total

}
console.log(add(3,4));


function sum(x = 20, y = 10) {
    return x + y;
}
console.log(sum(30, 20));

const sum2 = (x = 40, y = 50) => x + y;
console.log(sum2());
