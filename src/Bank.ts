// src/Bank.ts
import { Customer } from './Customer';

export class Bank {
  private customers: Map<string, Customer>;

  constructor() {
    this.customers = new Map<string, Customer>();
  }

  addCustomer(name: string, initialDeposit: number): Customer {
    const customer = new Customer(name, initialDeposit);
    this.customers.set(name, customer);
    return customer;
  }

  getCustomerBalance(name: string): number | null {
    const customer = this.customers.get(name);
    return customer ? customer.getBalance() : null;
  }

  getTotalBalance(): number {
    let total = 0;
    this.customers.forEach((customer) => {
      total += customer.getBalance();
    });
    return total;
  }

  transferFunds(senderName: string, recipientName: string, amount: number): boolean {
    const sender = this.customers.get(senderName);
    const recipient = this.customers.get(recipientName);
    if (sender && recipient) {
      return sender.transfer(recipient, amount);
    }
    return false;
  }
}
