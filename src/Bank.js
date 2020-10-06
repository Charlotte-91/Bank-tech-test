class Bank {

  constructor() {
    this.account = 0
    this.myStatement = []
  }

  balance() {
    return this.account;
  }

  deposit(amount) {
    this.account += amount
    this.myStatement.push(`${new Date(Date.now()).toLocaleString().split(',')[0]} || ${amount} || || ${this.account}`)
  }

  withdraw(amount) {
    this.account -= amount
    this.myStatement.push(`${new Date(Date.now()).toLocaleString().split(',')[0]} || || ${amount} || ${this.account}`)
  }

  statement() {
    console.log("date || credit || debit || balance");
    this.myStatement.forEach(line => { console.log(line); });
  }
    
}