//No 1
// let a ="Pakistan";
// a = 9;
// console.log(a);
// // Answer compiler error on line 2.

import { callbackify } from "util";

// No 2
// const a = 5;
// a++;
// console.log(a);
// // Answer compiler error on line 2.

//No 3
// if(true) {
//     let a = 4;
// }else{
//     let a = "string"
// }
// console.log(a);
//Answer cannot use a in log statement

// No 4
// var a: number = "7";
// a = 9;
// console.log(a);
//Answer compiler error on line 1

// No 7
// let myType: any = { name: "zia", id: 1};
// myType = { id: 2, name: "Tom"};
// myType = { id: 3, name: "Mike", gender: false};
// myType = { id: 4, gender: false};
// NO Answer

// No 8
// let myType = <any> { name: "zia", id: 1};
// myType = { id: 2, name: "Tom"};
// myType = { id: 3, name: "Mike", gender: false};
// myType = { id: 4, gender: false};
// No Answer find

// No 9
// let notSure: any = 4;
// notSure = "may be a astring instead";
// notSure = false;
// No Answer find 

// No 10
// enum Color{Red = 1, Green, Blue};
// var colorName: string = Color[2];
// console.log(colorName);
// Answer Green

// No 11
// enum Color2 {Red = 1, Green = 2, Blue = 4};
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
// Answer 4

// No 12
// const enum Color1 {Red = 1, Green, Blue}
// var colorName: string = Color1[2];  //not allowed with const enum
// console.log(colorName);

// No 13
// var myAdd: (baseValue: number,increment:number) => number =
// function(x: number,y: number): number { return x+y}; 
//Answer Anonymous function

// No 15
// var buildNameFun: (...rest: string[], fname: string) => string = 
//         function(...restOfName: string[], firstName: string) {
//             return firstName + "" + restOfName.join(" ");
//         }
// console.log(buildNameFun("Khan", "Zia", "U"));
// Error A rest parameter must be last in a parameter list.ts(1014)
// Expected 2 arguments, but got 3

// No 17
// function pickCard(x: {suit: string; card: number;}[]): number;
// function pickCard(x: number): {suit: string; card: number;};
// function pickCard(x): any {
//     if(typeof x == "object") {
//         var pickedCard = Math.floor(Math.random() *x.length);
//         return pickedCard;
//     }
//     else if(typeof x == "number") {
//         var pickedSuit = Math.floor(x/13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }
// Error 

// No 18
// var x: any = "Tom";  //A
// if(typeof x === 'string') {  //B
//     console.log(x.length);  //C
// }
// x.unknown(); //D
// Runtime error

// No 19
// function addWithUnion(arg1: string | number | boolean): string | number | boolean { //A
//     if(typeof arg1 === "string") {
//         return arg1 + "Hello"  //B
//     }
//     if(typeof arg1 === "number"){
//         return arg1 + 10;  //C
//     }
//     if(typeof arg1 === "boolean") {
//         return arg1 && false;  // D
//     }
// }
// Error

// No 20
// var f: (string) => string;
// f = x => '(' + x + ')';
// var h: ((string) => string)[]
// h = [];
// h.push(f);
// console.log(h[0]("h"));
//  Answer (h)

// Unkonown no
// function myCallBack(text: string) {
//     console.log("inside myCallback" + text);
// }

// function callingFunction(initialText: string,
//     callback: (text: string) => void) {
//         callback(initialText);
//     }
// callingFunction("my Text", myCallBack);
// inside myCallback myText

// No 21
// let myType = { name: "Zia", id: 1 };
// myType = { id: 2, name: "Tom"};
// myType = { id: 3, myname: "Mike"}
//Compiler error on line 3
