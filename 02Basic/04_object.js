//
// const tinder =new Object() // singleton object
//
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "vikash";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);
// nesting
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstname: "vikash",
      lastname: "singh",
    },
  },
};

console.log(regularUser.fullname);

// optional question mark syntax ?

// merging object

const obj1 = {
  1: "a",
  2: "c",
  3: "d",
};
const obj2 = {
  4: "a",
  5: "c",
  6: "d",
};

// const obj3 = { obj1, obj2 };

// console.log(obj3);

// spread oprator not working why? it is working i didt printed it so i got confused

// const obj4 = { ...obj1, ...obj2 };

// 2nd method this work fine merging 2 object
const obj5 = Object.assign(obj1, obj2);
console.log(obj5);

// another syntax for merging
const obj6 = Object.assign({}, obj1, obj2); // this is better way to merg
console.log(obj6);

// another method spread method most used
const spread = { ...obj1, ...obj2 };
console.log(spread);

// database se data aaya
const users = [{}, {}];

// how to find key of an object
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // yha se iska datatype array aata hai aur ye bahut intersting hai
console.log(Object.values(tinderUser)); // taken all value ye bhi array hai

// ek aur syntax hai jisme har ek key value pair ko array me badal diya jata hai
console.log(Object.entries(tinderUser));
// output => [ [ 'id', '123abc' ], [ 'name', 'vikash' ], [ 'isLoggedIn', false ] ]

// sometimes value exist nhi krta hai syntax
console.log(tinderUser.hasOwnProperty("hgfdd"));
