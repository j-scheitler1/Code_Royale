import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login_Layout: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password}),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        alert(`Login failed: ${data.error}`);
      }
    } catch (error) {
      alert('Something went wrong.' + error);
    }
  };

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
      </div>
    </div>
  );
};

export default Login_Layout;
