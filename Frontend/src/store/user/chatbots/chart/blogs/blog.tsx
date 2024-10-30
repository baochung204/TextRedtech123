import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosAPI } from 'src/api/axiosApi';
import BlogApi from 'src/api/user/blog/blog';

interface Blog {
  name: string;
  tags: string[];
  views: number;
  author: string;
  like: number;
  created_at: string;
}
interface BlogState {
  result: Blog[];
}
interface StrState {
  data: BlogState;
  loading: boolean;
  error: string | null;
}
const initialState: StrState = {
  data: { result: [] },
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk('blogs', async (_, thunkApi) => {
  try {
    const response = await BlogApi.getAllBlogs();
    return response.data.result;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});
export const fetchBlogPost = createAsyncThunk(
  'blog/fetchBlogPost',
  async (id: string, thunkApi) => {
    try {
      const response = await axiosAPI.get(`/redtech/user/blogs/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const BlogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBlogs.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchBlogs.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchBlogs.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    },
    [fetchBlogPost.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchBlogPost.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data.result = [action.payload]; // Lưu chi tiết blog vào `result`
    },
    [fetchBlogPost.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    },
  },
});
export default BlogSlice.reducer;
