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
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 200.00 || || 200.00`)
  });

  it("Withdraw method should push string into statement instance variable", function() {
    account.deposit(200)
    account.withdraw(50)
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || || 50.00 || 150.00`)
  });

  it("My statement array contains a list of transactions", function() {
    account.deposit(400)
    account.withdraw(24)
    account.deposit(50)
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 400.00 || || 400.00`)
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || || 24.00 || 376.00`)
    expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 50.00 || || 426.00`)
  });

  it("Prints a statement list with a header to the terminal", function() {
    account.deposit(400)
    account.withdraw(24)
    account.deposit(50)
    console.log = jasmine.createSpy("log");
    consoleLogTest();
    expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance`);
    expect(console.log).toHaveBeenCalledWith(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 400.00 || || 400.00`);
    expect(console.log).toHaveBeenCalledWith(`${new Date(Date.now()).toLocaleString().split(',')[0]} || || 24.00 || 376.00`);
    expect(console.log).toHaveBeenCalledWith(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 50.00 || || 426.00`);
  });

  it("Takes in two arguments and pushes them into an array in string format ", function(){
  account.deposit(70)
  expect(account.myStatement).toContain(`${new Date(Date.now()).toLocaleString().split(',')[0]} || 70.00 || || 70.00`)
  });

});
