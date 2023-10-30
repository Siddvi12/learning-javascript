// important for react.js

const marverheroes = ["thor", "ironman", "spiderman"];
const dc = ["superman", "batman", "flash"];

// we are pushing dc in marvel ===lets see what happend
// marverheroes.push(dc);
console.log(marverheroes);

// out put => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// array k ander array

// console.log(marverheroes[3]);

// output =>  [ 'superman', 'batman', 'flash' ]
// console.log(marverheroes[3][1]);
// => batman

// Additional arrays and/or items to add to the end of the array.

// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const newArr = marverheroes.concat(dc);
// console.log(marverheroes);
// still out put => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

// now
console.log(newArr);

//output => [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]
// yha sab thik hai

// SPREAD OPRATORS===================

const all_Heros = [...marverheroes, ...dc];
console.log(all_Heros);
// output =>[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]
// second method to merg 2 or more array

//new topic=rare case
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// flat ki help se array k ander array bhi concat ho k single array ban jata hai
console.log(real_another_array);

// isArray method and converting in array
console.log(Array.isArray("vikash"));
console.log(Array.from("vikash"));
console.log(Array.from({ name: "vikash" })); // return empty array interesting but we can told that key ka ya valuse ka aaray bnana hai

// another type

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));