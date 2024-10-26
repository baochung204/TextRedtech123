import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewAffiliateApi from 'src/api/admin/affiliate/affiliate';

interface PropsData {
  totalPublisher: number;
  totalOrder: number;
  totalCustomers: number;
  totalCommission: number;
  totalOutstanding: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalPublisher: 0,
    totalOrder: 0,
    totalCustomers: 0,
    totalCommission: 0,
    totalOutstanding: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewPublisherData = createAsyncThunk(
  'fetchOverviewPublisherData',
  async (_, thunkApi) => {
    try {
      const response = await overviewAffiliateApi.getAllOverviewPublisher();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewOrderPublisherSlice = createSlice({
  name: 'overviewOrderAffiliateSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewPublisherData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewPublisherData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewPublisherData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewOrderPublisherSlice.reducer;
