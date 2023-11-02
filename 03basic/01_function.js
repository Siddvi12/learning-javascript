// will do tommorow functions

console.log("v");
console.log("i");
console.log("k");
console.log("a");
console.log("s");
console.log("h");

function sayMyName() {
  console.log("v");
  console.log("i");
  console.log("k");
  console.log("a");
  console.log("s");
  console.log("h");
}

// sayMyName // this is refrence
sayMyName(); // this is execution

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

// giving argument or parameters
const result = addTwoNumber(2, 5);

console.log(result);

//output =>undefined (why?) ohhk here we are doing console not returning

// now we are here doing return
function addTwoNumber2(number1, number2) {
  return number1 + number2;
  // return k baad koi bhi code kaam nhi karega
}

const result2 = addTwoNumber2(28, 5);
console.log(result2);

//nice aproch
// default value = sam
function loginUserMsg(username = "sam") {
  if (username === undefined) {
    console.log("plz enter username");
    return;
  }
  return `${username} just logged in`;
}

const user = loginUserMsg("vikash"); // if we dont
console.log(user);

const user2 = loginUserMsg(); // if we dont
console.log(user2);

// shoping kart logic
//using rest and spread oprator is same

function calculateKartPrice(...num1) {
  return num1;
}
console.log(calculateKartPrice(200, 452, 2588, 1254));
// gives array

// passing object in function
const user3 = {
  username: "vikash",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject(user3);
//2nd method
handleObject({
  username: "vikash",
  price: 399,
});

// passing array in function

const myarr = [200, 500, 400, 850];

function returnsecondvalue(getarray) {
  return getarray[0];
}
console.log(returnsecondvalue(myarr));
console.log(returnsecondvalue([200, 500, 400, 850]));
