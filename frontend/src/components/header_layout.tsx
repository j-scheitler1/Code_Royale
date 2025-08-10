import { Link } from 'react-router-dom';
import { auth } from '@/firebase/firebase';
import { signOut } from 'firebase/auth';


const Header: React.FC = () => {
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
  }

  return (
    <header>
      <div className="w-25 flex">
        <Link to="/" className="text-brand-header transition duration-200 hover:font-bold hover:scale-105">
          Code Royale
        </Link>
      </div>

      <div className="flex">
        <div className="w-25">
          <Link to="/about" className="text-brand transition duration-200 hover:font-bold hover:scale-105">
            {'{ About }'}
          </Link>
        </div>

        {!user && (
          <>
            <div className="w-25 ml-2">
              <Link to="/login" className="text-brand transition duration-200 hover:font-bold hover:scale-105">
                {'{ Login }'}
              </Link>
            </div>
            <div className="w-25 ml-2">
              <Link to="/register" className="text-brand transition duration-200 hover:font-bold hover:scale-105">
                {'{ Register }'}
              </Link>
            </div>
          </>
        )}
        {user && (
          <>
            <Link to="/dashboard" className="text-brand ml-4 transition duration-200 hover:font-bold hover:scale-105">
              {'{ Dashboard }'}
            </Link>
            <Link to="/" onClick={handleLogout} className="text-brand ml-4 transition duration-200 hover:font-bold hover:scale-105">
              {'{ Logout }'}
            </Link>
            <Link to="/profile" className="text-brand transition ml-4 duration-200 hover:font-bold hover:scale-105">
              {`{ Profile }`}
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;