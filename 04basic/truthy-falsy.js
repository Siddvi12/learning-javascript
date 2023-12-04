const userEmail = "myanylock@gmail.com";
// const userEmail ="" // this is falsy value

const arr = []; // this is truthy valuer

if (userEmail) {
  console.log("got the userEmail");
} else {
  console.log("did not get");
}

// falsy value => false , 0, -0, bigint 0n, "", null , undefined, NAN, except everything is truthy value
//truthy value => '0' string k ander, "false", " " anything inside string, [], {}, function(){},

if (arr.length === 0) {
  console.log("array is empty");
}
const emptyobj = {};
if (Object.keys(emptyobj).length === 0) {
  console.log(" obj is empty");
}

// nullish coalescing oprator (??): null undefinde
let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;

console.log(val1);

// terniary oprator
// condition ? true :false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// 