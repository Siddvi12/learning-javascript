// {} => globle execution context
// which is this variable in js
// 1. globle exe context
// 2. functional or function exe context
// in mangoose => eval execu context

// 1.{ } memory creation phase
// 2. execu phase

// how this execute
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/**
 * first cycle
 * 1. globle execution or globle  => ye "this" me chla jata hai
 * 2. memory phase => val1  => which is undefined, same with val2
 * 3.addNum => defination (execute nhi hoga abhis)
 * result 1 and result2 => undefined
 */

/**
 * execution phase
 * val1= 10
 * val2 =5
 * addNum => will make new variable envirment + execution thred
 * (basically new scope me phir se vhi kaam hoga)
 * 1. memory phase
 * a. val1=undefine
 * b.val2=> undef
 * total => undef
 * 2. execution phase
 * a.num1=10, num2= 5, total =15
 *
 * ab ye sab delete ho jata hai globl context return karne k baad
 * // important
 * yha jo total value hai vo globle exe context me return ho rha hai
 *
 */

/**
 * result2 =>
 *
 */

// call stack
/**
 * last in first out
 */

function one() {
  console.log("one");
}
function two() {
  console.log("two");
}
function three() {
  console.log("three");
}
one();
two();
three();
