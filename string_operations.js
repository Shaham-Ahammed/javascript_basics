
//!REPLACING

let str="shaham";
//replaces the first  occurance of "a"
str=str.replace("a","d")
console.log(str);

//replaces all occurance of h with f
str=str.replaceAll("h","f")
console.log(str);

//! CHECKING FOR SUBSTRING
//checking for wether a substring is present
console.log(str.includes('m'));
console.log(str.startsWith("sf"));
console.log(str.endsWith("w"));

//! REPEATING A STRING
let st= "ha!"
let b = st.repeat(3) 
console.log(b); //outputs ha!ha!ha!

//! PADDING SYRING
//padStart
st="hai"
console.log(st.padStart(9,"s")); // 9 is max length of the string & followed by the variable which should fill the place
console.log(st.padEnd(10,"m"));







