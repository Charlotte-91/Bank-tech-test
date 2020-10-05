describe("Bank", function() {


  beforeEach(function() {
     bank = new Bank();
  });

  it("Should return a balance", function() {
    bank.deposit(1000)
    expect(bank.balance()).toEqual(1000);
  
  });

  it("Should deposit 90 into an empty account, therefore returning a balance of 90", function() {
    bank.deposit(90)
    expect(bank.balance()).toEqual(90);
  });

  it("Should withdraw 100 from a balance of 1000, therefore returning a balance of 900", function() {
    bank.deposit(1000)
    bank.withdraw(100)
    expect(bank.balance()).toEqual(900);
  });

  it("Should return a statement with the headings, 'date', 'credit/debit' and 'balance' ", function() {
    expect(bank.statement()).toContain('date || credit || debit || balance');
  });

  it("Deposit method should push string into statement instance variable", function() {
    bank.deposit(200)
    expect(bank.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 200 || || 200`)
  });

  it("Withdraw method should push string into statement instance variable", function() {
    bank.deposit(200)
    bank.withdraw(50)
    expect(bank.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || || 50 || 150`)
  });

  it("My statement array contains a list of transactions", function() {
    bank.deposit(400)
    bank.withdraw(24)
    bank.deposit(50)
    expect(bank.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 400 || || 400`)
    expect(bank.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || || 24 || 376`)
    expect(bank.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 50 || || 426`)
  });

  it("Prints a statement list with a header to the terminal", function() {

  });

});
