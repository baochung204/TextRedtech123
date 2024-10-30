import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PropsContractAffiliate } from 'src/api/admin/accountant/accountant';
import counponListApi from 'src/api/admin/counpon/counponlist/Counponlist';

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

export const fetchCounponListData = createAsyncThunk(
  'fetchCounponHistory',
  async (object: PropsContractAffiliate = {}, thunkApi) => {
    try {
      const response = await counponListApi.getCounponList(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const counponListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCounponListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchCounponListData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchCounponListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default counponListSlice.reducer;
