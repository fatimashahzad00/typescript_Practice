// Const is a constant variable where value is not changed
const a = 5;
const b: number = 33;
const c = "best";

//  nowadays it's a suggestion that we have to use let insttead to var
// because let is blocked scope

if(true) {
    let z = 4;
    // use z here
}
else{
    let z = "string";
}
console.log("let: " + z);  //Error: Cannot find name 'z'
// z is not define in this scoppe