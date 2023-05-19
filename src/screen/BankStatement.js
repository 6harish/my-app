import React from 'react';
import './Home.css';

const BankStatement = ({ transactions }) => {
  return (
    <div className="bank-statement">
      <h2 className="statement-title">Bank Statement</h2>
      <table className="statement-table">
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Details</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.datetime}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.details}</td>
              <td>{transaction.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankStatement;
