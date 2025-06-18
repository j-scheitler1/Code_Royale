import { signOut } from 'firebase/auth';
import Dashboard_Layout from '../components/dashboard_layout';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="relative bg-brand min-h-screen">
      <button 
        onClick={handleLogout} 
        className="absolute top-4 right-4 px-2 bg-gray-500 text-brand rounded hover:bg-gray-600 transition">
          Logout
      </button>

      <div className="flex flex-col items-center justify-center min-h-screen text-brand">
        <div className="text-xlg font-bold">
          {user ? `Welcome, ${user.email}` : 'No user logged in'}
        </div>
        <Dashboard_Layout />        
      </div>
    </div>
  );
}

export default Dashboard;
