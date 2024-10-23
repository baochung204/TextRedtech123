// src/redux/integrationSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import userApi from 'src/api/userResource/UserResource';
import { Result } from 'src/types/apps/str';

// Define the slice state interface
interface StrState {
  data: Result; // List of integrations
  loading: boolean; // Loading state for API requests
  error: string | null; // Error state for failed requests
}

// Initial state
const initialState: StrState = {
  data: {
    content: [],
    last: false,
    pageNo: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0
  }, 
  loading: false,
  error: null,
};
interface FetchParams {
  page: number;
  size: number;
}
// Thunk to fetch integration data
export const fetchStr = createAsyncThunk(
  'str/fetchStr',
  async ({ page, size }: FetchParams) => {
    try {
      const response = await userApi.getAllCampaigns(page, size);
      // console.log('cam', response.data);
      return response.data.result;

    } catch (error) {
      console.log("Error", error)
    }
  });

// Slice
// eslint-disable-next-line react-refresh/only-export-components
const StrSlice = createSlice({
  name: 'str',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending state (API request started)
    builder.addCase(fetchStr.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Handle fulfilled state (API request succeeded)
    builder.addCase(fetchStr.fulfilled, (state, action: PayloadAction<Result>) => {
      state.loading = false;
      state.data = action.payload;
    });

    // Handle rejected state (API request failed)
    builder.addCase(fetchStr.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch integrations';
    });
  },
});

export default StrSlice.reducer;
