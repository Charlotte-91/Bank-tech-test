
class Statement {

  constructor() {
    this.myStatement = []
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    (this.myStatement).slice().reverse().forEach(line => { console.log(line); });
  }

  _addTransaction(credit, debit, balance) {
    (this.myStatement).push(`${new Date(Date.now()).toLocaleString().split(',')[0]} ||${credit}||${debit}|| ${balance.toFixed(2)}`)
  }

}
module.exports = Statement;                                            