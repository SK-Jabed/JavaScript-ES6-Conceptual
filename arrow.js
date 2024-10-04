/*
* Syntax of Normal Function:
* function nameOfFunction(parameter) {
* 
* };
* nameOfFunction(Argument) or console.log(nameOfFunction())
* 
*
* Syntax of Arrow Function:
* const nameOfFunction = (parameter) => {
* 
* }
* nameOfFunction(Argument) or console.log(nameOfFunction())
*/
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


// Normal Function 
function double(x) {
    return x * 2;
}
console.log(double(25));

// Arrow Function 
const double2 = x => x * 2;
console.log(double2(500));


// Normal Function 
function add(x, y) {
    const total = x + y;
    return total;
}
const addition = add(6, 8);
console.log(addition);

// Arrow Function
const add2 = (x, y) => {
    const total = x + y;
    return total // Return Value When Use Multiple Lines in Arrow Function
}
console.log(add2(3,4));

const add3 = (a, b) => a + b;
console.log(add3(250, 250));


// Normal Function (Default Parameter)
function sum(x = 20, y = 10) {
    return x + y;
}
console.log(sum(30, 20));

// Arrow Function (Default Parameter)
const sum2 = (x = 40, y = 50) => x + y;
console.log(sum2());