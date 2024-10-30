import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import sellAdminApi from 'src/api/admin/sell/sell';

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

interface FlashSaleResponse {
  flashSaleId: number;
  productId: number;
  productName: string;
  productImgUrl: string;
  point: number;
  priceAfterFlashSale: number;
  percent: number;
}

interface OrderData {
  orderId: number;
  date: string;
  point: number;
  amountDiscount: number;
  priceAfterDiscount: number;
  flashSaleResponse: FlashSaleResponse;
  orderLines: OrderLine[];
}

interface StrState {
  dataa: OrderData;
  loading: boolean;
  error: string | null;
}

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

export const fetchOrderProductDetailData = createAsyncThunk(
  'fetchOrderProductDetail',
  async (orderId: number, thunkApi) => {
    try {
      const response = await sellAdminApi.getDetailOrderProduct(orderId);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const orderHistoryDetailSlice = createSlice({
  name: 'orderHistoryDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderProductDetailData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderProductDetailData.fulfilled, (state, action: PayloadAction<OrderData>) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchOrderProductDetailData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default orderHistoryDetailSlice.reducer;
