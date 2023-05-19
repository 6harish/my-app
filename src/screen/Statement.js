import React from 'react';
import BankStatement from './BankStatement';
import Header from './Header';

const Statement = () => {
  const transactions = [
    {
      id: 1,
      datetime: '2023-05-18 10:30 AM',
      amount: 1000,
      type: 'Deposit',
      details: 'Deposit from savings account',
      balance: 5000,
    },
    {
      id: 2,
      datetime: '2023-05-19 3:45 PM',
      amount: -500,
      type: 'Withdrawal',
      details: 'ATM withdrawal',
      balance: 4500,
    },
  ];

  return (
    <div>
      <Header />
      <BankStatement transactions={transactions} />
    </div>
  );
};

export default Statement;
