import React from 'react';
import Header from '../components/header_layout';

function About() {
  return (
    <>
      <div className="flex items-start p-2 bg-brand min-h-screen">
        <div className="ml-2">
          <Header />
          <div className="flex-col py-8 items-center">
            <h1 className="font-bold text-brand-secondary-header">About Code Royale</h1>
            <p className='text-brand'>We know the pain of grinding for interviews. You're probably halfway through the NeetCode 150 <br />and wondering if it's even worth it.
              Code Royale was made to help with this pain and gamify the <br />process of learning these problems.
              Queue up for a couple gammes, learn some patterns, and go outside. <br /> Life is more than just coding interviews.
            </p>
          </div>
          <div className="flex-col py-2 items-center">
            <h1 className="font-bold text-brand-secondary-header">Contributers</h1>
            <ul className=' py-4 text-brand'>
              <li className='font-bold'>Josh Scheitler</li>
              <p>Follow me on github at <a href='https://github.com/j-scheitler1'>{`{ j-scheitler1 }`}</a></p>
              <p>Suggestions/Bugs? message me on linkdin at <a href='https://linkedin.com/in/joshscheitler'>{`{ Josh Scheitler }`}</a></p>
              <li className='py-4 font-bold'>Jason Bakke</li>
            </ul>
          </div>
        </div>
          <footer className="font-bold text-brand-secondary-header">Thank you for playing!</footer>
      </div>
    </>
  );
}

export default About;