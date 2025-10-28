
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;     
    this.balance = balance; 
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
    } else if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. Remaining balance: ${this.balance}`);
    }
  }
}

const myAccount = new BankAccount("Lusine", 500);
myAccount.deposit(200);  
myAccount.withdraw(100);  
console.log(`Final balance: ${myAccount.balance}`);
