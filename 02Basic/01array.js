// array 

const myarr = [1,2,55,4,7, true, "vikash"];

// array is basically an object, js array are resizable mtlb we can reduce and incres the size of an array
// array indexing
// indexing start at 0
// same ref and non premitive 
console.log(myarr[1]);
const myHeros = ["saktimann", "junior-g", "nagraj"]
//another method to creat array 

const newarr = new Array(1,2,3,4,5,4,5);


// array methods

myarr.push(6); // add at last 

console.log(myarr);

myarr.pop();
console.log(myarr); // remove last value

// shift() and unShift() method

myHeros.unshift("vikash"); // add at first 
console.log(myHeros);
myHeros.shift(); // remove value from start 
console.log(myHeros);

console.log(myarr.includes(45)); // give true or false 

// indexof method to find index of an elements

const newArr = myarr.join(""); // ye sabhi array k elem ko string me deta hai
// u have to mention on which basic array joined yha empty string k basic pe hua hai

console.log(newArr);

// slice and splice method
console.log("splice and slice method");

console.log("A" , myarr);
// slice
const mna1 = myarr.slice(1,3);

console.log(mna1);
console.log("B" , myarr);

// splice  yha last range which is 3 usko bhi include krta hai 
// splice method original array se pura value within range cut kr deta hai mtlb slice only copy krta hai but splice cut kr leta hai
const mna2 = myarr.splice(1,3);
// index 1, 2 , 3 tino ko hi cut kr leta hai hai 


console.log(mna2);
console.log("B" , myarr);










/**
 *length
: 
0
[[Prototype]]
: 
Array(0)

at
: 
ƒ at()

concat
: 
ƒ concat()
constructor
: 
ƒ Array()
copyWithin
: 
ƒ copyWithin()
entries
: 
ƒ entries()
every
: 
ƒ every()
fill
: 
ƒ fill()
filter
: 
ƒ filter()
find
: 
ƒ find()
findIndex
: 
ƒ findIndex()
findLast
: 
ƒ findLast()
findLastIndex
: 
ƒ findLastIndex()
flat
: 
ƒ flat()
flatMap
: 
ƒ flatMap()
forEach
: 
ƒ forEach()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
join
: 
ƒ join()
keys
: 
ƒ keys()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
map
: 
ƒ map()
pop
: 
ƒ pop()
push
: 
ƒ push()
reduce
: 
ƒ reduce()
reduceRight
: 
ƒ reduceRight()
reverse
: 
ƒ reverse()
shift
: 
ƒ shift()

slice: ƒ slice()
some
: 
ƒ some()
sort
: 
ƒ sort()
splice
: 
ƒ splice()
toLocaleString
: 
ƒ toLocaleString()
toReversed
: 
ƒ toReversed()
toSorted
: 
ƒ toSorted()
toSpliced
: 
ƒ toSpliced()
toString
: 
ƒ toString()
unshift
: 
ƒ unshift()
values
: 
ƒ values()
with
: 
ƒ with()
Symbol(Symbol.iterator)
: 
ƒ values()
Symbol(Symbol.unscopables)
: 
{at: true, copyWithin: true, entries: true, fill: true, find: true, …}

// yha 2 prototype hai ==========================================================

[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()

 */

