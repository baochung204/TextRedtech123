import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import userApi from 'src/api/userResource/UserResource';
import { ApiResponse } from 'src/types/apps/file';

interface FileState {
  data: ApiResponse[];
  loading: boolean;
  error: string | null;
}
const initialState: FileState = {
  data: [],
  loading: false,
  error: null,
};
interface FetchParams {
  page: number;
  size: number;
}
export const fetchFile = createAsyncThunk(
  'file/fetchFile',
  async ({page,size}:FetchParams) => {
    try {
      const res = await userApi.getAllFiles(page,size)
      console.log('file', res.data);
      return res.data.result;
    } catch (error) {
      console.log(error)
    }
    
  });

const FileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFile.fulfilled, (state, action: PayloadAction<ApiResponse[]>) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch integrations';
    });
  },
});
export default FileSlice.reducer;
