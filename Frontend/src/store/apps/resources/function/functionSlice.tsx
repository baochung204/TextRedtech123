// src/redux/integrationSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import userApi from 'src/api/userResource/UserResource';
import { Functions } from 'src/types/apps/function';
// Define the slice state interface

interface FunctionState {
  data: Functions[]; // List of integrations
  loading: boolean; // Loading state for API requests
  error: string | null; // Error state for failed requests
}

// Initial state
const initialState: FunctionState = {
  data: [], // Initially an empty array
  loading: false,
  error: null,
};
interface FetchParams {
  page: number;
  size: number;
}
// Thunk to fetch integration data
export const fetchFunction = createAsyncThunk(
  'function/fetchFunction',
  async ({ page, size }: FetchParams) => {
    try {
      const response = await userApi.getAllFunction(page, size);
      console.log('function', response.data);

      return response.data.result;

    } catch (error) {
      console.log("Error", error)
    }
  });

// Slice
// eslint-disable-next-line react-refresh/only-export-components
const FunctionSlice = createSlice({
  name: 'function',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending state (API request started)
    builder.addCase(fetchFunction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Handle fulfilled state (API request succeeded)
    builder.addCase(fetchFunction.fulfilled, (state, action: PayloadAction<Functions[]>) => {
      state.loading = false;
      state.data = action.payload;
    });

    // Handle rejected state (API request failed)
    builder.addCase(fetchFunction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch integrations';
    });
  },
});

export default FunctionSlice.reducer;
