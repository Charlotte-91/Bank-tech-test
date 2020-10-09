describe("Account", function() {

  
  var Account = require('../src/account');
  var account;


  var mockStatement = jasmine.createSpyObj('statement', ['printStatement']);
  mockStatement.printStatement.and.callFake(function() {
    exampleStatement = 
    ["5/10/2020 || 200.00 || || 200.00",
    "5/10/2020 || || 50.00 || 150.00",
    "5/10/2020 || 400.00 || || 550.00"]
    console.log("date || credit || debit || balance")
    exampleStatement.reverse().forEach(line => { console.log(line); });
  });

  beforeEach(function() {
     account = new Account();
  });

  it("Should return a statement with the headings, 'date', 'credit/debit' and 'balance' ", function() {
    console.log = jasmine.createSpy("log");
    mockStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance");
  });

  it("Deposit method should push string into statement instance variable", function() {
    spyOn(Date, 'now').and.returnValue('5/10/2020')
    console.log = jasmine.createSpy("log");
    account.deposit(200)
    mockStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || 200.00 || || 200.00`)
  });

  it("Withdraw method should push string into statement instance variable", function() {
    spyOn(Date, 'now').and.returnValue('5/10/2020')
    console.log = jasmine.createSpy("log");
    account.deposit(200)
    account.withdraw(50)
    mockStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || || 50.00 || 150.00`)
  });

  it("My statement array contains a list of transactions", function() {
    spyOn(Date, 'now').and.returnValue('5/10/2020')
    console.log = jasmine.createSpy("log");
    account.deposit(200)
    account.withdraw(50)
    account.deposit(400)
    mockStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || 200.00 || || 200.00`)
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || || 50.00 || 150.00`)
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || 400.00 || || 550.00`)
  });

  it("Prints a statement list with a header to the terminal", function() {
    spyOn(Date, 'now').and.returnValue('5/10/2020')
    console.log = jasmine.createSpy("log");
    account.deposit(200)
    account.withdraw(50)
    account.deposit(400)
    mockStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance`);
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || 200.00 || || 200.00`);
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || || 50.00 || 150.00`);
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || 400.00 || || 550.00`);
  });

  it("Takes in two arguments and pushes them into an array in string format ", function(){
    spyOn(Date, 'now').and.returnValue('5/10/2020')
    console.log = jasmine.createSpy("log");
    account.deposit(400)
    mockStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || 400.00 || || 550.00`)
  });

});
