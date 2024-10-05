import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import { updateToken } from '../redux/reducers/User';

export interface User {
  uid: string;
  displayName: string;
  email: string;
}

export interface LoginResponse {
  status: boolean;
  data?: {
    displayName: string;
    email: string;
    token: string;
  };
  error?: string;
}

export interface ErrorResponse {
  error: string;
}

export const createUser = async (fullName: string, email: string, password: string): Promise<User | ErrorResponse> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    await userCredential.user.updateProfile({ displayName: fullName });

    return {
      uid: userCredential.user.uid,
      displayName: userCredential.user.displayName || '',
      email: userCredential.user.email || '',
    };
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return { error: 'The email you entered is already in use.' };
    } else if (error.code === 'auth/invalid-email') {
      return { error: 'Please enter a valid email address.' };
    } else if (error.code === 'auth/weak-password') {
      return { error: 'Password should be at least 6 characters' };
    } else {
      return { error: 'Something went wrong with your request.' };
    }
  }
};

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();

    return {
      status: true,
      data: {
        displayName: response.user.displayName || '',
        email: response.user.email || '',
        token,
      },
    };
  } catch (error: any) {
    if (error.code === 'auth/wrong-password') {
      return { status: false, error: 'Please enter a correct password' };
    } else if (error.code === 'auth/invalid-credential') {
      return { status: false, error: 'Email or password is incorrect!' };
    } else if (error.code === 'auth/user-not-found') {
      return {
        status: false,
        error: 'The email you entered does not exist. Please create a new account.',
      };
    }
    return { status: false, error: 'Something went wrong' };
  }
};

export const logOut = async () => {
  await auth().signOut();
};

export const checkToken = async (): Promise<string | Error> => {
  try {
    // Retrieve the token
    const token = await auth().currentUser?.getIdToken(true);

    if (token) {
      console.log('We are updating the token for you');
      // Dispatch the updated token to the Redux store
      store.dispatch(updateToken(token));
      return token;
    } else {
      throw new Error('No user is currently authenticated.');
    }
  } catch (error: any) {
    console.log('Error checking token:', error); // Log the error for debugging
    return error; // Return the error object for further handling
  }
};
