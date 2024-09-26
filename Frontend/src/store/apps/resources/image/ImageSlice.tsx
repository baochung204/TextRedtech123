import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetAllImage, RemoveImage } from './ImageApi';

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const data = await GetAllImage();
  return data;
});
export const removeImage = createAsyncThunk('image/RemoveImages', async (id: string) => {
  await RemoveImage(id);
  return id;
});

interface ImagesState {
  images: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ImagesState = {
  images: [],
  loading: false,
  error: null,
};
const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        (state.loading = false),
          (state.error = action.error.message || 'Failed to fetch integrations');
      })
      .addCase(removeImage.fulfilled, (state, action) => {
        state.images = state.images.filter((image) => image.id !== action.payload);
      })
      .addCase(removeUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete URLs';
      });
  },
});
export default imagesSlice.reducer;
