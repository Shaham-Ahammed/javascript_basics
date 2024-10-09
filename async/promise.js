//* Production code means time consuming code
//* Consuming code means it should wait untill getting the result
//* Promise connect both the production and consumption code

function prinitng(v) {
    console.log("hello"+v);
    
}

//*RESOLVE AND REJECT
// these are predefined by js . if we completed a promise successfully we call promise. if its having erro, we call reject

let myPromise = new Promise(function (myResolve,myReject){
    let x=1;
    if (x==0) {
        myResolve("OK")
    }else{
        myReject("x is not 0")
    }
} );

//after finishing the promise, it will be returned with a value and that value is passed to priniting function

myPromise.then(
    function(value) {prinitng(value);},  //works if code is successfull
    function(error) {prinitng(error);}    //works if code is having error
);

//is just a form of callback where we can handle the errors and completions more better way.a promise only works