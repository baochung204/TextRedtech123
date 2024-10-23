import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sellAdminApi from 'src/api/admin/sell/sell';

interface PropsData {
  totalProduct: number;
  totalQuantity: number;
  totalRevenue: number;
  quantityOnProduct: number;
  revenueOnProduct: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalProduct: 0,
    totalQuantity: 0,
    totalRevenue: 0,
    quantityOnProduct: 0,
    revenueOnProduct: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewProductData = createAsyncThunk(
  'fetchOverviewProductData',
  async (_, thunkApi) => {
    try {
      const response = await sellAdminApi.getOverviewProduct();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewProductAdminSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewProductData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewProductData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewProductData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewProductAdminSlice.reducer;
