import React, { useState } from 'react';

import './Home.css';
import Header from './Header';
const Deposit = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDeposit = () => {
    console.log('Depositing amount:', amount);
    setAmount('');
  };

  return (
    <div>
      <Header />
      <div className="deposit-card">
        <h2 className="card-title">Deposit Money</h2>
        <div className="card-content">
          <input
            type="number"
            className="amount-input"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
          />
          <button className="deposit-button" onClick={handleDeposit}>
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
