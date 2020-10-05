describe("Bank", function() {


  beforeEach(function() {
     bank = new Bank();
  });

  it("Should return a balance", function() {
    expect(bank.balance()).toEqual(1000);
  
  });

  it("Should deposit 1000 into account", function() {
    bank.deposit(1000)
    expect(bank.balance()).toEqual(1000);
  });
});
