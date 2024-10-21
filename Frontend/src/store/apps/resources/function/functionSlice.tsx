// src/redux/integrationSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import userApi from 'src/api/userResource/UserResource';
import { Functions } from 'src/types/apps/function';

interface FunctionState {
  data: Functions[]; 
  loading: boolean; 
  error: string | null;
}

const initialState: FunctionState = {
  data: [], 
  loading: false,
  error: null,
};
interface FetchParams {
  page: number;
  size: number;
}
export const fetchFunction = createAsyncThunk(
  'function/fetchFunction',
  async ({ page, size }: FetchParams) => {
    try {
      const response = await userApi.getAllFunction(page, size);
      console.log('function', response.data);

      return response.data.result;

    } catch (error) {
      console.log("Error", error)
    }
  });

// eslint-disable-next-line react-refresh/only-export-components
const FunctionSlice = createSlice({
  name: 'function',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFunction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchFunction.fulfilled, (state, action: PayloadAction<Functions[]>) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchFunction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch integrations';
    });
  },
});

export default FunctionSlice.reducer;
