
class Statement {

  constructor() {
    var Account = require('../src/account');
    this.account = new Account;
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    this.account.myStatement.slice().reverse().forEach(line => { console.log(line); });
  }

}
module.exports = Statement;