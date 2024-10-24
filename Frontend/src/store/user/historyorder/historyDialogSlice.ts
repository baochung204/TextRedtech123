import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import OrderHistoryListApi from 'src/api/user/orderhistory/orderhistory';

// Define the order line interface
interface OrderLine {
  orderLineId: number;
  productName: string;
  productImage: string;
  category: string;
  quantity: number;
  point: number;
  amountDiscount: number;
  priceAfterDiscount: number;
}

// Define the response structure for flash sale (empty here, but could be expanded if needed)
interface FlashSaleResponse {
  flashSaleId: number;
  productId: number;
  productName: string;
  productImgUrl: string;
  point: number;
  priceAfterFlashSale: number;
  percent: number;
}

// Define the main order data interface
interface OrderData {
  orderId: number;
  date: string; // Date as string in ISO format
  point: number;
  amountDiscount: number;
  priceAfterDiscount: number;
  flashSaleResponse: FlashSaleResponse;
  orderLines: OrderLine[];
}

// Define the state interface
interface StrState {
  dataa: OrderData;
  loading: boolean;
  error: string | null;
}

// Set the initial state with the correct types
const initialState: StrState = {
  dataa: {
    orderId: 0,
    date: '',
    point: 0,
    amountDiscount: 0,
    priceAfterDiscount: 0,
    flashSaleResponse: {
      flashSaleId: 0,
      productId: 0,
      productName: '',
      productImgUrl: '',
      point: 0,
      priceAfterFlashSale: 0,
      percent: 0,
    },
    orderLines: [],
  },
  loading: false,
  error: null,
};

export const fetchHistoryOrderDetailData = createAsyncThunk(
  'fetchHistoryOrderList',
  async (id: number, thunkApi) => {
    try {
      const response = await OrderHistoryListApi.getOrderHistoryDetail(id);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const orderHistoryDetailListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHistoryOrderDetailData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchHistoryOrderDetailData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchHistoryOrderDetailData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default orderHistoryDetailListSlice.reducer;
