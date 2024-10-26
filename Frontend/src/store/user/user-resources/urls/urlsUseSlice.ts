/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import resourcesApi from 'src/api/userResource/resourcesApi';
import { UrlType } from './type/urlType';

interface UrlI {
  data: UrlType;
  loading: boolean;
  error: string | null;
}
const initialState: UrlI = {
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
export const fetchUrls = createAsyncThunk<UrlType, FetchParams>(
  'models/fetchDataUrlsUser',
  async ({ page, size }: FetchParams, thunkAPI) => {
    try {
      const response = await resourcesApi.getAllURL(page, size);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);
const UrlsSlice = createSlice({
  name: 'urlsFetch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUrls.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUrls.fulfilled, (state, action: PayloadAction<UrlType>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUrls.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default UrlsSlice.reducer;
