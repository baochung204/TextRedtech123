import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboardApi from 'src/api/admin/dasboard/dashboard';

interface PropsData {
  order: number;
  revenue: number;
  revenueRateProduct: number;
  purchasesRateProducts: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    order: 0,
    revenue: 0,
    revenueRateProduct: 0,
    purchasesRateProducts: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewRpointData = createAsyncThunk(
  'fetchOverviewRpointData',
  async (_, thunkApi) => {
    try {
      const response = await dashboardApi.getOverviewRpointAdmin();

      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewRpointDashboardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewRpointData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewRpointData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewRpointData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewRpointDashboardSlice.reducer;
