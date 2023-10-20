//string 

const namee = "v i a k s h  "
const gitrepo = 7;

// bactics use 

console.log(`hello my name is ${namee} and git repo: ${gitrepo}`);

// string are basically key value pair , key = index

console.log(namee.__proto__); // string is object

console.log(namee.toUpperCase());

// those all methods are functions

// console.log(namee.trim());

console.log( namee.slice(2,3)); // last vale not include

// diff bw substring and slice is slice take negetiv value

// trim ==> trim spaces in string

// replace

console.log(namee.replace(' ', '==')); 

// include 

console.log(namee.includes(' '));
console.log(namee.includes('='));

//  split method 

console.log(namee.split(' ')); // givs array

