import React, { useState } from 'react';
import './Home.css';
import Header from './Header';

const Transfer = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransfer = () => {
    console.log('Transferring amount:', amount, 'to email:', email);
    setEmail('');
    setAmount('');
  };

  return (
    <div>
      <Header />
      <div className="transfer-card">
        <h2 className="card-title">Transfer Money</h2>
        <div className="card-content">
          <p>
            <strong>Email address:</strong>
          </p>
          <input
            type="email"
            className="email-input"
            placeholder="Recipient Email"
            value={email}
            onChange={handleEmailChange}
          />
          <p>
            <strong>Amount:</strong>
          </p>
          <input
            type="number"
            className="amount-input"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}
          />
          <button className="transfer-button" onClick={handleTransfer}>
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
