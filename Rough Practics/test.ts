// no 22
// var a: { foo: number };
// var a1 = { foo: 1, baz: 2};
// a = a1;
// No error

// No 23
// let c = ((a,b) => ++a)(1,2)
// console.log(c);
// Answer 2

// No 24
// var myFunction = f => { this.x = "x";};
// var myFunction = function (f) { _this.x = "x"; };

// No 25
// interface Animal {name: string;}
// interface Cat extends Animal { meow();}

// function isCat(a: Animal): a is Cat {  //Line1
//     return true;  // Line 2
// }

// var x: Animal;

// if(isCat(x)) { //Line 3
//     x.meow();  //Line4
// }
// Error

// /NO 26
// type CallbackWithString = (string) => void;

// function usingCallback(f: CallbackWithString){
//     f("This is a string");
// }

// // No 27
// let x: { id: number, [name: string]: any};
// let y = { id: 1, fullname: "zia"};
// x = y;
// Answer no error

// No 28
let myType = { name: "zia", id:1};
let myType1 = { id: 2, name: "tom", age:22};
myType = myType1;