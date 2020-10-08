class Account {

  constructor() {
    this.account = 0
    var Statement = require('../src/statement');
    this.statement = new Statement;
  }

  deposit(amount) {
    this.account += amount
    this.addTransaction(` ${amount.toFixed(2)} `, " ")
  }

  withdraw(amount) {
    this.account -= amount
    this.addTransaction(" ", ` ${amount.toFixed(2)} `)
  }

  addTransaction(credit, debit) {
    (this.statement.myStatement).push(`${new Date(Date.now()).toLocaleString().split(',')[0]} ||${credit}||${debit}|| ${this.account.toFixed(2)}`)
  }
    
}
module.exports = Account;

