import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import accountantApi from 'src/api/admin/accountant/accountant';

interface PropsData {
  totalEInvoice: number;
  totalPoint: number;
  totalRevenue: number;
  commission: number;
  daXuat: number;
  choXuat: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalEInvoice: 0,
    totalPoint: 0,
    totalRevenue: 0,
    commission: 0,
    daXuat: 0,
    choXuat: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewBillData = createAsyncThunk(
  'fetchOverviewBillData',
  async (_, thunkApi) => {
    try {
      const response = await accountantApi.getOverviewBillAffiliate();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewBillAffiliateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewBillData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewBillData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewBillData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewBillAffiliateSlice.reducer;
