//object litral
const user = {
  username: "vikash",
  login: 8,
  signin: "true",

  getUserDetails: function () {
    console.log("got user data from database");
    console.log(`username: ${this.username}`);
    // yha this apne execution context ki baat se username print kr pa rha hai
    console.log(this);
  },
};

console.log(user["username"]);
console.log(user["getUserDetails"]);
// or
console.log(user.getUserDetails());
// this keyword is for current context
console.log(this); //will show empty object kuki yha globle context me kuch bhi nhi hai

// constructor function
const promise1 = new Promise(function () {});
const date = new Date();
// new keyword is constructor function

/////////////////////////
function User(username, logincount, iloogedin) {
  this.username = username;
  this.logincount = logincount;
  this.iloogedin = iloogedin;
  this.greeting =function(){
    console.log("hello" `${this.username}`);
  }
  return this;
  // yha return this return na bhi kro to bhi ye return krega
}
///////////////
const userone = new User("vikash", 12, true);
const userTwo = new User("vikashhfbn", 11, false);
console.log(userone);
console.log(userTwo);

// override kr dega User ko without new keyword
