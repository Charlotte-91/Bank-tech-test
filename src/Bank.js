class Bank {

  constructor() {
    this.account = 0
  };

  balance() {
    return this.account;
  };

  deposit(amount) {
    this.account += amount
  };

  withdraw(amount) {
    this.account -= amount
  };

  statement() {
    return 'date || credit || debit || balance'
  };

};