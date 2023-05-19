import React, { useState } from 'react';
import '../screen/Home.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Agreed to terms:', agreed);

    setName('');
    setEmail('');
    setPassword('');
    setAgreed(false);
  };

  return (
    <div className="signup-form">
      <h2>Create New Account</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="agreed"
            checked={agreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor="agreed">I agree to the Terms and Conditions</label>
        </div>
        <button type="submit">Create New Account</button>
      </form>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default SignupForm;
