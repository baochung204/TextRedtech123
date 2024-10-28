import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import contractApi, { PropsContractAffiliate } from 'src/api/admin/contract/contract';

export interface PropsData {
  businessId: number;
  userId: number;
  createdDate: Date;
  signedDate: Date;
  accountType: string;
  companyName: string;
  taxCode: string;
  address: string;
  representativeName: string;
  representativePosition: string;
  phoneNumber: string;
  emailCompany: string;
  status: string;
}

interface PropsContractRule {
  content: PropsData[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

interface PropsContractRuleList {
  dataa: PropsContractRule;
  loading: boolean;
  error: string | null;
}

const initialState: PropsContractRuleList = {
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

export const fetchContractRuleListData = createAsyncThunk(
  'fetchContractRuleListData',
  async (object: PropsContractAffiliate = {}, thunkApi) => {
    try {
      const response = await contractApi.getListContractRule(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const contractRuleListSlice = createSlice({
  name: 'contractRuleList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContractRuleListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchContractRuleListData.fulfilled,
        (state, action: PayloadAction<PropsContractAffiliate>) => {
          state.loading = false;
          state.dataa = action.payload;
        },
      )
      .addCase(fetchContractRuleListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default contractRuleListSlice.reducer;
