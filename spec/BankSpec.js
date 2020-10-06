describe("Account", function() {

  beforeEach(function() {
     account = new Account();
  });

  var consoleLogTest = function () {
    var userStatement = account.statement();
    return userStatement;
  };

  it("Should return a statement with the headings, 'date', 'credit/debit' and 'balance' ", function() {
    console.log = jasmine.createSpy("log");
    consoleLogTest();
    expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance");
  });

  it("Deposit method should push string into statement instance variable", function() {
    account.deposit(200)
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 200 || || 200`)
  });

  it("Withdraw method should push string into statement instance variable", function() {
    account.deposit(200)
    account.withdraw(50)
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || || 50 || 150`)
  });

  it("My statement array contains a list of transactions", function() {
    account.deposit(400)
    account.withdraw(24)
    account.deposit(50)
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 400 || || 400`)
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || || 24 || 376`)
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 50 || || 426`)
  });

  it("Prints a statement list with a header to the terminal", function() {
    account.deposit(400)
    account.withdraw(24)
    bank.deposit(50)
    console.log = jasmine.createSpy("log");
    consoleLogTest();
    expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance`);
    expect(console.log).toHaveBeenCalledWith(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 400 || || 400`);
    expect(console.log).toHaveBeenCalledWith(`${new Date(Date.now()).toLocaleString().split(',')[0]} || || 24 || 376`);
    expect(console.log).toHaveBeenCalledWith(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 50 || || 426`);
  });

});
