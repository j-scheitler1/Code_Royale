import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '@/firebase/userService';

const Register_Layout: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { register, loading, formError, user } = useRegister();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleRegister = async () => {
    const newUser = await register(email, password);
    if (newUser) navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-brand text-brand flex items-start justify-start p-4 font-hacker text-lg">
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
          onClick={handleRegister}
          className="self-start hover:font-bold hover:scale-105 transition"
        >
          Register
        </button>

        {loading && <p className="text-sm mt-2">Registering...</p>}
        {formError && (
          <p className="text-red-400 text-sm mt-2">
            Error: {formError}
          </p>
        )}
      </div>
    </div>
  );
};

export default Register_Layout;
