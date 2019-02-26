let BankAccount = require('./BankAccount');


class CurrentAccount extends BankAccount{

    constructor(accountNo,balance,monthlyFee){

        super(accountNo,balance);
        this.monthlyFee=monthlyFee;


    }

    getMonthlyFee(){

        return this.monthlyFee
    }

    setMonthlyFee(monthlyFee){

        this.monthlyFee=monthlyFee
    }

    deductFee(){


        if(this.monthlyFee < this.balance){


           this.balanc=this.balance-this.monthlyFee;
        }
    }

    toString(){

        return "current " + super.toString()
    }
}

module.exports=CurrentAccount;