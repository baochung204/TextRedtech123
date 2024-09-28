// src/redux/integrationSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { order_user } from 'src/types/apps/order_user';
// Define the slice state interface
interface OrderUserState {
  data: order_user[]; // List of integrations
  loading: boolean; // Loading state for API requests
  error: string | null; // Error state for failed requests
}

// Initial state
const initialState: OrderUserState = {
  data: [], // Initially an empty array
  loading: false,
  error: null,
};

// Thunk to fetch integration data
export const fetchOrderUser = createAsyncThunk('orderuser/fetchOrderUser', async () => {
  const response = await axios.get('http://localhost:9999/orderuser');
  console.log('tet', response.data);

  return response.data;
});

// Slice
// eslint-disable-next-line react-refresh/only-export-components
const orderuser = createSlice({
  name: 'order_user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending state (API request started)
    builder.addCase(fetchOrderUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Handle fulfilled state (API request succeeded)
    builder.addCase(fetchOrderUser.fulfilled, (state, action: PayloadAction<order_user[]>) => {
      state.loading = false;
      state.data = action.payload;
    });

    // Handle rejected state (API request failed)
    builder.addCase(fetchOrderUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch integrations';
    });
  },
});

export default orderuser.reducer;
