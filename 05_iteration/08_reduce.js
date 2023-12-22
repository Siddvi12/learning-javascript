// reduce
const mynums = [1, 2, 3];

const mytotal = mynums.reduce((acc, curval) => {

    console.log(`acc:${acc} and curval:${curval}`);
  return acc + curval;

},0);

console.log(mytotal);
// basically use in shoping cart to total the cart price value
