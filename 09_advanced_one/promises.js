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
  .finally(function () {
    console.log("finally resolove or rejected");
  });

// promises 5

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "js", password: "12" });
    } else {
      reject("ERROR: js went wrong");
    }
  }, 1000);
});
// async await directly error handle nhi krti
// uske liye hum try catch use krte hai
async function consumePromiseFive() {
  try {
    const response = await promiseFive;

    console.log(response);
  } catch (error) {
    console.log("error");
  }
}
consumePromiseFive();

// example
// yha time le rha hai api call pending
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // yha double await kiya hai kuki yha bhi time lgta hais
    // console.log(data);
  } catch (error) {
    console.log("e:error");
  }
}
getAllUsers();

// .then .catch format  example
const response = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((datares) => {
    console.log(datares);
  })
  .catch((error) => {
    console.log(error);
  });

// why we are getting async await data in last but .then method phle return ho rha hai
// in next lecture
// featch is uniqe // micro task q or priority q