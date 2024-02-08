function multiplyByFive(num) {
  return num * 5;
}
// very important

multiplyByFive.power = 2;
console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);

function creatUser(username, score) {
  this.username = username;
  this.score = score;
}

// this matlb jisne bhi bulya
// important massssssttt
// can make our own method
creatUser.prototype.increment = function () {
  this.score++;
};

creatUser.prototype.ptint = function () {
  console.log(`score is: ${this.score}`);
};

const chai = new creatUser("chai", 25);
const tea = new creatUser("tea", 250);
////// niceeeeeee
chai.ptint();
chai.increment();

/// goal
let myname = "vikash";
// console.log(myname.length);

let myHeros = ["thor", "spidy"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getspiderPower: function () {
    console.log(`spidy poer is${this.spiderman}`);
  },
};

// everything goes through object either it is array , string or anything
// so we can directly creat a method like this to acess it from everywhere in function also

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all object`);
};

Array.prototype.ArrHitesh = function () {
  console.log(`this hitesh is in array defind method`);
};

heroPower.hitesh(); // object
myHeros.hitesh(); // array
myHeros.ArrHitesh();
// heroPower.ArrHitesh(); // not working

// new topic inheritance

const user = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};
const Teachersupport = {
  isAvilable: false,
};
const TAsupport = {
  makeAssign: "js assignment",
  fullTime: true,
  __proto__: Teachersupport, // connectd TAsupport to teachingsupport
};

Teacher.__proto__ = user; // prototypal inheritance
console.log(Teacher.name);// can acess user ka data


// modern syntax

Object.setPrototypeOf(Teachersupport, Teacher)

// 
let anotherUser = "chaiaurcode     "
String.prototype.trueLength= function(){
  console.log(this); // refrence jo bula rha hai
console.log(`true length is : ${this.trim().length}`);
}

anotherUser.trueLength();
