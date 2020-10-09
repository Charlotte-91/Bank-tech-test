class Account {

  constructor() {
    this.account = 0
    var Statement = require('../src/statement');
    this.statement = new Statement;
    
  }

  deposit(amount) {
    this.account += amount;
    (this.statement)._addTransaction(` ${amount.toFixed(2)} `, " ", this.account)
  }

  withdraw(amount) {
    this.account -= amount;
    (this.statement)._addTransaction(" ", ` ${amount.toFixed(2)} `, this.account)
  } 
}

module.exports = Account;
