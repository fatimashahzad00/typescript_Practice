// let anonymous

let teacher: {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

// Aliased OBject Type
type student = {
    name: string,
    age?: number,
}

let student = {
    name: "Hira",
    age: 10
}

console.log(student["name"]);
console.log(student.age);

interface Manager {
    name: string,
    subordinates?: number
}

let storeManager : Manager = {
    name: "Bilal"
}