// scoping
/**
 * let
 * var
 * const
 */

if (true) {
  let a = 10;
  const b = 12;
  var c = 14;
}
// called scope

// console.log(a);
// console.log(b);
console.log(c); // ye problm hai

// globle scope
// window k ander scope====

// node  k ander scope diff hai

// lil bit of clouser
//nested scope bade log baccho se ice cream nhi le skte but baccche le skte hai (same concept here)
function one() {
  const username = "vikash";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); // can not acess child here
  two();
}

one();

if (true) {
  const username = "vikash";
  if (username) {
    const website = "yutube";
    console.log(username + website);
  }
  // console.log(website); // can not acess
}
// console.log(username); // also can not acess this lines

// ++++++++++++++++++++++++++interesting
// declaration function
console.log(addone(5));

function addone(num){
 return num +1;
}



// expression function but here we are holding in variable
// hoisting concept
// console.log(addTwo(5)); // this will giv error 

const addTwo = function (num){
  return num +2
}
