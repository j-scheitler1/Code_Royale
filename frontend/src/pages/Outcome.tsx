import { Link, useLocation } from 'react-router-dom';
import type { MatchResult } from '@/utils/types';

const Outcome: React.FC = () => {
  const location = useLocation();
  const state = location.state as MatchResult;

  if (!state) {
    return <div>Error: Outcome state not found.</div>;
  }

  return (
    <div className='text-brand bg-brand h-screen flex flex-col items-center justify-center'>
      {!state && 
        <div className='flex flex-col items-center'>
          <h1>Error: Outcome state not found.</h1>
          <Link to='/dashboard' >
            {'{ Back to the Dashboard }'}
          </Link>
        </div>
      }

      {state.result === 'tie' && (
        <div className='flex flex-col items-center'>
          <h1>This match was a tie!</h1>
          <Link to='/dashboard' >
            {'{ Back to the Dashboard }'}
          </Link>
        </div>
      )}

      {state.result === 'win' && (
        <div className='flex flex-col items-center'>
          <h1>You won this match!</h1>
          <Link to='/dashboard'>
            {'{ Back to the Dashboard }'}
          </Link>
        </div>
      )}

      {state.result === 'loss' && (
        <div className='flex flex-col items-center'>
          <h1>You lost this match, Nice try!</h1>
          <Link to='/dashboard' >
            {'{ Back to the Dashboard }'}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Outcome;