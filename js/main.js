

function calculateLoan() {
  var loanAmount = parseFloat(document.getElementById('loan-amount').value);
  var interestRate = parseFloat(document.getElementById('interest-rate').value);
  var loanTermYears = parseInt(document.getElementById('loan-term-years').value);
  var loanTermMonths = parseInt(document.getElementById('loan-term-months').value);

  var totalLoanTermMonths = (loanTermYears * 12) + loanTermMonths;
  var monthlyInterest = (interestRate / 100) / 12;
  var numberOfPayments = totalLoanTermMonths;
  var compoundedInterest = Math.pow((1 + monthlyInterest), numberOfPayments);
  var interestQuotient = (monthlyInterest * compoundedInterest) / (compoundedInterest - 1);
  var monthlyPayment = loanAmount * interestQuotient;

  if (isFinite(monthlyPayment)) {
    var totalPayment = monthlyPayment * numberOfPayments;
    var totalInterest = totalPayment - loanAmount;

    document.getElementById('results').innerHTML = `
      Monthly Payment: $${monthlyPayment.toFixed(2)}<br>
      Total Principal Paid: $${loanAmount.toFixed(2)}<br>
      Total Interest Paid: $${totalInterest.toFixed(2)}
    `;
  } else {
    document.getElementById('results').innerHTML = 'Please enter valid numbers.';
  }
}


document.getElementById('loan-form').addEventListener('submit', function(e) {
  e.preventDefault();
  calculateLoan();
});
