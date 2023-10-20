
// numbers ==============

const score = 400;// not good idea to define number
console.log(score);

const balance = new Number(100); // good practice 
console.log(balance);

console.log(typeof balance.toString());
// ek aur cheez agar hum number ya sting ya kisi bhi cheez ko ese define krte hai to uski properties hame browser me mil jata but first define type me hame koi bhi properties nhi milti

// tofixed tab use krna hota hai jab e commerc website bnaye koi precision value leni ho decimal k baad ki value btata hai
console.log(balance.toFixed(2));


const otherNumber = 23.458721;
// round off krke deta hai precision()
console.log(otherNumber.toPrecision(3));

const hundereds = 1000000;
// comma add kr deta hai numbers me
console.log(hundereds.toLocaleString());

/**
 * Number {100}
[[Prototype]]
: 
Number
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
0
[[PrimitiveValue]]

 */


//maths===========is a library 

console.log("Maths====================");
 // same with maths if we open math method in browser we get so many properties

 /**
  * Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E: 2.718281828459045

LN2
: 
0.6931471805599453

LN10
: 
2.302585092994046

LOG2E
: 
1.4426950408889634

LOG10E
: 
0.4342944819032518

PI
: 
3.141592653589793

SQRT1_2
: 
0.7071067811865476

SQRT2
: 
1.4142135623730951

abs
: 
ƒ abs()
acos
: 
ƒ acos()
acosh
: 
ƒ acosh()
asin
: 
ƒ asin()
asinh
: 
ƒ asinh()
atan
: 
ƒ atan()
atan2
: 
ƒ atan2()
atanh
: 
ƒ atanh()
cbrt
: 
ƒ cbrt()
ceil
: 
ƒ ceil()
clz32
: 
ƒ clz32()
cos
: 
ƒ cos()
cosh
: 
ƒ cosh()
exp
: 
ƒ exp()
expm1
: 
ƒ expm1()
floor
: 
ƒ floor()
fround
: 
ƒ fround()
hypot
: 
ƒ hypot()
imul
: 
ƒ imul()
log
: 
ƒ log()
log1p
: 
ƒ log1p()
log2
: 
ƒ log2()
log10
: 
ƒ log10()
max
: 
ƒ max()
min
: 
ƒ min()
pow
: 
ƒ pow()
random
: 
ƒ random()
round
: 
ƒ round()
sign
: 
ƒ sign()
sin
: 
ƒ sin()
sinh
: 
ƒ sinh()
sqrt
: 
ƒ sqrt()
tan
: 
ƒ tan()
tanh
: 
ƒ tanh()
trunc
: 
ƒ trunc()
Symbol(Symbol.toStringTag)
: 
"Math"
[[Prototype]]
: 
Object


hame itne saare maths ki properties milti hai
  */

console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
// random 0 aur 1 k bich me hota hai
console.log(Math.random());

// generate random number
console.log(Math.round(Math.random()*10)+1);

const min =10;
const max =20;

console.log(Math.floor(Math.random()*(max-min +1))+ min);



