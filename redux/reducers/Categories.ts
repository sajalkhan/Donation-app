import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories } from '../../constants';

interface Category {
  categoryId: number;
  name: string;
}

interface CategoriesState {
  categories: Category[];
  selectedCategoryId: number;
}

// Initial state
const initialState: CategoriesState = {
  categories: categories,
  selectedCategoryId: 1,
};

// Create the slice
const Categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

// Export actions and reducer
export const { resetCategories, updateSelectedCategoryId } = Categories.actions;
export default Categories.reducer;
