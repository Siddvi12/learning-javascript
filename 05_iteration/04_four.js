// loop on objects
const muObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in muObject) {
  console.log(key);
  // to print value
  console.log(muObject[key]);
}

// for in loop on array 
// in array for in gives index
const programming = ["js", "cpp", "java", "jdsf", "ruby"];
for (const key in programming) {
  console.log(key);
  // this way we can find value also
  console.log(programming[key]);

}

//yha pe for in loop se itratable nhi hai why?
// will see next
const map = new Map();
map.set("IN", "india");
map.set("USA", "United state of america");
map.set("FR", "France");

for (const key in map) {
 console.log(key);
}


// 