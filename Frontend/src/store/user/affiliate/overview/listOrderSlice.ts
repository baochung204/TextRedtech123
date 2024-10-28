import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PropsAffiliate } from 'src/api/admin/resources/resources';
import affiliateUserApi from 'src/api/user/affiliate/affiliate';

export interface PropsData {
  orderId: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderDate: string;
  totalValue: number;
  commission: number;
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

export const fetchOrderListData = createAsyncThunk(
  'file/fetchFile',
  async (object: PropsAffiliate = {}, thunkApi) => {
    try {
      const res = await affiliateUserApi.getOrderList(object);
      console.log('OrderList', res.data);
      return res.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const listOrderSlice = createSlice({
  name: 'flashSaleRandom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderListData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchOrderListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default listOrderSlice.reducer;
