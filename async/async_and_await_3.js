async function hello() {
  return "true";
}
// the async function is same as writing a promise. ie, if we add async, it will become a promise function
function mahn() {
  return Promise.resolve("ok");
}

hello().then(function (val) {
  console.log(val);
});

// The await keyword can only be used inside an async function
//! await only works when we are returning a promise.

async function awaitingFunction() {
 await timeConsumingTask();
 console.log("here");
}

async function timeConsumingTask(){
  return new Promise((resolve)=>{
    setTimeout(() => {
        console.log("prom worked");
        resolve();          
      }, 3000);
  })
   
}

awaitingFunction()

//* Problem using async, await and promise 

// Create a function getUser(id) that simulates fetching a user.

let obj  = {}
for (let index = 1; index <=2; index++) {
  obj[index]= {id:index,name:'User'+index} 
}

async function fetchUser(id){
  return await new Promise((res,err)=>{
    setTimeout(()=>{
      if (obj.hasOwnProperty(id)) {
        res(obj[id])
      }else {
        console.log('no user found for id '+id)
      }
    },1000)
   
  })
}

async function getUsers(arr){
  let ans = []
  let a = [...arr,3]
  for (const element of a) {
  let user =  await fetchUser(element)
  ans.push(user)
  console.log(ans)
  }  
}

let array = [1,2]

getUsers(array)

