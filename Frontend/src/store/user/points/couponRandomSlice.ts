import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listRandomCounponApi from 'src/api/user/point/listcoupon';

type PropsData = {
  code: string;
  name: string;
  type: string;
  couponPercent: number | null;
  value: number | null;
  upperBound: number | null;
};

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

export const fetchListRandomCouponData = createAsyncThunk(
  'fetchListCouponData',
  async (param: any, thunkAPI) => {
    try {
      const response = await listRandomCounponApi.getListCouponRandom(param);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);
const listRandomCouponSlice = createSlice({
  name: 'listPoint',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListRandomCouponData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListRandomCouponData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchListRandomCouponData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default listRandomCouponSlice.reducer;
