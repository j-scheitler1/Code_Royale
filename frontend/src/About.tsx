import React from 'react';
import Header from './components/layouts/header_layout';

function About() {
  return (
    <>
      <div className="flex items-start p-2 bg-brand min-h-screen">
        <div className="ml-2">
          <Header />
          <div className="flex items-center text-brand">This is the description about us</div>
        </div>
      </div>
    </>
  );
}

export default About;