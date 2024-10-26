import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import contractApi from 'src/api/admin/contract/contract';

interface PropsData {
  totalContract: number;
  rejectedContract: number;
  signedContract: number;
  pendingContract: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalContract: 0,
    rejectedContract: 0,
    signedContract: 0,
    pendingContract: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewContractRuleData = createAsyncThunk(
  'fetchOverviewContractRuleData ',
  async (_, thunkApi) => {
    try {
      const response = await contractApi.getOverviewContractRule();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewContractRuleSlice = createSlice({
  name: 'overviewContractRuleSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewContractRuleData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewContractRuleData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewContractRuleData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewContractRuleSlice.reducer;
