import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PropsAffiliate } from 'src/api/admin/resources/resources';
import affiliateUserApi from 'src/api/user/affiliate/affiliate';

interface PropsData {
  affiliateWithdrawHistoryId: number;
  finishDate: Date;
  requestDate: Date;
  withdrawalAmount: number;
  status: string;
  bill: string;
}

interface VoucherData {
  content: PropsData[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

interface StrState {
  dataa: VoucherData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    content: [],
    pageNo: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
    last: false,
  },
  loading: false,
  error: null,
};

export const fetchHistoryPaymentData = createAsyncThunk(
  'historypayment',
  async (object: PropsAffiliate = {}, thunkApi) => {
    try {
      const res = await affiliateUserApi.getPaymentHistoryList(object);
      console.log('historypayment', res.data);
      return res.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const historyPaymentSlice = createSlice({
  name: 'fetchHistoryPaymentData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoryPaymentData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistoryPaymentData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchHistoryPaymentData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default historyPaymentSlice.reducer;
