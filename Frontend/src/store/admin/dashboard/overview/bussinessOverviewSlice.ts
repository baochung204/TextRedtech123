import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboardApi from 'src/api/admin/dasboard/dashboard';

interface PropsData {
  totalCustomer: number;
  cvr: number;
  totalOrder: number;
  totalRevenue: number;
  ratePayingCustomer: number;
  revenueRateToAllCustomers: number;
  revenueRateToPayingCustomers: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalCustomer: 0,
    cvr: 0,
    totalOrder: 0,
    totalRevenue: 0,
    ratePayingCustomer: 0,
    revenueRateToAllCustomers: 0,
    revenueRateToPayingCustomers: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewBussinessDashboardData = createAsyncThunk(
  'fetchOverviewBussinessDashboardData',
  async (_, thunkApi) => {
    try {
      const response = await dashboardApi.getOverviewBussinessAdmin();

      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewBussinessDashboardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewBussinessDashboardData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewBussinessDashboardData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewBussinessDashboardData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewBussinessDashboardSlice.reducer;
