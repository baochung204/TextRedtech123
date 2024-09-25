import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetAllUrl } from './UrlApi';

export const fetchUrls = createAsyncThunk('urls/fetchUrls', async () => {
  const data = await GetAllUrl();
  return data;
});

const initialState = {
  urls: [],
  loading: false,
  error: null as string | null,
};

const urlsSlice = createSlice({
  name: 'urls',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUrls.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUrls.fulfilled, (state, action) => {
        state.loading = false;
        state.urls = action.payload;
      })
      .addCase(fetchUrls.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch integrations';
      });
  },
});

export default urlsSlice.reducer;
