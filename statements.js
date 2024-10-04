/* 

VAR AND LET
difference between var and let is let is block based. that is if we declare a let variable inside the 
block {}, it wont be accessible globally. but if its var, it will be always available globaly;

in var we can declare already declared variable again
ex : 
var c =20;
var c =50;
console.log(c) //prints 50

in let redeclaring same variable again returns an error

recommended to use let as using var leads to changing variables unindently from any part of code

*/

// const is same as in dart, it is also block based

// js dont have keywords other than let,var and const to declare variables

let a, v;
a = 20;

a = "shaha";
v = 20;

if (true) {
  const m = "40";
  var d;
  d = 50;
}

//switch

switch (d) {
  case 40:
    console.log("greater");
    break;
  case 50:
    console.log("lesser");
    break;
  default:
    console.log("equals");
    break;
}

//for loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// try - catch

try {
  const m = 20;
  m = 30;
  console.log(m);
} catch (error) {
  console.log("error is catched  :" + error);
}

// == and === symbols

let num5 = 5;
let str5 = "5";
if (num5 == str5) {
  console.log("both data types and values are equal");
} else if (num5 == str5) {
  console.log("values are equal not dt");
}
