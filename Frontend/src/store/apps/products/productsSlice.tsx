import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "src/types/apps/product";

interface ProductState {
  data: Product[],
  loading: boolean,
  error: string | null
}
const initialState: ProductState = {
  data: [],
  loading: false,
  error: null
}

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const res = await axios.get('http://localhost:9999/product')
    console.log('file', res.data);
    return res.data;
  }
);

const ProductSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.data = action.payload;
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch integrations';
    });
  }
})
export default ProductSlice.reducer;