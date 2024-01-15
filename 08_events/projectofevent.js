// generate random color
const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomcolor());
let intervalId;
const startchangingcolor = function () {
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomcolor();
  }
};
// setInterval(startchangingcolor, 1000)

const stopchangingcolor = function () {
  clearInterval(intervalId);
  intervalId= null;
};

document.querySelector("#start").addEventListener("click", startchangingcolor);

document.querySelector("#stop").addEventListener("click", stopchangingcolor);
