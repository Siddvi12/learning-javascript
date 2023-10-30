// object 
// singleton
// constructor and litrals

// object litrals =========
// Object.create // singlton bnta hai

const sym = Symbol("key1"); // declear symbols

const JsUser = {
    name: "vikash ",
    "full name": "vikash singh",
    from: "lucknow",
    // key is also a string but hum likhte nhi hai
    age: 25,
    // adding my symbol data
    [sym]: "mysymbols", // [] me likhne se ab ye proper data type show krega mean symbol datatype
    email: "myanylock@gmail.com",
    lastLogInDay: ["monday", "saturday"],
}

// how to acess value 2 ways

console.log(JsUser.name); // but this is not worthy way
console.log(JsUser["name"]); // yha string ki trah definn ho rha hai to hame string format me dena pdega
console.log(JsUser["full name"]);

console.log( JsUser[sym]); // string show ho rha hai but ye to symbols datatype hai problm kha hai

// changing value

JsUser.name = "nick";
console.log(JsUser.name);
console.log(JsUser);

//  locking value or frezing object mean noone can change


// Object.freeze(JsUser);
//  ab change nhi hoga

//  function ko variabe ki trah treat kr skte hai 
// adding a function  in my object 
JsUser.greeting = function(){
    console.log("hello there");
}

console.log(JsUser.greeting);
// console.log(JsUser.greeting());

// start from here next



