import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { setPersistence, browserLocalPersistence } from 'firebase/auth';

const Login_Layout: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formError, setFormError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    firebaseError,
  ] = useSignInWithEmailAndPassword(auth);

  React.useEffect(() => {
    if (user) {
      setFormError(null);
      navigate('/dashboard');
    }
  }, [user, navigate]);

  React.useEffect(() => {
    if (firebaseError) {
      if (firebaseError.code === 'auth/user-not-found') {
        setFormError('No user found with this email.');
      } else if (firebaseError.code === 'auth/wrong-password') {
        setFormError('Incorrect password. Please try again.');
      } else if (firebaseError.code === 'auth/invalid-email') {
        setFormError('Invalid email format.');
      } else {
        setFormError('Login failed. Please try again.');
      }
    }
  }, [firebaseError]);

  const handleLogin = () => {

    if (!email || !password) {
      setFormError('Please enter both email and password.');
      return;
    }
    setPersistence(auth, browserLocalPersistence)
    signInWithEmailAndPassword(email, password);
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
