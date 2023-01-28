import { SignUpForm } from '../index';

import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  singInWithGoogleRedirect,
} from '../../utils/firebase/firebase';

const SignIn = () => {
  useEffect(
    () => async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    },
    []
  );

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={singInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
