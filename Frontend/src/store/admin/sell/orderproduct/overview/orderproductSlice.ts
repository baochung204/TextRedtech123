import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sellAdminApi from 'src/api/admin/sell/sell';

interface PropsData {
  totalOrder: number;
  totalValue: number;
  totalPromotion: number;
  totalPayment: number;
  aov: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalOrder: 0,
    totalValue: 0,
    totalPromotion: 0,
    totalPayment: 0,
    aov: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewOrderProductData = createAsyncThunk(
  'fetchOverviewOrderProductData',
  async (_, thunkApi) => {
    try {
      const response = await sellAdminApi.getOverviewOrderProduct();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewOrderProductAdminSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewOrderProductData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewOrderProductData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewOrderProductData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewOrderProductAdminSlice.reducer;
