// stack and heap memory

// reminder 2 types of data type 
//1. premetive or call by valve 
// 2. non premitive = call by refrence


//stack(premitive),
/**
 * jab bhi stack memory use hota hai vha hame  ek copy mil jata hai us data ka
 */

//  heap(non premitive)
/**
 * aur yha hame ref milta hai
 */

let myYoutName ="vikash singh";
let anothername = myYoutName;

console.log(anothername);

anothername = "hello vikash"
console.log(myYoutName);
console.log(anothername);
// copy mil jata hai ex upar vala


// ref mila aur pura value chang kr diya(non premitive data type)
let user ={
    email: "userid",
    upiId: "nico"
}

console.log(user.upiId);
user.upiId="sico"
console.log(user.upiId);

console.log(user);