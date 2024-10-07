//declared using keyword function
//don't specify the datatype of the parameter

function squareFunction(b) {
  return b * b;
}

let doubled = squareFunction(5);
console.log(doubled);

//default parameter
function deafult(b, c = 20) {
  console.log(b + c);
}
deafult(20);

//using array as input parameter

function sums() {
  let add = 0;
  for (let index = 0; index < arguments.length; index++) {
    add += arguments[index];
  }
  return add;
}

console.log(sums(4,2,2,2,2,2,2));

//using a function inside a object

let object ={
    firstName :"shaham",
    lastName :"pk",
    fullName : function () {
        return this.firstName+ " "+ this.lastName
    }
} 
let fN = object.fullName()
console.log(fN);


//arrow function

sumsArrow = (c, d) => c + d;

let b = sumsArrow(5, 10);
console.log(b);
