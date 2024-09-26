import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetAllUrl, RemoveUrl } from './UrlApi';

interface UrlsState {
  urls: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UrlsState = {
  urls: [],
  loading: false,
  error: null,
};

export const fetchUrls = createAsyncThunk('urls/fetchUrls', async () => {
  const data = await GetAllUrl();
  return data;
});

export const removeUrl = createAsyncThunk('urls/removeUrl', async (id: string) => {
  await RemoveUrl(id);
  return id;
});

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
        state.error = action.error.message || 'Failed to fetch URLs';
      });
    // .addCase(removeUrl.fulfilled, (state, action) => {
    //   state.loading = true;
    //   state.urls = state.urls.filter((url) => url.id !== action.payload);
    // })
    // .addCase(removeUrl.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message || 'Failed to delete URL';
    // });
  },
});

export default urlsSlice.reducer;
