// src/redux/integrationSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { customer_affiliate } from 'src/types/apps/customer_affiliate';
// Define the slice state interface
interface CustomerAffiliateState {
  data: customer_affiliate[]; // List of integrations
  loading: boolean; // Loading state for API requests
  error: string | null; // Error state for failed requests
}

// Initial state
const initialState: CustomerAffiliateState = {
  data: [], // Initially an empty array
  loading: false,
  error: null,
};

// Thunk to fetch integration data
export const fetchCustomer = createAsyncThunk(
  'customeraffiliate/fetchCustomeraffiliate',
  async () => {
    const response = await axios.get('http://localhost:9999/customer_affiliate');
    console.log('tet', response.data);

    return response.data;
  },
);

// Slice
// eslint-disable-next-line react-refresh/only-export-components
const customerSliceAffiliate = createSlice({
  name: 'customeraffiliate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending state (API request started)
    builder.addCase(fetchCustomer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Handle fulfilled state (API request succeeded)
    builder.addCase(
      fetchCustomer.fulfilled,
      (state, action: PayloadAction<customer_affiliate[]>) => {
        state.loading = false;
        state.data = action.payload;
      },
    );

    // Handle rejected state (API request failed)
    builder.addCase(fetchCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch integrations';
    });
  },
});

export default customerSliceAffiliate.reducer;
