// this page is diff
function changeCount(num) {
  document.querySelector("#count").textContent =
    Number(document.querySelector("#count").textContent) + num;
}
let count = 0;
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
var display = document.getElementById("count");

// inc.addEventListener("click", function () {
//   count++;
//   display.innerHTML = count;
// });

dec.addEventListener("click", function (e) {
  count--;
  display.innerHTML = count;
  console.log(e);
});


// another method
inc.addEventListener("click", function () {
  changeCount(2)
});

dec.addEventListener("click", function () {
  changeCount(-2)
});
