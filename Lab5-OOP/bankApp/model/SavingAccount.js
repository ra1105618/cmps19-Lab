let BankAccount = require('./BankAccount');


class SavingAccount extends BankAccount{
    constructor(accountNo,balance,minBalance){

        super(accountNo,balance);
        this.minBalance=minBalance;

    }

    distributeBenefit(BenefitPercentage){


        this.balance += (this.balance * BenefitPercentage);
    }


    getminBalance(){

        return this.minBalance;
    }

    setMinBalance(minBalance){

        this.minBalance=minBalance;
    }

    toString(){

        return "saving "+super.toString();
    }


}

module.exports=SavingAccount;