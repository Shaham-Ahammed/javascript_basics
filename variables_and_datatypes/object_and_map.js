//! OBJECT

let obj = {
  name: "shaham",
  age: 14,
  $: 99,
};
console.log(obj.name);
console.log(obj["$"]);

//! MAP

let map = new Map();

//we cannot assign a map like below directly within a curly braces {}. We can only use set method to give values to map
//also we need to use get inorder to get value of a key

map.set(true, "bool");
map.set("name", "shaham");
map.set(4, 40);

console.log(map.get(4));


//! MAP OPERAIONS

let values = map.values();
console.log(values);

let keys = map.keys();
console.log(keys);

//contains - key
console.log(map.has(4));

map.delete(4)
console.log(map);

