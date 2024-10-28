import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import overviewAffiliateApi, { PropsAffiliate } from 'src/api/admin/affiliate/affiliate';

export interface PropsData {
  orderId: number;
  publisherId: number;
  createDate: Date;
  publisherName: string;
  emailPublisher: string;
  phonePublisher: string;
  customerImage: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pointName: string;
  point: number;
  total: number;
  commission: number;
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

export const fetchOrderAffiliateListData = createAsyncThunk(
  'fetchOrderAffiliateList',
  async (object: PropsAffiliate = {}, thunkApi) => {
    try {
      const response = await overviewAffiliateApi.getListOrderAffiliate(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const orderAffiliateListSlice = createSlice({
  name: 'orderAffiliateList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderAffiliateListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOrderAffiliateListData.fulfilled,
        (state, action: PayloadAction<PropsAffiliateOderList>) => {
          state.loading = false;
          state.dataa = action.payload;
        },
      )
      .addCase(fetchOrderAffiliateListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default orderAffiliateListSlice.reducer;
