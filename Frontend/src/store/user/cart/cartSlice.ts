import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartAPI from 'src/api/cart/cart';

interface PropsData {
  product_id: number;
  name: string;
  point: number;
  image_url: string;
  quantity: number;
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

export const fetchCartData = createAsyncThunk('fetchDataCart', async (_, thunkAPI) => {
  try {
    const response = await cartAPI.getAllCart();
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cartSlice.reducer;
