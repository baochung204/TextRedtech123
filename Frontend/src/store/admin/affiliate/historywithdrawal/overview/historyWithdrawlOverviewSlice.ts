import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewAffiliateApi from 'src/api/admin/affiliate/affiliate';

interface PropsData {
  totalRequests: number;
  totalWithdrawals: number;
  totalProcessed: number;
  totalPending: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalRequests: 0,
    totalWithdrawals: 0,
    totalProcessed: 0,
    totalPending: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewWithdrawalHistoryData = createAsyncThunk(
  'fetchOverviewWithdrawalHistoryData',
  async (_, thunkApi) => {
    try {
      const response = await overviewAffiliateApi.getAllOverviewWithdrawalHistory();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewWithdrawalHistorySlice = createSlice({
  name: 'overviewOrderAffiliateSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewWithdrawalHistoryData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewWithdrawalHistoryData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewWithdrawalHistoryData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewWithdrawalHistorySlice.reducer;
