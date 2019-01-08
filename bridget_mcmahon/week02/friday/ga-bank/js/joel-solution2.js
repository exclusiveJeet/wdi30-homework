// This should be the single source of truth for account balances
// It should not contain any DOM code
// It contains ALL the logic and code for deposits and withdrawals

const bank = {
  checkingBalance: 0,
  savingsBalance: 0,
  total: function() {
    return this.checkingBalance + this.savingsBalance;
  },
  checkingDeposit: function (amount) {
    this.checkingBalance += Number(amount);
  },
  checkingWithdraw: function (amount) {
    amount = Number(amount);
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= Number(amount);
    } else if (amount <= this.total()) {
      const difference = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= difference;
    }
  },
  savingsDeposit: function (amount) {
    this.savingsBalance += Number(amount);
  },
  savingsWithdraw: function (amount) {
    amount = Number(amount);
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= amount;
    } else if (amount <= this.total()) {
      const difference = amount - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBalance -= difference;
    }
  }
}
