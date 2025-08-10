import Header from '@/components/header_layout';

const About: React.FC = () => {
  return (
    <>
      <div className='flex items-start p-2 bg-brand min-h-screen'>
        <div className='ml-2'>
          <Header />
          <div className='flex-col py-8 items-center '>
            <h1 className='font-bold px-4 text-brand-secondary-header transition duration-200 hover:font-bold hover:scale-105'>About Code Royale</h1>
            <p className='text-brand px-4'>We know the pain of grinding for interviews. You're probably halfway through the NeetCode 150 <br />and wondering if it's even worth it.
              Code Royale was made to help with this pain and gamify the <br />process of learning these problems.
              Queue up for a couple gammes, learn some patterns, and go outside. <br /> Life is more than just coding interviews.
            </p>
          </div>
          <div className='flex-col px-4 py-2 items-center'>
            <h1 className='font-bold text-brand-secondary-header transition duration-200 hover:font-bold hover:scale-105'>Contributers</h1>
            <ul className=' py-4 text-brand'>
              <li className='font-bold'>Josh Scheitler</li>
              <p>Follow me on github at <a className='transition duration-200 hover:font-bold hover:scale-105' href='https://github.com/j-scheitler1'>{`{ j-scheitler1 }`}</a></p>
              <p>Suggestions or Bugs? message me on linkdin at <a className='transition duration-200 hover:font-bold hover:scale-105' href='https://linkedin.com/in/joshscheitler'>{`{ Josh Scheitler }`}</a></p>
              <li className='py-4 font-bold'>Jason Bakke</li>
            </ul>
          </div>
        </div>
          <footer className='font-bold text-brand-secondary-header transition duration-200 hover:font-bold hover:scale-105'>Thank you for playing!</footer>
      </div>
    </>
  );
}

export default About;