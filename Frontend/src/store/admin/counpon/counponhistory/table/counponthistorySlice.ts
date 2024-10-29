import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropsContractAffiliate } from 'src/api/admin/accountant/accountant';
import CounponHistoryApi from 'src/api/admin/counpon/historycounpon/historycounpon';

interface PropsData {
  orderVndId: number;
  vndCouponName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  type: string;
  valueCoupon: number | null;
  percentCoupon: number | null;
  value: string;
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

export const fetchCounponHistoryData = createAsyncThunk(
  'fetchCounponHistory',
  async (object: PropsContractAffiliate = {}, thunkApi) => {
    try {
      const response = await CounponHistoryApi.getAllHistoryCounpon(object);
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
    [fetchCounponHistoryData.fulfilled.type]: (state, action: PayloadAction<VoucherData>) => {
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
