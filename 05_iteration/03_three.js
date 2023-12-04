const arr = [1, 2, 3, 4, 5, 6];
// for of loop
for (const num of arr) {
  console.log(num);
}

const greeting = "hello world";
for (const greet of greeting) {
  console.log(greet);
}

// another data type
// in js everthing is object
// Maps it hold unique key value pair
const map = new Map();
map.set("IN", "india");
map.set("USA", "United state of america");
map.set("FR", "France");

// console.log(map);
// how to loop on maps
// syntrax to itrate on map
for (const [key, value] of map) {
  console.log(key);
  console.log(value);
}

// on object 

const myObject ={
    'game1': 'nFS',
    'game2': 'spiderman'
}
// not itrable
// for (const [key, value] of myObject) {
    
// }

