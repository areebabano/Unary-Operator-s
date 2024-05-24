"use strict";
// Unary Operators
// pre increment pre decrement 
let a = 4;
console.log(`pre increment value is ${++a}`);
console.log(a);
// console.log(a);
// console.log(b);
// ++a; // a= a+1
// console.log(`pre increment value ${a}`);
// --b; // b= b-1
// pre decrement 
let b = 8;
console.log(`pre decrement value ${--b}`);
console.log(b);
// post increment post decrement 
let c = 5;
// let d: number = 6;
// c = c+1
console.log(`post increment value is ${c++}`);
console.log(c);
// c++;
// console.log(c);
// d = d-1// post decrement 
let d = 9;
console.log(`post decrement value is ${d--}`);
console.log(d);
let x = 4;
let y = 6;
let z = x++ + y + --x + y++ + x + --y + ++y + ++x;
console.log(z);
