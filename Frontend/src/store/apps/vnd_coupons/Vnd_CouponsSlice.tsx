import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetAllVndCoupons, GetVndCouponById } from './Vnd_CouponsApi';

export const fetchVndCoupons = createAsyncThunk('points/fetchVndCoupons', async () => {
  const data = await GetAllVndCoupons();
  return data;
});

export const fetchVndCouponById = createAsyncThunk(
  'points/fetchVndCouponById',
  async (id: string) => {
    const data = await GetVndCouponById(id);
    return data;
  },
);

interface VndCouponsState {
  vnd_coupons: any[];
  loading: boolean;
  error: string | null;
}

const initialState: VndCouponsState = {
  vnd_coupons: [],
  loading: false,
  error: null,
};

const vndCouponsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVndCoupons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVndCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.vnd_coupons = action.payload;
      })
      .addCase(fetchVndCoupons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch points';
      })
      .addCase(fetchVndCouponById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVndCouponById.fulfilled, (state, action) => {
        state.loading = false;
        const vnd_coupon = action.payload;
        const existingIndex = state.vnd_coupons.findIndex((item) => item.id === vnd_coupon.id);
        if (existingIndex !== -1) {
          state.vnd_coupons[existingIndex] = vnd_coupon;
        }
      })
      .addCase(fetchVndCouponById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch point';
      });
  },
});

export default vndCouponsSlice.reducer;
