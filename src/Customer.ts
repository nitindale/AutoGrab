// src/Customer.ts
export class Customer {
  private name: string;
  private balance: number;

  constructor(name: string, initialDeposit: number) {
    this.name = name;
    this.balance = initialDeposit;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount > this.balance) {
      return false;
    }
    this.balance -= amount;
    return true;
  }

  transfer(recipient: Customer, amount: number): boolean {
    if (this.withdraw(amount)) {
      recipient.deposit(amount);
      return true;
    }
    return false;
  }
}
