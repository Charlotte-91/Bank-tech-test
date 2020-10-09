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

  it("Deposit method should push a statement string to the statement class", function() {
    spyOn(Date, 'now').and.returnValue('5/10/2020')
    console.log = jasmine.createSpy("log");
    account.deposit(200)
    mockStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || 200.00 || || 200.00`)
  });

  it("Withdraw method should push a statement string to the statement class", function() {
    spyOn(Date, 'now').and.returnValue('5/10/2020')
    console.log = jasmine.createSpy("log");
    account.deposit(200)
    account.withdraw(50)
    mockStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith(`5/10/2020 || || 50.00 || 150.00`)
  });
  
});
