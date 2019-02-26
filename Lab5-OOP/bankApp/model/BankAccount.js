class BankAccount{



    constructor(accountNo,balance){
        this.accountNo=accountNo;
        this.balance=balance;
    }

    getAccountNo(){

        return this.accountNo
    }
    setAccountNo(account){

        this.accountNo=accountNo;
    }

    getBalance(){

        return this.balance
    }

    setBalance(balance){

        this.balance=balance;
    }


    deposit(amount){



       this.balance+=amount;
    }

    withdraw(amount){



        if(amount > 0.0){

            if(amount>this.balance){

                console.log("you do not hava enough balance to withdrawl");
            }
            else{

               // var balance;
                this.balance-=amount;
            }
        }
    }

    toString(){

        return "Account #"+this.accountNo + " has QR"+this.balance;
    }





}

module.exports=BankAccount;