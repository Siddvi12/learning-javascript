// for each loop
const coding = ["c++", "cpp", "java", "js", "ruby", "swift"];
// callback foreach
coding.forEach((item) => {
  console.log(item);
});

// another variation using normal function

coding.forEach(function (val) {
  console.log(val);
});

// by passing function
function printme(item) {
  console.log(item);
}

coding.forEach(printme); // yha humne koi refrence value nhi di ye automatically ho jata hai

// this way also
coding.forEach((item, index, array) => {
  console.log(item, index, array);
});

// object inside array and itration on it
const myCoding = [
  { lang: "js", langfile: "jdss" },
  { lang: "js1", langfile: "jdss1" },
  { lang: "js2", langfile: "jdss2" },
];

myCoding.forEach((item) => {
  console.log(item.lang);
});
