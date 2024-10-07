//! INDEX OPERATIONS

let array =[1,2,3,4];
//adds an element to end of array
array.push(5);
console.log(array);
//removes element from end
array.pop()
console.log(array);
//adds an element to first
array.unshift(99)
console.log(array);
// removes an element from first
array.shift()
console.log(array);

//removes one element from index 2
array.splice(2,1)
console.log(array);

//wont remove any element at index 2, but adds 9 and 99 at the index 2
array.splice(2,0,9,99)
console.log(array);

//checking contains
console.log(array.includes(5));

//! ITERATING OVER ARRAY ELEMENTS

//for each
array.forEach(ele => console.log(ele))

// .map creates a new array and assign it to a variable according to the fucntion written for each ele
let doubled = array.map(num => num*2)
console.log(doubled);

//filtering elements based on the condition and assigning to new list
let arr =[2,"2",4,5,7]
let evens = arr.filter(num=> num%2==0)
console.log(evens);


//! FINDING AN ELEMENT

let findingArr = [5,8,6,2,2]

//finds the first element which satisfies the following condition
let isGreat = findingArr.find(num=>num>6)
console.log(isGreat);

//finds the first index where the declared element is found
let idxOfTwo = findingArr.indexOf(2)
console.log(idxOfTwo);

//sorting
findingArr.sort();
console.log(findingArr);

//reversing
findingArr.reverse();
console.log(findingArr);

//! MERGING

let arr1 = [4,6,4];
let arr2 = [5,6,7];
let arr3 = [...arr1,...arr2];  
console.log(arr3);

//! SUBARRAY

// gives a subarray of elements from 1st index to 3rd index excluding 3rd index ele
let ogAr = [2,3,4,5,6]
let subA = ogAr.slice(1,3)
console.log(subA);


//! ARRAY PROBLEMS


//finding smallest value in an array

 array = [20, 4, 32, 5, 90];

let smallest = array[0];
for (let i = 1; i < array.length; i++) {
  smallest = array[i] < smallest ? array[i] : smallest;
}
console.log(smallest + " is the smallest ele");



// sorting an array

array = [20, 4, 32, 5, 90];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);

//! SET
//only contains unique values

let setArr = new Set()
setArr.add(1)
setArr.add(2)
setArr.add(1)
console.log(setArr);
