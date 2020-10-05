describe("Bank", function() {


  beforeEach(function() {
     bank = new Bank();
  });

  it("Should return a balance", function() {
    bank.deposit(1000)
    expect(bank.balance()).toEqual(1000);
  
  });

  it("Should deposit 90 into an empty account", function() {
    bank.deposit(90)
    expect(bank.balance()).toEqual(90);
  });
});
