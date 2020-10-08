
class Statement {

  constructor() {
    this.myStatement = []
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    (this.myStatement).slice().reverse().forEach(line => { console.log(line); });
  }

}
module.exports = Statement;