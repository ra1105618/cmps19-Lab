let CurrentAccount = require('./model/CurrentAccount')
let SavingAccount = require('./model/SavingAccount')
let BankRepo = require('./Repos/BankRepo')
let serialize = require('serialize-javascript');



var accounts = [];

accounts.push({
    "AccountNo": 123,
    "Balance": 1000
});

accounts.push({
    "AccountNo": 234,
    "Balance": 4000
});
accounts.push({
    "AccountNo": 345,
    "Balance": 3500
});

console.log(accounts);

//this is for saving

let saving1=new SavingAccount(123,500,1000)
BankRepo.addAccount(saving1);
let saving2=new SavingAccount(456,60000,1000);
BankRepo.addAccount(saving2);

console.log(saving1.toString());

console.log("The sum before distributed "+ BankRepo.sumBalance());



(saving1.deposit(200));
(saving2.withdraw(1000));
(saving1.withdraw(500));

saving1.distributeBenefit(0.05)   //destributed













let current1=new CurrentAccount(234,4000,15)
BankRepo.addAccount(current1)
let current2=new CurrentAccount(345,35000,25)
BankRepo.addAccount(current2)

current1.deductFee() //deduct











BankRepo.deleteAccount(345); //delete
BankRepo.displayAccount();    //display

console.log("The sum of Balance is after distributed : "+ BankRepo.sumBalance());

console.log("The average is after distributed : "+ BankRepo.avgBalance());


//BankRepo.avgBalance();     //Avegare


var newOne=BankRepo.serializable(current1); //Serialize

console.log(newOne)



des=BankRepo.deserialize('{"accountNo":234,"balance":4000,"monthlyFee":15,"balanc":3985}')    //des

console.log(des);





//console.log(average);




















