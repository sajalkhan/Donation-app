import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  displayName: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
  profileImage: string;
}

const initialState: UserState = {
  email: '',
  token: '',
  displayName: '',
  isLoggedIn: false,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

interface LogInPayload {
  email: string;
  token: string;
  displayName: string;
  profileImage?: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<LogInPayload>) => {
      return { ...state, ...{ isLoggedIn: true }, ...action.payload };
    },
    resetToInitialState: () => initialState,
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Export actions and reducer
export const { logIn, resetToInitialState, updateToken } = userSlice.actions;
export default userSlice.reducer;
