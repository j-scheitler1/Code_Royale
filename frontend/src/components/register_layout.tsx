import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register_Layout: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formError, setFormError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    firebaseError,
  ] = useCreateUserWithEmailAndPassword(auth);

  React.useEffect(() => {
    if (user) {
      setFormError(null);
      navigate('/dashboard');
    }
  }, [user, navigate]);

  React.useEffect(() => {
    if (firebaseError) {
      if (firebaseError.code === 'auth/email-already-in-use') {
        setFormError('Email already in use. Please try a different email.');
      } else if (firebaseError.code === 'auth/invalid-email') {
        setFormError('Invalid email format.');
      } else if (firebaseError.code === 'auth/weak-password') {
        setFormError('Password should be at least 6 characters.');
      } else {
        setFormError('Something went wrong. Please try again.');
      }
    }
  }, [firebaseError]);

  const handleRegister = () => {
    if (!email || !password) {
      setFormError('Please enter both email and password.');
      return;
    }

    createUserWithEmailAndPassword(email, password);
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
