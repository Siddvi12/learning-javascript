const coding = ["java", "js", "ruby", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values);
// yha values ka output undefined aa rha hai
// value ko return krne k baad bhi undefined aa rha hai

// so here is the problem
// jo forech hai vo koi bhi value return nhi krta hai

// phir kya kre
//

// filter method
// it return value based on its opration
const mynums = [1, 2, 3, 4, 5, 6, 9, 8, 7];
// filter method bhi ek call back leta hai
// filter bhi every value pe jata hai but hame ek condition deni padti hai
// jis basis pe ye hame koi value return krta hai
const newnums = mynums.filter((num) => {
  return num >= 5;
});

console.log(newnums);

// yhi same hame foreach se krna hai

// const newNums1 = [];

// mynums.forEach((num) => {
//   if (num > 4) {
//     newNums1.push(num);
//   }
// });

// console.log(newNums1);

