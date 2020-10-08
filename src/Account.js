class Account {

  constructor() {
    this.account = 0
    this.myStatement = []
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
    this.myStatement.push(`${new Date(Date.now()).toLocaleString().split(',')[0]} ||${credit}||${debit}|| ${this.account.toFixed(2)}`)
  }
    
}
module.exports = Account;