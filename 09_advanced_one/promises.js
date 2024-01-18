//  how to creat promises
const promisesOne = new Promise(function (resolve, reject) {
  // do an async task
  // db calls, cryptography
  setTimeout(function () {
    console.log("asynk task is complete");
    resolve();
  }, 1000);
});

// consumption

promisesOne.then(function () {
  console.log("promise consume");
});

// another way

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
  // console.log("async task 2");
}).then(function () {
  console.log("async 2 resolve");
});

// third promises

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // mostly resolve me object pass hota hai
    resolve({ username: "chai", email: "exa@gmail.com" });
  }, 1000);
});
// resolve k ander jo bhi para meter hoga ya jo data  vo hame then k call back me "user" k jagah pe mil jaega jaisa niche exmple  me hua haio
promise3.then(function (user) {
  console.log(user);
});

// promises 4 important part

const promisesFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "vikash", password: "12" });
    } else {
      reject("ERROR: somethingwent wrong");
    }
  }, 1000);
});

promisesFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  //upar jo user.username return ho rha hai vo niche .then ka para meter ban jata hai
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log("error");
  })
  .finally(function(){
     console.log("finally resolove or rejected");
  });
