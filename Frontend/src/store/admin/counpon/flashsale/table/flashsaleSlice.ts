import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PropsContractAffiliate } from 'src/api/admin/accountant/accountant';
import FlashSaleListApi from 'src/api/admin/counpon/flashsale/table/listflashsale';

interface PropsData {
  id: number;
  name: string;
  quantity: number;
  productName: string;
  productId: number;
  productImage: string;
  price: number;
  percent: number;
  priceAfterFlashSale: number;
  totalBuyFlashSales: number;
  totalRevenue: number;
  isUsed: boolean;
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

export const fetchFlashSaleListData = createAsyncThunk(
  'fetchCounponList',
  async (object: PropsContractAffiliate = {}, thunkApi) => {
    try {
      const response = await FlashSaleListApi.getFlashSaleList(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const flashsaleListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFlashSaleListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchFlashSaleListData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchFlashSaleListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default flashsaleListSlice.reducer;
