import React from 'react';
import Header from './components/header_layout';
import Register_Layout from './components/register_layout';

const Register: React.FC = () => {
  return (
    <>
      <div className="flex items-start p-2 bg-brand min-h-screen">
        <div className="ml-2">
          <Header />
          <Register_Layout />
        </div>
      </div>
    </>
  );
}

export default Register;