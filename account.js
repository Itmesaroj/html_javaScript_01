function BankAccount(accountNumber,name,type,balance){
    this.accountNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;
    this.active = true; 
    //deposite function
    this.deposite=function(amount){
        if(amount>0){
            this.balance+=amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        }
        else{
            console.log("Invalid deposit amount.");
        }
    }
    //withdraw function
    this.withdraw=function(amount){
        if(this.active && amount > 0 && amount <= this.balance){
            this.balance=this.balance-amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
        else{
            console.log("Invalid withdrawal or insufficient balance.");
        }
    }
    //check balance function
    this.checkBalance=function(){
        console.log(`Account balance: $${this.balance}`);
    }
    //check the account is open or closed
    this.isActive = function() {
       return this.isActive;
    };
}


function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
      if (account.isActive()) {
        totalBalance=totalBalance+account.balance;
      }
    }
    return totalBalance;
  }
  
let account1=new BankAccount(123456, "John Doe", "Savings", 1000);
account1.deposite(1000);
account1.withdraw(2000);
account1.checkBalance();
let isactive=account1.isActive()
if(isactive==true){
    console.log("account is active")
}
else{
    console.log("account is not active")
}
let account2 = new BankAccount(2387656, "Jane Doe", "Checking", 5000);
account2.deposite(100);
account2.withdraw(50);
account2.checkBalance();
let accounts = [account1, account2];
let totalBalance = getTotalBalance(accounts);
console.log("Total balance of all active accounts:", totalBalance);