import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboardApi from 'src/api/admin/dasboard/dashboard';

interface PropsData {
  publisher: number;
  customer: number;
  order: number;
  revenue: number;
  commission: number;
  publisherBalance: number;
  walletBalance: number;
  pendingProcessing: number;
  clientRatePub: number;
  orderRatePub: number;
  revenueRatePub: number;
  commissionRatePub: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    publisher: 0,
    customer: 0,
    order: 0,
    revenue: 0,
    commission: 0,
    publisherBalance: 0,
    walletBalance: 0,
    pendingProcessing: 0,
    clientRatePub: 0,
    orderRatePub: 0,
    revenueRatePub: 0,
    commissionRatePub: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewAffiliateDashboardData = createAsyncThunk(
  'fetchOverviewAffiliateDashboardData',
  async (_, thunkApi) => {
    try {
      const response = await dashboardApi.getOverviewAffiliate();

      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewAffiliateDashboardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewAffiliateDashboardData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewAffiliateDashboardData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewAffiliateDashboardData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewAffiliateDashboardSlice.reducer;
