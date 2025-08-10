import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { auth } from '@/firebase/firebase';
import { socket } from '@/utils/socket';
import Header from '@/components/header_layout';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [showMatchButton, setShowMatchButton] = useState(false);

  useEffect(() => {
    setShowMatchButton(true);
  }, []);

  const handleJumpToMatch = () => {
    if(!user) {
      console.log('No user logged in');
      return;
    }

    setShowMatchButton(false);
    console.log('Jumping into match...');
    const userData = {
      uid: user.uid,
      username: user.email || 'Anonymous',
    }

    console.log('User Data:', userData);
    socket.emit('join_queue', {
      uid: userData.uid,
      username: userData.username,
    });

    socket.on('match_found', (match) => {
      console.log('Match found:', match);

      navigate(`/game/${match.matchId}`, {
        state: {
          matchId: match.matchId,
          player1: match.player1,
          player2: match.player2,
          problem: match.problem,
          timer: match.timer,
        }
      });

    });

  }

return (
  <div className='bg-brand h-screen overflow-hidden grid grid-rows-[auto,1fr]'>
    {/* HEADER (single row, no extra wrappers) */}
    <header className='flex items-center p-2'>
      <div className='ml-2'>
        <Header />
      </div>
    </header>

    {/* CENTERED MAIN */}
    <main className='flex items-center justify-center text-brand'>
      <div className='text-center'>
        <div className='text-xl font-bold'>
          {user ? `Welcome, ${user.email}` : 'No user logged in'}
        </div>

        {showMatchButton ? (
          <button
            onClick={handleJumpToMatch}
            className='mt-2 inline-block transition duration-200 origin-left hover:scale-105'
          >
            {'{ Jump into a match }'}
          </button>
        ) : (
          <div className='mt-2 text-brand-secondary'>Finding a Match...</div>
        )}
      </div>
    </main>
  </div>
);
}

export default Dashboard;
