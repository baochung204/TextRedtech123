import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import contractApi, { PropsContractAffiliate } from 'src/api/admin/contract/contract';

export interface PropsData {
  affiliateId: number;
  userId: number;
  createDate: Date;
  signedDate: Date;
  accountType: string;
  phoneNumber: number;
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

export const fetchContractAffiliateListData = createAsyncThunk(
  'fetchContractAffiliateList',
  async (object: PropsContractAffiliate = {}, thunkApi) => {
    try {
      const response = await contractApi.getListContractAffiliate(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const contractAffiliateListSlice = createSlice({
  name: 'fetchHistoryOrderList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContractAffiliateListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchContractAffiliateListData.fulfilled,
        (state, action: PayloadAction<PropsAffiliateOderList>) => {
          state.loading = false;
          state.dataa = action.payload;
        },
      )
      .addCase(fetchContractAffiliateListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default contractAffiliateListSlice.reducer;
