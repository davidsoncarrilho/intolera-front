import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface Props {
  e: any;
  listeners: any[];
  email: string;
  password: string;
  emailFormErrors: string;
  passwordFormErrors: string;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  setPasswordFormErrors: React.Dispatch<React.SetStateAction<string>>;
}

function handleSignIn({
  e,
  listeners,
  passwordFormErrors,
  emailFormErrors,
  email,
  password,
  setIsSubmit,
  setPasswordFormErrors,
}: Props) {
  e.preventDefault();
  const auth = getAuth();

  // removes initial firebase auth listener from app load
  listeners.forEach((unsubscribe: any) => unsubscribe());

  if (passwordFormErrors === '' && emailFormErrors === '') {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        setIsSubmit(true);
      })
      .catch((error) => {
        setPasswordFormErrors(error.message);
      });
  }
}

export default handleSignIn;