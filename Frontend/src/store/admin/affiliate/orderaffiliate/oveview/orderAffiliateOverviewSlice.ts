import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewAffiliateApi from 'src/api/admin/affiliate/affiliate';

interface PropsData {
  totalOrders: number;
  totalRPoints: number;
  totalRevenue: number;
  totalCommission: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalOrders: 0,
    totalRPoints: 0,
    totalRevenue: 0,
    totalCommission: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewOrderAffiliateData = createAsyncThunk(
  'fetchOverviewOrderAffiliateData',
  async (_, thunkApi) => {
    try {
      const response = await overviewAffiliateApi.getAllOverviewOrderAffiliate();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewOrderAffiliateSlice = createSlice({
  name: 'overviewOrderAffiliateSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewOrderAffiliateData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewOrderAffiliateData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewOrderAffiliateData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewOrderAffiliateSlice.reducer;
