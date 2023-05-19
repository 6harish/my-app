import React, { useState } from 'react';
import './Home.css';
import Header from './Header';
const Withdraw = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleWithdraw = () => {
    // Perform deposit logic, e.g., update the balance with the entered amount
    console.log('Withdraw amount:', amount);
    setAmount('');
  };

  return (
    <div>
      <Header />
      <div className="deposit-card">
        <h2 className="card-title">Withdraw Money</h2>
        <div className="card-content">
          <input
            type="number"
            className="amount-input"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
          />
          <button className="deposit-button" onClick={handleWithdraw}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
