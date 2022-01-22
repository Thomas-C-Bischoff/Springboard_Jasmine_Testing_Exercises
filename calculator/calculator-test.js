
it('should calculate the monthly rate correctly', function () 
{
  const values = 
  {
    amount: 60000,
    years: 3,
    rate: 4.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('1779.46');
});


it("should return a result with 2 decimal places", function() 
{
  const values =
  {
    amount: 20310,
    years: 10,
    rate: 20.0
  }
  expect(calculateMonthlyPayment(values)).toEqual('392.50');
});

/// etc
