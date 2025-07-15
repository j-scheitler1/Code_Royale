import React from 'react';
import Header from '../components/header_layout';

function About() {
  return (
    <>
      <div className="flex items-start p-2 bg-brand min-h-screen">
        <div className="ml-2">
          <Header />
          <div className="flex items-center text-brand">
            <h1 className="text-brand">About Code Royale</h1>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;