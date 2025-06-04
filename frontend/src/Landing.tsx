import React from 'react';
import Header from './components/header_layout';
import Design from './components/design_layout';
// import ReactDOM from 'react-dom/client';

function Landing() {
  return (
    <>
      <div className="flex items-center p-2">
        <div className="ml-2">
          <Header />
          <Design />
        </div>
      </div>
    </>
  );
}

export default Landing;