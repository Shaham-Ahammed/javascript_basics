class Car {
  constructor(b, c) {
    this.b = b;
    this.c = c;
  }
  // in classes for functions we dont need to define it is a function before writing a function
  c1() {
    console.log(this.b, this.c);
  }
}

new Car(4, 5).c1();


//* Problem

// Create a class BankAccount.

// Requirements

// owner
// balance
// deposit(amount)
// withdraw(amount)
// checkBalance()

// But make withdraw asynchronous (simulate bank processing delay).

class BankAccount {
  constructor(name,depositAmount) {
    this._accountHolder = name
    this._depositAmount = depositAmount
  }
  get checkBalance(){
    console.log(`balance of ${this._accountHolder} is ${this._depositAmount}`)
  }
  deposit(amount){
   this._depositAmount +=amount;
   console.log('amount deposited '+amount)
  }

  async withdraw(amount){

    console.log('withdraw in process')
return new Promise((res)=>
    setTimeout(() => {
      if (this._depositAmount - amount<0) {
        console.log('not enough balance')
      }else{
        this._depositAmount -= amount;
        console.log('amount withdrawn successfully '+amount)
      }
      res()
    }, 1500))
  }

}

let newAccount = new BankAccount('shaham',1000)
newAccount.checkBalance
newAccount.deposit(11000)
newAccount.checkBalance
await newAccount.withdraw(1212000)
newAccount.checkBalance
