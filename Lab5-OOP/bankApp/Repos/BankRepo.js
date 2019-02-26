let CurrentAccount = require('../model/CurrentAccount')
let SavingAccount = require('../model/SavingAccount')
let serialize = require('serialize-javascript');



class BankRepo{



    constructor(){

        this.account=[];


    }

    addAccount(account){

        this.account.push(account);


    }

    getAccount(){

        return this.account;
    }

    deleteAccount(accountNo){

        let index = this.account.findIndex(a => a.accountNo == accountNo)
        this.account.splice(index, 1)
    }



    displayAccount() {

        this.account.forEach(a => console.log(a))
    }

    sumBalance(){

        return this.account.reduce((acc,curr)=>(acc+curr.balance),0)
    }

    avgBalance() {


       return this.account.reduce((acc,curr)=>(acc+curr.balance),0)/this.account.length;


    }


     serializable(account){
         return JSON.stringify(account);


     }


     deserialize(obj){
        return JSON.parse(obj);
    }






}

module.exports=new BankRepo();