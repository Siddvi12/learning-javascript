// dates 
// date is an object
let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
//only date

console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());


//date and time 
console.log(myDate.toLocaleString());

// times ki jarurat quzis like me jarurat pdta hai

let myCreatedDate = new Date("01-14-2023");
//time stamp 1st jan 1970 se start hota hai to jo long number aa rha hai vah milisec me 1970 se aa rha hai
let mytimeStamp = Date.now();

console.log(`milisec since 1970 jan 1st :${mytimeStamp}`);
// console.log(myCreatedDate.getTime());

// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // to convert in sec

// some more info about date 

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() +1); // yha month 0 se start ho rha hai isliye 0 = jan , 1 = feb

console.log(newDate.getDay()); // and yha monday =1 , tuesday =2 

// we can use bactics while forming proper date

newDate.toLocaleString('default', {
    weekday: "long",
    
})






