import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import affiliateApi from 'src/api/user/affiliate-account/affiliate-account';

interface AffiliateAccount {
  step: number;
  type: string;
  status: string;
  agreeToTheTerms: boolean;
  businessName: string;
  businessEmail: string;
  representativePosition: string;
  businessAddress: string;
  businessPhoneNumber: string;
  taxCode: string;
}
interface AffiliateAccountState {
  result: AffiliateAccount[];
}
interface StrState {
  data: AffiliateAccountState[];
  loading: boolean;
  error: string | null;
}
const initialState: StrState = {
  data: [],
  loading: false,
  error: null,
};
export const fetchaffiliateaccount = createAsyncThunk('affiliate-account', async (_, thunkApi) => {
  try {
    const response = await affiliateApi.getAllaffiliate();
    return response.data.result;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});
const affiliateApiSlice = createSlice({
  name: 'affiliate-account',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchaffiliateaccount.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchaffiliateaccount.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchaffiliateaccount.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    },
  },
});
export default affiliateApiSlice.reducer;
