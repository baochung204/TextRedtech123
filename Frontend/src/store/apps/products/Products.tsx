import axios from '../../../utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from 'src/store/Store';

const API_URL = 'http://localhost:9999/productsSP';

interface StateType {
  productss: any[];
  currentFilter: string;
  productSearch: string;
}

const initialState: any = {
  products: [],
  currentFilter: 'total_products',
  productSearch: '',
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      // console.log('getProducts called', action.payload); // Kiểm tra khi gọi reducer
      state.products = action.payload;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    SearchProduct: (state, action) => {
      state.productSearch = action.payload;
    },
    // DeleteProduct: (state: StateType, action) => {
    //   const index = state.products.findIndex((product) => product.Id === action.payload);
    //   state.products.splice(index, 1);
    // },
    // AddProduct: (state: StateType, action) => {
    //   state.products.push(action.payload);
    // },
  },
});

export const { getProducts, setVisibilityFilter, SearchProduct } = ProductSlice.actions;

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    // console.log(response.data);
    dispatch(getProducts(response.data));
  } catch (err: any) {
    throw new Error(err);
  }
};

export default ProductSlice.reducer;
