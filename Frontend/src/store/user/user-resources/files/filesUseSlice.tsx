import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilesType } from './type/fileType';
import resourcesApi from 'src/api/userResource/resourcesApi';

interface FileI {
  data: FilesType;
  loading: boolean;
  error: string | null;
}

const initialState: FileI = {
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
  page?: number;
  size?: number;
}

export const fetchFiles = createAsyncThunk<FilesType, FetchParams>(
  'files/fetchData',
  async ({ page, size }: FetchParams, thunkAPI) => {
    try {
      const response = await resourcesApi.getAllFiles(page, size);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFiles.fulfilled, (state, action: PayloadAction<FilesType>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default filesSlice.reducer;
