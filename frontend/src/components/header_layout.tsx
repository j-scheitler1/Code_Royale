import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="w-25 flex">
        <Link
          to="/"
          className="text-brand-header transition duration-200 hover:font-bold hover:scale-105"
        >
          Code Royale
        </Link>
      </div>
      <div className="flex">
        <div className="w-25">
          <Link
            to="/about"
            className="text-brand transition duration-200 hover:font-bold hover:scale-105"
          >
            {'{ About Us }'}
          </Link>
        </div>
        <div className="w-25 ml-2">
          <Link
            to="/login"
            className="text-brand transition duration-200 hover:font-bold hover:scale-105"
          >
            {'{ Login }'}
          </Link>
        </div>
        <div className="w-25 ml-2">
          <Link
            to="/register"
            className="text-brand transition duration-200 hover:font-bold hover:scale-105"
          >
            {'{ Register }'}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
