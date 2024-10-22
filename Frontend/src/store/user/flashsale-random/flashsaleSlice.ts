import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import flashSaleApi from 'src/api/user/flashsale/flashsale';

interface PropsData {
  flashSaleId: number;
  productId: number;
  productName: string;
  productImgUrl: string;
  point: number;
  priceAfterFlashSale: number;
  percent: number;
  displayTime: number;
}

interface StrState {
  dataa: PropsData[];
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: [],
  loading: false,
  error: null,
};

export const fetchFlashSaleData = createAsyncThunk('fetchFlashSaleData', async (_, thunkAPI) => {
  try {
    const response = await flashSaleApi.getFlashSaleRandom();
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});

const cartSlice = createSlice({
  name: 'flashSaleRandom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlashSaleData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlashSaleData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchFlashSaleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cartSlice.reducer;
