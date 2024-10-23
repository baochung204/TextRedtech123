import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import resourcesApi from 'src/api/userResource/resourcesApi';
import { FunctionsType } from './type/functionsType';

interface FunctionI {
  data: FunctionsType;
  loading: boolean;
  error: string | null;
}
const initialState: FunctionI = {
  data: {
    content: [],
    pageNo: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
    last: false,
  },
  loading: false,
  error: null,
};

interface FetchParams {
  page?: number | undefined;
  size?: number | undefined;
}
export const fetchFunctions = createAsyncThunk<FunctionsType, FetchParams>(
  'functions/fetchData',
  async ({ page, size }: FetchParams, thunkAPI) => {
    try {
      const response = await resourcesApi.getAllFunctions(page, size);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);
const functionsSlice = createSlice({
  name: 'functions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFunctions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFunctions.fulfilled, (state, action: PayloadAction<FunctionsType>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFunctions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default functionsSlice.reducer;
