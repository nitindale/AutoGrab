// src/BankSystem.test.ts
import { Bank } from './Bank';
import { Customer } from './Customer';

describe('Bank System', () => {
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank();
  });

  test('should add a customer with an initial deposit', () => {
    const customer = bank.addCustomer('Alice', 1000);
    expect(bank.getCustomerBalance('Alice')).toBe(1000);
  });

  test('should allow deposit and withdraw for a customer', () => {
    const customer = bank.addCustomer('Bob', 500);
    customer.deposit(200);
    expect(bank.getCustomerBalance('Bob')).toBe(700);

    const success = customer.withdraw(300);
    expect(success).toBe(true);
    expect(bank.getCustomerBalance('Bob')).toBe(400);
  });

  test('should not allow withdrawal that exceeds balance', () => {
    const customer = bank.addCustomer('Charlie', 300);
    const success = customer.withdraw(500);
    expect(success).toBe(false);
    expect(bank.getCustomerBalance('Charlie')).toBe(300);
  });

  test('should transfer funds between customers', () => {
    const alice = bank.addCustomer('Alice', 1000);
    const bob = bank.addCustomer('Bob', 500);

    const success = bank.transferFunds('Alice', 'Bob', 300);
    expect(success).toBe(true);
    expect(bank.getCustomerBalance('Alice')).toBe(700);
    expect(bank.getCustomerBalance('Bob')).toBe(800);
  });

  test('should calculate total balance of the bank', () => {
    bank.addCustomer('Alice', 1000);
    bank.addCustomer('Bob', 500);
    bank.addCustomer('Charlie', 200);
    expect(bank.getTotalBalance()).toBe(1700);
  });
});
