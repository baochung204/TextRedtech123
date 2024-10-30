import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboardApi from 'src/api/admin/dasboard/dashboard';

interface PropsData {
  totalCoupon: number;
  quantityCoupon: number;
  couponUsed: number;
  percentUsedCoupon: number;
  totalFlashSale: number;
  flashSaleUsed: number;
  revenue: number;
  percentUsedFlashSale: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalCoupon: 0,
    quantityCoupon: 0,
    couponUsed: 0,
    percentUsedCoupon: 0,
    totalFlashSale: 0,
    flashSaleUsed: 0,
    revenue: 0,
    percentUsedFlashSale: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewDiscountDashboardData = createAsyncThunk(
  'fetchOverviewDiscountDashboardData',
  async (_, thunkApi) => {
    try {
      const response = await dashboardApi.getOverviewDiscount();

      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewDiscountDashboardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewDiscountDashboardData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewDiscountDashboardData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewDiscountDashboardData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewDiscountDashboardSlice.reducer;
