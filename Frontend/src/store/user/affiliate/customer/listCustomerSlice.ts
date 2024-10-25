import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import affiliateUserApi from 'src/api/user/affiliate/affiliate';

interface PropsData {
  userId: number;
  avatar: string;
  name: string;
  phone: string;
  email: string;
  typeCustomer: string;
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

export const fetchListCustomerData = createAsyncThunk(
  'fetchListCustomerData',
  async (_, thunkAPI) => {
    try {
      const response = await affiliateUserApi.getCustomerList();
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const listCustomerSlice = createSlice({
  name: 'listCustomerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListCustomerData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListCustomerData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchListCustomerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default listCustomerSlice.reducer;
