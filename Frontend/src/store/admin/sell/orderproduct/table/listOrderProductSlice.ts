import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropsAffiliate } from 'src/api/admin/affiliate/affiliate';
import sellAdminApi from 'src/api/admin/sell/sell';

export interface PropsData {
  orderId: number;
  date: Date;
  userId: number;
  nameUser: string;
  point: number;
  promotion: number;
  payment: number;
}

interface PropsAffiliateOderList {
  content: PropsData[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

interface PropsOrderAffiliateList {
  dataa: PropsAffiliateOderList;
  loading: boolean;
  error: string | null;
}

const initialState: PropsOrderAffiliateList = {
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

export const fetchOrderProductListData = createAsyncThunk(
  'fetchOrderProductList',
  async (object: PropsAffiliate = {}, thunkApi) => {
    try {
      const response = await sellAdminApi.getListOrderSell(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const orderProductListSlice = createSlice({
  name: 'orderAffiliateList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderProductListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOrderProductListData.fulfilled,
        (state, action: PayloadAction<PropsAffiliateOderList>) => {
          state.loading = false;
          state.dataa = action.payload;
        },
      )
      .addCase(fetchOrderProductListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default orderProductListSlice.reducer;
