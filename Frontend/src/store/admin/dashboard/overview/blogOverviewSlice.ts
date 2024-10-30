import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboardApi from 'src/api/admin/dasboard/dashboard';

interface PropsData {
  blog: number;
  view: number;
  like: number;
  revenue: number;
  viewRateBlog: number;
  revenueRateBlog: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    blog: 0,
    view: 0,
    like: 0,
    revenue: 0,
    viewRateBlog: 0,
    revenueRateBlog: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewBlogDashboardData = createAsyncThunk(
  'fetchOverviewBlogDashboardData',
  async (_, thunkApi) => {
    try {
      const response = await dashboardApi.getOverviewBlog();

      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewBlogDashboardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewBlogDashboardData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewBlogDashboardData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewBlogDashboardData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewBlogDashboardSlice.reducer;
