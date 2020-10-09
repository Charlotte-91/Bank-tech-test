describe("Statement", function() {

  var Statement = require('../src/statement');
  var statement;

  beforeEach(function() {
     statement = new Statement();
  });

  it("Added a transaction to the array which is then displayed correctly on print", function() {
    spyOn(Date, 'now').and.returnValue('5/10/2020');
    console.log = jasmine.createSpy("log");
    statement._addTransaction(' 100.00 ', " ", 100);
    statement.printStatement();
    expect(console.log).toHaveBeenCalledWith('5/10/2020 || 100.00 || || 100.00')
  });

  it("Console logs the statement header", function() {
    console.log = jasmine.createSpy("log");
    statement.printStatement();
    console.log(console.log)
    expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance")
  });

  it("Is able to store various transactions in the statement", function() {
  spyOn(Date, 'now').and.returnValue('5/10/2020');
  console.log = jasmine.createSpy("log");
  statement._addTransaction(' 100.00 ', ' ', 100);
  statement._addTransaction(' 2000.00 ', ' ', 2100);
  statement._addTransaction(' ', ' 240.00 ', 2860);
  statement.printStatement();
  expect(console.log).toHaveBeenCalledWith('5/10/2020 || 100.00 || || 100.00')
  expect(console.log).toHaveBeenCalledWith('5/10/2020 || 2000.00 || || 2100.00')
  expect(console.log).toHaveBeenCalledWith('5/10/2020 || || 240.00 || 2860.00')
  });

});