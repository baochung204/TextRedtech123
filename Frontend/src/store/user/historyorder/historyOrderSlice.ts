import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import OrderHistoryListApi, { PropOrderHistoryList } from 'src/api/user/orderhistory/orderhistory';



export interface PropsData {
  orderId: number;
  date: string;
  amountDiscount: number;
  priceAfterDiscount: number;
  point: number;
}

interface PropsHistoryOderList {
  content: PropsData[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

interface PropsHistoryOrderListResult {
  dataa: PropsHistoryOderList;
  loading: boolean;
  error: string | null;
}

const initialState: PropsHistoryOrderListResult = {
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
  async (object: PropOrderHistoryList = {}, thunkApi) => {
    try {
      const response = await OrderHistoryListApi.getOrderHistoryList(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const orderHistoryListSlice = createSlice({
  name: 'fetchHistoryOrderList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoryOrderListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistoryOrderListData.fulfilled, (state, action: PayloadAction<OrderData>) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchHistoryOrderListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default orderHistoryListSlice.reducer;
