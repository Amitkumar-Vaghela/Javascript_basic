
// const score = "32abc"

// console.log(typeof(score));   // number in lower 
// console.log(typeof score);    // number ih lower

// // conversion Operation
// const valueInNumber = Number (score)
// console.log(typeof valueInNumber)  // Number
// console.log(valueInNumber)      // NaN


// let a =  null
// let b = Number(a)
// console.log(typeof b)  // number
// console.log(b)         // number


// ******************************   Operation  *******************************//

// let value = 3
// let negValue = -value
// console.log(negValue)

 // concating string 
//  let str1 = "Amitkumar"
//  let str2 = " Vaghela"
//  let str3 = str1 + str2
//  console.log(str3)

// // important Operation 
//  console.log("1"+2);     //12
//  console.log(1+"2");     //12
//  console.log("1"+2+2);   //122
//  console.log(1+2+"2");   //32

// console.log(true);  // true
// console.log(+true); // 1
// console.log(+"");   //0
// // console.log(true+);  //error

let gameCounter = 100
++gameCounter;   // prefix operator used  -> 101
gameCounter++;   //postfix operator used   -> 102
++gameCounter;     // 103
console.log(gameCounter)


// study prefix and postfix from MDN

console.log("2" > 1);   //true




// *****************equality check and comparision************************//

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null>= 0); //true   due to  null is conert in  Zero


// Strick check // denoted by ===

console.log(null === 0);   //false
console.log("2" === 2);     // false
