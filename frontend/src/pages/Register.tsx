import React from 'react';
import Header from '../components/header_layout';
import Register_Layout from '../components/register_layout';
import { RedirectIfAuth } from './auth/RedirectIfAuth';

const Register: React.FC = () => {
  return (
    <>
      <div className="flex items-start p-2 bg-brand min-h-screen">
        <div className="ml-2">
          <Header />
          <RedirectIfAuth>
            <Register_Layout />
          </RedirectIfAuth>
        </div>
      </div>
    </>
  );
}

export default Register;