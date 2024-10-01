import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { items } from '../../constants';

export interface TDonationItem {
  name: string;
  image: string;
  price: string;
  description: string;
  categoryIds: number[];
  donationItemId: number;
}

interface DonationsState {
  items: TDonationItem[];
  selectedDonationId: number | null;
  selectedDonationInformation: TDonationItem | null;
}

const initialState: DonationsState = {
  items,
  selectedDonationId: null,
  selectedDonationInformation: null,
};

const donationsSlice = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    resetDonations: () => initialState,
    updateSelectedDonationId: (state, action: PayloadAction<number | null>) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInformation = action.payload
        ? state.items.find(item => item.donationItemId === action.payload) || null
        : null; // Reset information if payload is null
    },
  },
});

// Export actions and reducer
export const { resetDonations, updateSelectedDonationId } = donationsSlice.actions;
export default donationsSlice.reducer;
