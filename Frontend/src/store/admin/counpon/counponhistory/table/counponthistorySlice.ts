import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CounponHistoryApi from 'src/api/admin/counpon/historycounpon/historycounpon';

interface PropsData {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  code: string;
  totalCoupon: number;
  type: string;
  valueCoupon: number;
  status: string;
  totalUsed: number;
  open: boolean;
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

export const fetchCounponHistoryData = createAsyncThunk(
  'fetchCounponHistory',
  async (_, thunkApi) => {
    try {
      const response = await CounponHistoryApi.getAllHistoryCounpon();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const counponhistorySlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCounponHistoryData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchCounponHistoryData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchCounponHistoryData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default counponhistorySlice.reducer;
