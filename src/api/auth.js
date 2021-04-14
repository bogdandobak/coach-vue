import axios from 'axios';

const SIGNUP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiBe34SKQTzf-N60TFfbtPydkSE1L4zbY';
const SIGNIN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiBe34SKQTzf-N60TFfbtPydkSE1L4zbY';

export const setSignIn = async (user, mode) => {
  const url = mode === 'login' ? SIGNIN_URL : SIGNUP_URL
  const response = await axios.post(url, user);
  
  try {
    const result = await response.data;

    return result
  } catch (error) {
    throw new Error(error)
  }
};
