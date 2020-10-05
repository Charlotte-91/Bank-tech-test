describe("Bank", function() {


  beforeEach(function() {
     bank = new Bank();
  });

  it("Should return a balance", function() {
    expect(bank.balance()).toEqual(1000);
  });
});
