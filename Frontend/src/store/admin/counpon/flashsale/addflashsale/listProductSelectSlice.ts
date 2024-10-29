import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import addFlashsaleApi from 'src/api/admin/counpon/flashsale/addflashsale/addflashsale';

interface PropsData {
  id: number;
  name: string;
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

export const fetchListProductSelectData = createAsyncThunk(
  'fetchListProductSelect',
  async (_, thunkApi) => {
    try {
      const response = await addFlashsaleApi.getAllProductSelect();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const listProductSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchListProductSelectData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchListProductSelectData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchListProductSelectData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default listProductSlice.reducer;
