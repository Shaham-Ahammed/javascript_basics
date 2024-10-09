
//executes the function fctn only after a delay of 1000 ms
//while passing a function as parameter of another function do not use paranthesis ()

setTimeout(fctn,1000)

function fctn() {
    console.log("hello");
}


//calls the function timing after every 2 seconds
setInterval(timing,2000)

function timing(){
    let d =new Date();
    console.log(d.getHours(), d.getMinutes() , d.getSeconds(),d.getMilliseconds());
}
