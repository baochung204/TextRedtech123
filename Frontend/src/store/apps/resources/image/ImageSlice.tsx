import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetAllImage, GetImageById, RemoveImage } from './ImageApi';

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const data = await GetAllImage();
  return data;
});

export const fetchImageById = createAsyncThunk('images/fetchImagesById', async (id: string) => {
  const data = await GetImageById(id);
  return data;
});

export const removeImage = createAsyncThunk('images/removeImage', async (id: string) => {
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
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch images';
      })
      .addCase(fetchImageById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImageById.fulfilled, (state, action) => {
        state.loading = false;
        const image = action.payload;
        const existingIndex = state.images.findIndex((img) => img.id === image.id);
        if (existingIndex !== -1) {
          state.images[existingIndex] = image;
        }
      })
      .addCase(removeImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeImage.fulfilled, (state, action) => {
        state.loading = false;
        state.images = state.images.filter((image) => image.id !== action.payload);
      })
      .addCase(removeImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to remove image';
      });
  },
});

export default imagesSlice.reducer;
