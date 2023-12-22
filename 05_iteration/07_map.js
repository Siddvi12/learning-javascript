const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnums = mynum.map((num) => {
  return num + 10;
});

console.log(newnums);

// using for each method

const mynum1 = [];
mynum.forEach((item) => {
  mynum1.push(item + 10);
});

console.log(mynum1);

// chaining methods
const newNums1 = mynum.map((num) => num * 10).map((num) => num + 1);
console.log(newNums1);