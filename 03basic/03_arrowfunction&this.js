/// this key word and arrow function

//
const user = {
  username: "vikash",
  price: 333,
  welcomeMess: function () {
    console.log(`${this.username} , Welcome to our website`);
    console.log(this);
    // yha pe this ka out put => {
    //username: 'vikash',
    //price: 333,
    //welcomeMess: [Function: welcomeMess]
    // } ye aata hai means pura object he print kr diya
  },
};
// this keyword current context me aata hai ya current scope me {}

user.welcomeMess();

console.log(this);
// output => {} only empty object
// but this value will change in browser
// browser k ander globle object => window object isiliye vha this ka output window object aata hai

// arrow function

/**
 * important topic revice it
 */

function chai() {
  let username = " vikash ";

  console.log(this);
  // console.log(this.username); // hum ese use nhi kr sakte object ki trah
}
chai();

//arrow function
const chai1 = () => {
  console.log(this); // arrow function me this kaam nhi krta ya u bol le k uski value empty aati but normal function me uski kuch value print hoti hai
};

chai1();

// main core arrow function

// const addNum = (num1, num2) => {
//   return num1 + num2;
// };

// implecit return mtlb return keyword ka use nhi krna hota ex ==> niche dekho
const addNum = (num1, num2) => {
  return num1 + num2;
};
console.log(addNum(5, 7));
//===========
const addNum1 = (num1, num2) => num1 + num2;

console.log(addNum1(5, 7));

// returning object from arrow function // important
const addNumO = (num1, num2) => ({ username: "vikash" });
console.log(addNumO());

// uses of arrow function //
const myArray = [1, 2, 5, 4, 5, 8, 2, 4];
myArray.forEach((item, index, arr) => {
  console.log((arr[index] = item * 10));
});

// just to understand foreach loop

// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }

