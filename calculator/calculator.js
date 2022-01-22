window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() 
{
  const amountInput = document.getElementById("loan-amount");
  const yearsInput = document.getElementById("loan-years");
  const rateInput = document.getElementById("loan-rate");
  amountInput.value = 20000;
  yearsInput.value = 13;
  rateInput.value = 3.5;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() 
{
  const currentValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(currentValues);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) 
{
  const months = Math.floor(values.years * 12);
  const monthlyRate = (values.rate / 100) / 12;
  const valueAmount = values.amount;
  const monthlyPayment = (monthlyRate * valueAmount / (1 - Math.pow((1 + monthlyRate), -months))).toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) 
{
  const monthlyPaymentInput = document.getElementById("monthly-payment");
  monthlyPaymentInput.value = `$${monthly}`;
}
