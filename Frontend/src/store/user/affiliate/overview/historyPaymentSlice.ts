import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

interface FetchParams {
  page: number;
  pageSize: number;
}

export const fetchHistoryPaymentData = createAsyncThunk(
  'historypayment',
  async ({ page = 1, pageSize = 5 }: FetchParams) => {
    try {
      const res = await affiliateUserApi.getPaymentHistoryList(page, pageSize);
      console.log('historypayment', res.data);
      return res.data.result;
    } catch (error) {
      console.log('lỗi', error);
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
