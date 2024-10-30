import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Selected {
  selecteds: string;
  selectcategory: string | undefined | null;
}

const initialState: Selected = {
  selecteds: 'personal',
  selectcategory: 'all',
};

const SelectItem = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setSelected(state, action: PayloadAction<string>) {
      state.selecteds = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectcategory = action.payload;
    },
  },
});

export const { setSelected, setSelectedCategory } = SelectItem.actions;
export default SelectItem.reducer;
