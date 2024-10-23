import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Result } from 'src/types/apps/file';
const URL_GET = 'https://redai02-4af4309fd76b.herokuapp.com/user-resources'
const token = localStorage.getItem('accessToken')
interface ModelState {
  data: Result[];
  loading: boolean;
  error: string | null;
}
const initialState: ModelState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchFile = createAsyncThunk('file/fetchFile', async () => {
  const res = await axios.get(`${URL_GET}/models`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
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
    builder.addCase(fetchFile.fulfilled, (state, action: PayloadAction<Result[]>) => {
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
