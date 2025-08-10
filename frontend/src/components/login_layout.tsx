import { useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '@/firebase/userService';

const Login_Layout: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { login, loading, formError, user } = useLogin();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    const existingUser = await login(email, password);
    if (existingUser) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-brand text-brand flex items-start justify-start p-4 text-lg">
      <div className="flex flex-col gap-2">
        <input 
          type="email"
          placeholder="johnSmith@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-none outline-none placeholder-gray-400 text-brand autofill-fix"
        />
        <input 
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border-none outline-none placeholder-gray-400 text-brand autofill-fix"
        />
        <button 
          onClick={handleLogin}
          className="self-start hover:font-bold hover:scale-105 transition"
        >
          Login
        </button>

        {loading && <p className="text-sm mt-2">Logging in...</p>}
        {formError && (
          <p className="text-red-400 text-sm mt-2">
            Error: {formError}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login_Layout;
