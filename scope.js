/*
* Types of Scope in JavaScript
* 01. Global scope
* 02. Block scope [Only Applicable for const & let Variable]
* 03. Function scope
*/

// Access Variable Globally
// const x = 5;
// console.log(x);

// if(true) {
//     console.log(x);
// }

// function show() {
//     console.log(x);
// }
// show();


//Access Variable with Block Scope
// {
//     let x = 5;
//     console.log(x);
// }

// console.log(x);

// const x = 7;

// {
//     const x = 10;
//     console.log(x);
// }
// console.log(x);

// {
//     var x = 10;
//     console.log(x);
// }
// console.log(x);


// Access Variable with Function Scope
// function show() {
//     const x = 5;
//     console.log(x);
// }
// show();
// console.log(x);

function show() {
    x = 5;
    console.log(x);
}
show();
console.log(x);
