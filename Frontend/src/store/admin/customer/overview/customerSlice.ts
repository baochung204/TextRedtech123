import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerAdminApi from 'src/api/admin/cusomer/customer';

interface PropsData {
  totalCustomers: number;
  totalRevenue: number;
  totalIndividual: number;
  totalBusiness: number;
  totalPointBalance: number;
  totalPayingCustomers: number;
  totalPaypeesCustomers: number;
  percent: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalCustomers: 0,
    totalRevenue: 0,
    totalIndividual: 0,
    totalBusiness: 0,
    totalPointBalance: 0,
    totalPayingCustomers: 0,
    totalPaypeesCustomers: 0,
    percent: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewCustomerData = createAsyncThunk(
  'fetchOverviewCustomerData',
  async (_, thunkApi) => {
    try {
      const response = await customerAdminApi.getOverviewCustomer();

      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewCustomerAdminSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewCustomerData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewCustomerData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewCustomerData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewCustomerAdminSlice.reducer;
