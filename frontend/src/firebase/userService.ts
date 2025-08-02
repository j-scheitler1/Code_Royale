import { useState, useEffect, useCallback } from 'react';
import { auth, db } from './firebase';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { browserLocalPersistence, type User, setPersistence } from 'firebase/auth';

const FIREBASE_REGISTER_ERROR_MAP: Record<string, string> = {
  'auth/email-already-in-use': 'Email already in use. Please try a different email.',
  'auth/invalid-email': 'Invalid email format.',
  'auth/weak-password': 'Password should be at least 6 characters.',
};

const FIREBASE_LOGIN_ERROR_MAP: Record<string, string> = {
  'auth/user-not-found': 'No user found with this email.',
  'auth/wrong-password': 'Incorrect password. Please try again.',
  'auth/invalid-email': 'Invalid email format.',
};

const addUserToFirestore = async (user: User) => {
  if (user) {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      email: user.email,
      lastLogin: serverTimestamp(),
      createdAt: serverTimestamp(),
    }, {merge: true});
  }
}

const updateUserInFirestore = async (user: User) => {
  if (user) {
    const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        email: user.email,
        lastLogin: serverTimestamp(),
      }, { merge: true });
  }
}

export const useRegister = () => {
  const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);
  const [formError, setFormError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!firebaseError) return;
    const code = firebaseError.code;
    console.log(firebaseError.code);
    const message = FIREBASE_REGISTER_ERROR_MAP[code] ?? 'Something went wrong. Please try again.';
    setFormError(message)
  }, [firebaseError]);

  const register = useCallback(
    async (email: string, password: string) => {
      setFormError(null);
      if (!email || !password) {
        setFormError('Please enter both email and password.');
        return null;
      }

      const result = await createUserWithEmailAndPassword(email, password);
      if (!result) {
        setFormError('Registration failed. Please try again.');
        return null;
      }
      await addUserToFirestore(result.user);
      return result.user;
    },
    [createUserWithEmailAndPassword]
  );

  return {
    register,
    loading,
    formError,
    user: user?.user ?? null,
    setFormError,
  };
}

export const useLogin = () => {
  const [signInWithEmailAndPassword, user, loading, firebaseError] = useSignInWithEmailAndPassword(auth);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (!firebaseError) return;
    const code = firebaseError.code;
    const message = FIREBASE_LOGIN_ERROR_MAP[code] ?? 'User not found. Incorrect email or password.';
    setFormError(message)
  }, [firebaseError]);

  const login = useCallback(
    async (email: string, password: string) => {
      setFormError(null);
      if (!email || !password) {
        setFormError('Please enter both email and password.');
        return null;
      }
      await setPersistence(auth, browserLocalPersistence);
      const result = await signInWithEmailAndPassword(email, password);
      if (!result) {
        setFormError('Registration failed. Please try again.');
        return null;
      }
      await updateUserInFirestore(result.user);
      return result.user;
    },
    [signInWithEmailAndPassword]
  );

  return {
    login,
    loading,
    formError,
    user: user?.user ?? null,
    setFormError,
  };
}

