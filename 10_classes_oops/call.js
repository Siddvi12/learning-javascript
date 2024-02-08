function SetUsername (username){
// complex db call
this.username= username 
console.log("call");
}

function creatUser(username, email, password){
SetUsername.call(this, username)
this.email =email
this.password =password
}

const chai = new creatUser("chai","chai@gmail.com", "123")
console.log(chai);