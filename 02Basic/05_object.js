// object de-structure and json api intro
const course = {
  course: " js hindi",
  price: " 333",
  courseInstructure: " hitesh",
};
// destructure means kisi object ki ek value ko le lena
const { courseInstructure } = course;

console.log(courseInstructure); // worked
// we can give our name also ex => 
const { courseInstructure : instructor} = course;
console.log(instructor);


// lil bit react destructure
const navbar = ({}) => {

}

// API CONCEPT
// json format
// {
//     "name": "vikash",
//     "coursename" : " js hindi",

// }

// bahut baar api data array k form me milta hai