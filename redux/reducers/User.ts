import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  firstName: string;
  lastName: string;
  userId: number;
}

const initialState: UserState = {
  firstName: 'sohrab',
  lastName: 'hossain',
  userId: 1,
};

const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
      state.firstName = action.payload.firstName;
    },
  },
});

// Exporting the reducers here from the "user" slice
export const { updateFirstName } = User.actions;
export default User.reducer;
