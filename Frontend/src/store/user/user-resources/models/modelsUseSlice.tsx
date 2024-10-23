/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModelType } from './type/modelsType';
import resourcesApi from 'src/api/userResource/resourcesApi';

interface ModelI {
  data: ModelType;
  loading: boolean;
  error: string | null;
}
const initialState: ModelI = {
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
  page: number;
  size: number;
}
export const fetchModels = createAsyncThunk<ModelType, FetchParams>(
  'models/fetchData',
  async ({ page, size }: FetchParams, thunkAPI) => {
    try {
      const response = await resourcesApi.getAllModels(page, size);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);
// eslint-disable-next-line react-refresh/only-export-components

const ModelsSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchModels.fulfilled, (state, action: PayloadAction<ModelType>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchModels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ModelsSlice.reducer;
