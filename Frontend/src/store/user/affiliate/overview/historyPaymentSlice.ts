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

interface StrState {
  dataa: PropsData[];
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: [],
  loading: false,
  error: null,
};

export const fetchHistoryPaymentData = createAsyncThunk(
  'fetchHistoryPaymentData',
  async (_, thunkAPI) => {
    try {
      const response = await affiliateUserApi.getPaymentHistoryList();
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
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
