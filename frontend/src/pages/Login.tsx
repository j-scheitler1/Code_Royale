import React from 'react';
// import { Link } from 'react-router-dom';

import Header from '../components/header_layout';
import Login_Layout from '../components/login_layout';

const Login: React.FC = () => {
  return (
    <>
      <div className="flex items-start p-2 bg-brand min-h-screen">
        <div className="ml-2">    
          <Header />
          <Login_Layout />
        </div>
      </div>
    </>
  );
};

export default Login;