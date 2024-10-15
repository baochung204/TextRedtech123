import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiResponse } from 'src/types/apps/file';
const URL_GET = 'https://redai02-4af4309fd76b.herokuapp.com/user-resources'
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiQUNDRVNTIiwic3ViIjoiMTA4MCIsImlhdCI6MTcyODcwMjU5OSwiZXhwIjoxNzI4NzM4NTk5fQ.j-u5sSppU8Ih5IGBcWw61F-q4v_L7ip5SEtBAZCjZcw'
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

export const fetchFile = createAsyncThunk('file/fetchFile', async () => {
  const res = await axios.get(`${URL_GET}/files`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log('file', res.data);
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
