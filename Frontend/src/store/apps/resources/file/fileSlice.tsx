import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { File } from 'src/types/apps/file';

interface FileState {
  data: File[];
  loading: boolean;
  error: string | null;
}
const initialState: FileState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchFile = createAsyncThunk('file/fetchFile', async () => {
  const res = await axios.get('http://localhost:9999/file');
  // console.log('file', res.data);
  return res.data;
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
    builder.addCase(fetchFile.fulfilled, (state, action: PayloadAction<File[]>) => {
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
