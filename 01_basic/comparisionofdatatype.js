console.log("2">1); // true  not cheacking datatype
console.log("02">1);

// ===============
console.log(null > 0);
console.log(null < 0);
console.log(null == 0);

console.log(null >= 0);

// ===============

console.log(undefined==0);

// =========== strict cheack

console.log("2"===2); // false also cheacking dAata type


// datatype summary ============= interview perspective

// official data type 1= premitive data type and non prremitive data type

// premitive (call by value) 
/**
 * 7 type
 * string , numbers ,boolean, null , undefined, 
 * symbols, bigint, 
 */

/**
 * refrence type= non premitive datatype 
 * 
 * array, object(( agar js master krna hai to object and browser web event master kr ligiye  ) , Function ==> object function 
 * 
 */

//js is dynamically typed lang

// how to defined symbols 

const id =Symbol('123');
const anotherId = Symbol('123')
console.log('symbol comparision');
console.log(id=== anotherId);

//production level pe bigint jyda use nhi hota

const heros =["saktimaan", "nagraj", "doga"];
let myobj ={
    name: "vikash",
    age: 25,

}

function myfun(){
console.log("hello world");
}

myfun();

// type of array and null ==> object




