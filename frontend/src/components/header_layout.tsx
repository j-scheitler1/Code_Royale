import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <>
      <header>
          <div className="w-25 flex">
            <p className="text-xl">{'Code Royale'}</p>
          </div>
        <div className="flex">
          <div className="w-25">{'{ About Us }'}</div>
          <div className="w-25 ml-2"><Link to="/login" className="hover:underline">{'{ Login }'}</Link></div>
          <div className="w-25 ml-2">{'{ Register }'}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
