import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register_Layout: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
        navigate('/dashboard');
      } else {
        alert(`Registration failed: ${data.error}`);
      }
    } catch (error) {
      alert('Something went wrong.' + error);
    }
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
      </div>
    </div>
  );
};

export default Register_Layout;
