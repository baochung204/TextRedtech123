import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewFlashsaleApi from 'src/api/admin/counpon/flashsale/overview/overviewflashsale';

interface PropsData {
  totalFlashSale: number | null;
  totalQuantity: number | null;
  totalUsed: number | null;
  percentUsed: number | null;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalFlashSale: null,
    totalQuantity: null,
    totalUsed: null,
    percentUsed: null,
  },
  loading: false,
  error: null,
};

export const fetchOverviewFlashsaleData = createAsyncThunk(
  'fetchOverviewFlashsale',
  async (_, thunkApi) => {
    try {
      const response = await overviewFlashsaleApi.getAllOverviewFlashsale();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewFlashsaleSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewFlashsaleData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewFlashsaleData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewFlashsaleData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewFlashsaleSlice.reducer;
