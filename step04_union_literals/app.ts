let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

// myname = undefined;  //Error;
// myname = 12;  //Error;

let myAge: string | number;

myAge = 16; //narrowing
console.log(myAge);

// console.log(myAge.toLowerCase()); // Error
// Property 'toLowerCase' does not exist on type 'number'.

myAge = "Dont Know";
console.log(myAge);

console.log(myAge.toString()); // common to both types 
//can be called even without narrowing

console.log(myAge.toLowerCase());//Can be called on string 
//because of narrowing

let newAge = Math.random () > 0.6 ? "Khan" : 60;

// console.log(newAge.toLowerCase()); //Error  transpiler cannot narrow
// Property 'toLowerCase' does not exist on type 'string | number'.
//   Property 'toLowerCase' does not exist on type 'number'

if (newAge === "Khan") {
    // type of newAge: string
    newAge.toUpperCase();  //Can be called
}

if(typeof newAge === "string") {
    // type of newAge: string
    newAge.toUpperCase(); //Can be Called
}

typeof newAge === "string" 
? newAge.toUpperCase()  //Ok string
: newAge.toFixed();  // Ok number

let age: number | "died" | "unknown"
age = 90;
age = "died";
age = "unknown";
// age = "living";  //Error
// Type '"living"' is not assignable to type 'number | "died" | "unknown"'

let zia: "zia";

zia = "zia";
// zia = "khan"; //error
// Type '"khan"' is not assignable to type '"zia"'

let yourname = Math.random() > 0.6 ? "Hira Khan" : undefined;

if(yourname) {
    yourname.toUpperCase(); //Ok string
}

// yourname.toUpperCase();  //error
// 'yourname' is possibly 'undefined'

yourname?.toUpperCase();  //OK

// You can also define a type alias
type RawData = boolean |number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = string | number;

type IdMaybe = Id | null | undefined;