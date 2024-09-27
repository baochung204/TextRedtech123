import axios from '../../../utils/axios';
import { filter, map } from 'lodash';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from 'src/store/Store';

const API_URL = 'http://localhost:9999/productshop';

interface Product {
  id: string;
  name: string;
  point: number;
  qty: number;
  tag: string;
  category: string;
  color: string;
  gender: string;
  rating: number;
}

interface Filters {
  tag: string;
  category: string;
  color: string;
  gender: string;
  point: string;
  rating: string;
}

interface StateType {
  products: Product[];
  productSearch: string;
  sortBy: string;
  cart: Product[];
  total: number;
  filters: Filters;
  error: string;
}

const initialState: StateType = {
  products: [],
  productSearch: '',
  sortBy: 'newest',
  cart: [],
  total: 0,
  filters: {
    tag: 'All',
    category: 'All',
    color: 'All',
    gender: 'All',
    point: 'All',
    rating: '',
  },
  error: '',
};

export const EcommerceSlice = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },

    // GET PRODUCTS
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },

    SearchProduct: (state, action: PayloadAction<string>) => {
      state.productSearch = action.payload;
    },

    // SORT PRODUCTS
    sortByProducts(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },

    // SORT BY GENDER
    sortByGender(state, action: PayloadAction<{ gender: string }>) {
      state.filters.gender = action.payload.gender;
    },

    // SORT BY COLOR
    sortByColor(state, action: PayloadAction<{ color: string }>) {
      state.filters.color = action.payload.color;
    },

    // SORT BY PRICE
    sortByPrice(state, action: PayloadAction<{ point: string }>) {
      state.filters.point = action.payload.point;
    },

    // FILTER PRODUCTS
    filterProducts(state, action: PayloadAction<{ category: string }>) {
      state.filters.category = action.payload.category;
    },

    // FILTER RESET
    filterReset(state) {
      state.filters.tag = 'All';
      state.filters.color = 'All';
      state.filters.gender = 'All';
      state.filters.point = 'All';
      state.sortBy = 'newest';
    },

    // ADD TO CART
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      state.cart = [...state.cart, product];
    },

    // QTY INCREMENT
    increment(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state.cart = map(state.cart, (product) =>
        product.id === productId ? { ...product, qty: product.qty + 1 } : product,
      );
    },

    // QTY DECREMENT
    decrement(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state.cart = map(state.cart, (product) =>
        product.id === productId ? { ...product, qty: product.qty - 1 } : product,
      );
    },

    // DELETE CART ITEM
    deleteCart(state, action: PayloadAction<string>) {
      state.cart = filter(state.cart, (item) => item.id !== action.payload);
    },
  },
});

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(getProducts(response.data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(hasError(error.message));
    } else {
      dispatch(hasError('An unknown error occurred'));
    }
  }
};

export const {
  hasError,
  getProducts,
  SearchProduct,
  sortByProducts,
  filterProducts,
  sortByGender,
  increment,
  deleteCart,
  decrement,
  addToCart,
  sortByPrice,
  filterReset,
  sortByColor,
} = EcommerceSlice.actions;

export default EcommerceSlice.reducer;
