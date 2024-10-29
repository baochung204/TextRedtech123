/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsType } from './type/productsType';
import productsApi, { PropProducts } from 'src/api/userProducts/products';

interface ShopI {
  data: ProductsType;
  loading: boolean;
  error: string | null;
}
const initialState: ShopI = {
  data: {
    content: [],
    pageNo: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
    last: false,
    category: '',
  },
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<ProductsType, PropProducts>(
  'products/fetchData',
  async (data: PropProducts = {}, thunkAPI) => {
    try {
      const response = await productsApi.getAllProducts(data);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);
const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductsType>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload as string);
      });
  },
});
export default ProductsSlice.reducer;
