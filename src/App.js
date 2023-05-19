import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import Deposit from './screen/Deposit';
import Error from './screen/Error';
import Withdraw from './screen/Withdraw';
import Transfer from './screen/Transfer';
import Statement from './screen/Statement';
import Logout from './screen/Logout';
import SignupForm from './login/SignupForm';
import LoginPage from './login/LoginPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="deposit" element={<Deposit />}></Route>
        <Route path="withdraw" element={<Withdraw />}></Route>
        <Route path="transfer" element={<Transfer />}></Route>
        <Route path="statement" element={<Statement />}></Route>
        <Route path="logout" element={<Logout />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="signupform" element={<SignupForm />}></Route>

        {/* this path will show the error page the the parth is not defined */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default App;
