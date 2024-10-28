import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import overviewAffiliateApi, { PropsAffiliate } from 'src/api/admin/affiliate/affiliate';

export interface PropsData {
  id: number;
  name: string;
  email: string;
  phoneNumber: number;
  type: string;
  registerDate: Date;
  accountStatus: string;
  rank: string;
  totalCustomer: number;
  totalOrder: number;
  totalCommission: number;
  totalClick: number;
  cvr: number;
  balance: number;
  inProcessing: number;
  totalAmountWithdrawn: number;
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

export const fetchPublisherListData = createAsyncThunk(
  'fetchPublisherList',
  async (object: PropsAffiliate = {}, thunkApi) => {
    try {
      const response = await overviewAffiliateApi.getListPublisherAffiliate(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const publisherListSlice = createSlice({
  name: 'publisherList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublisherListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPublisherListData.fulfilled,
        (state, action: PayloadAction<PropsAffiliateOderList>) => {
          state.loading = false;
          state.dataa = action.payload;
        },
      )
      .addCase(fetchPublisherListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default publisherListSlice.reducer;
