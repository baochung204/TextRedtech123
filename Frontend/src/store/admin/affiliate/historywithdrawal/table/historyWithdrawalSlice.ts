import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import overviewAffiliateApi, { PropsAffiliate } from 'src/api/admin/affiliate/affiliate';

export interface PropsData {
  withdrawId: number;
  publisherType: string;
  publisherName: string;
  requestDate: Date;
  completeDate: Date;
  email: string;
  phoneNumber: number;
  amountWithdrawn: number;
  bankAccount: number;
  bankName: string;
  accountOwnerName: string;
  bankBranch: string;
  status: string;
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

export const fetchWithdrawalHistoryListData = createAsyncThunk(
  'fetchWithdrawalHistoryList',
  async (object: PropsAffiliate = {}, thunkApi) => {
    try {
      const response = await overviewAffiliateApi.getListWithdrawalHistory(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const WithdrawalHistoryDataListSlice = createSlice({
  name: 'WithdrawalHistoryDataList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWithdrawalHistoryListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWithdrawalHistoryListData.fulfilled,
        (state, action: PayloadAction<PropsAffiliateOderList>) => {
          state.loading = false;
          state.dataa = action.payload;
        },
      )
      .addCase(fetchWithdrawalHistoryListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default WithdrawalHistoryDataListSlice.reducer;
