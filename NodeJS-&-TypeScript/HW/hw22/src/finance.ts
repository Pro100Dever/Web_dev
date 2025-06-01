class LoanCalculator {
  constructor(
    private principal: number, // сумма кредита
    private annualRate: number, // годовая ставка в процентах
    private months: number // срок кредита в месяцах
  ) {}

  calculateMonthlyPayment(): number {
    const monthlyRate = this.annualRate / 12 / 100
    const numerator = monthlyRate * this.principal
    const denominator = 1 - Math.pow(1 + monthlyRate, -this.months)
    return numerator / denominator
  }
}

class TaxCalculator {
  constructor(private taxRatePercent: number) {}

  calculateTax(income: number): number {
    return income * (this.taxRatePercent / 100)
  }
}

export { LoanCalculator, TaxCalculator }
