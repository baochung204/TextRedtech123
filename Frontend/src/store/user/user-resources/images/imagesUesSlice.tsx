import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import resourcesApi from 'src/api/userResource/resourcesApi';
import { ImageType } from './type/imageType';

interface ImageI {
  data: ImageType;
  loading: boolean;
  error: string | null;
}
const initialState: ImageI = {
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
export const fetchImages = createAsyncThunk<ImageType, FetchParams>(
  'images/fetchData',
  async ({ page, size }: FetchParams, thunkAPI) => {
    try {
      const response = await resourcesApi.getAllImages(page, size);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);
const ImagesSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action: PayloadAction<ImageType>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ImagesSlice.reducer;
