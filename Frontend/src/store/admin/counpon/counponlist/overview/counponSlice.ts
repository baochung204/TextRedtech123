import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewCounponApi from 'src/api/admin/counpon/overview/Overview';

interface PropsData {
  totalVndCouponId: number;
  totalVndCoupon: number;
  totalUsed: number;
  percentUsed: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalVndCouponId: 0, // Example initial number
    totalVndCoupon: 0, // Example initial number
    totalUsed: 0, // Example initial number
    percentUsed: 0, // Example initial number
  },
  loading: false,
  error: null,
};

export const fetchOverviewCounponData = createAsyncThunk(
  'fetchOverviewCounpon',
  async (_, thunkApi) => {
    try {
      const response = await overviewCounponApi.getAllOverviewCounpon();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewCounponSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewCounponData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewCounponData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewCounponData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewCounponSlice.reducer;
