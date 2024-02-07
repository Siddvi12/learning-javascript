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
