import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import userApi from 'src/api/userResource/UserResource';
import { Result } from 'src/types/apps/file';

interface FileState {
  data: Result;
  loading: boolean;
  error: string | null;
}
const initialState: FileState = {
  data: {
    content: [],
    last: false,
    pageNo: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0
  },
  loading: false,
  error: null,
};
interface FetchParams {
  page: number;
  pageSize: number;
}
export const fetchFile = createAsyncThunk(
  'file/fetchFile',
  async ({ page = 0, pageSize = 5 }: FetchParams) => {
    try {
      const res = await userApi.getAllFiles(page, pageSize)
      console.log('file', res.data);
      return res.data.result;
    } catch (error) {
      console.log('lỗi', error)
    }

  });

// eslint-disable-next-line react-refresh/only-export-components
const FileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFile.fulfilled, (state, action: PayloadAction<Result>) => {
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
