import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <header className="headerStyle">
        <nav>
          <ul style={navStyle}>
            <li style={navItemStyle}>
              <Link to="/home" style={linkStyle}>
                Home
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/deposit" style={linkStyle}>
                Deposit
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/withdraw" style={linkStyle}>
                Withdraw
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/transfer" style={linkStyle}>
                Transfer
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/statement" style={linkStyle}>
                Statement
              </Link>
            </li>
            <li style={navItemStyle}>
              <Link to="/" style={linkStyle}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const navItemStyle = {
  margin: '0 10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
};

export default Header;
