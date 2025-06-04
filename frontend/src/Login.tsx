import React from 'react';
// import { Link } from 'react-router-dom';

import Header from './components/header_layout';
import Login_Layout from './components/login_layout';

const Login: React.FC = () => {
  return (
    <>
      <div className="flex items-center p-2">
        <div className="ml-2">    
          <Header />
          <Login_Layout />
        </div>
      </div>
    </>
  );
};

export default Login;