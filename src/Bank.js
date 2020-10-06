class Account {

  constructor() {
    this.account = 0
    this.myStatement = []
  }

  deposit(amount) {
    this.account += amount
    this.transaction(` ${amount.toFixed(2)} `, " ")
  }

  withdraw(amount) {
    this.account -= amount
    this.transaction(" ", ` ${amount.toFixed(2)} `)
  }

  statement() {
    console.log("date || credit || debit || balance");
    this.myStatement.forEach(line => { console.log(line); });
  }

  transaction(credit, debit) {
    this.myStatement.push(`${new Date(Date.now()).toLocaleString().split(',')[0]} ||${credit}||${debit}|| ${this.account.toFixed(2)}`)
  }
    
}