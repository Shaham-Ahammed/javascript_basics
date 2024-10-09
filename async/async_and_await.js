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
// await only works when we are returning a promise.

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