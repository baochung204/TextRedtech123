import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewAffiliateApi from 'src/api/admin/affiliate/affiliate';

export interface PropsDataWithdrawal {
  withDrawId: number;
  total: number;
  type: string;
  companyName: string;
  userName: string;
  bankBranch: string;
  bankName: string;
  taxCode: number;
  bankAccount: number;
  email: string;
}

interface StrState {
  dataa: PropsDataWithdrawal;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    withDrawId: 0,
    total: 0,
    type: '',
    companyName: '',
    userName: '',
    bankBranch: '',
    bankName: '',
    taxCode: 0,
    bankAccount: 0,
    email: '',
  },
  loading: false,
  error: null,
};

export const fetchDetailWithdrawalHistoryData = createAsyncThunk(
  'fetchDetailWithdrawalHistoryData',
  async (id: number, thunkApi) => {
    try {
      const response = await overviewAffiliateApi.getDetailWithdrawalHistory(id);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const detailWithdrawalHistorySlice = createSlice({
  name: 'detailWithdrawalHistorySlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDetailWithdrawalHistoryData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchDetailWithdrawalHistoryData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchDetailWithdrawalHistoryData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default detailWithdrawalHistorySlice.reducer;
