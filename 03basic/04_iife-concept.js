// immediately invoked function expression (iife)
//
(function chai() {
  //named iife
  console.log("db connected");
})();
// yha upar semicolon lgana jaruri hai varna nichre vala code nhi chelega
(function chaiaur(name) {
  console.log(`db connected ${name}`);
})("vikash");
// yha vikash argument le rha hai name k naam pe
// bina naam ka arrow function ananymous arrao wfunction

//unnamed iife or no named arrow function
((name) => {
  console.log(`db connected ${name}`);
})("vikash");
