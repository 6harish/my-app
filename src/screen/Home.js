import React from 'react';

import './Home.css';
import Header from './Header';
const Home = ({ userID, balance }) => {
  return (
    <div>
      <Header />
      <div className="card">
        <h2 className="card-title">Card Information</h2>
        <div className="card-content">
          <p>
            <strong>Your ID:</strong> harishseervi939@gmail.com
          </p>
          <p>
            <strong>Your Balance:</strong> 20,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
