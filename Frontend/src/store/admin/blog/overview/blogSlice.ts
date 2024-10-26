import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewBlogApi from 'src/api/admin/blog/overview/Overview';

interface PropsData {
  countBlog: number;
  sumView: number;
  sumPoint: number;
  sumLike: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    countBlog: 0,
    sumView: 0,
    sumPoint: 0,
    sumLike: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewBlogData = createAsyncThunk(
  'fetchOverviewBlogDate',
  async (_, thunkApi) => {
    try {
      const response = await overviewBlogApi.getAllOverview();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewblogSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewBlogData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewBlogData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewBlogData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewblogSlice.reducer;
