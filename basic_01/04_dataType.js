 //    Premitive datatype
 // total 7 type : String , Number , Boolean , null , undefine , Symbol , BigInt


const id = Symbol('123')  // for unique value we use Symbol datatype
const anotherId = Symbol('123')
console.log(id === anotherId)    // false

const Bignumber = 123456789n   // datatype BigInt


//    Non-Premitive datatype is called referance
// Array , Object , functions

const heros = ["AMit" , "Om" , "Vikas"]    // Array

//object will be declare in {}
let myObj = {
    name: "Amit",
    age: 21
}

// function decare using variable

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof Bignumber)  //bigint
console.log(typeof heros)   // obj
console.log(typeof myObj)   // obj
console.log(typeof id)    //symbol
