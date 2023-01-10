// Any

let myval: any;
myval = true; //ok
myval = 42; //ok
myval = "hey"; //ok
myval = []; //ok
myval = {}; //ok
myval = Math.random(); ///ok
myval = undefined; //ok
myval = null; //ok
myval= () => {console.log('Hey There!');}; //ok

let value : unknown;
value = true; //ok
value = 42; //ok
value = "hey"; //ok
value = []; //ok
value = {}; //ok
value = Math.random(); ///ok
value = undefined; //ok
value = null; //ok
value= () => {console.log('Hey There!');}; //ok

// Assigning a value of type unknown to variables of other types

let val: unknown;
const val1: unknown = val; //ok
const val2: any = val;//ok
const val3: boolean = val;//will thorw an error
const val4: number = val;//will thorw an error
const val5: string = val;//will thorw an error
const val6: Record<string, any> = val;//will thorw an error
const val7: [] = val; //will thorw an error
const val8 : (...args: any[]) => val; //will thorw an error

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("something failed")
}

// Function returning never must not have a reachable end point
function infiniteloop() : never {
    while(true) {}
}