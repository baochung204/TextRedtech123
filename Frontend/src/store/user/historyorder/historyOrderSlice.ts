import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import OrderHistoryListApi from 'src/api/user/orderhistory/orderhistory';

export interface PropsData {
  orderId: number;
  date: Date;
  // point: number;
  amountDiscount: number;
  priceAfterDiscount: number;
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

export const fetchHistoryOrderListData = createAsyncThunk(
  'fetchHistoryOrderList',
  async (_, thunkApi) => {
    try {
      const response = await OrderHistoryListApi.getOrderHistoryList();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const orderHistoryListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHistoryOrderListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchHistoryOrderListData.fulfilled.type]: (state, action: PayloadAction<VoucherData> ) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchHistoryOrderListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default orderHistoryListSlice.reducer;
