import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import staffApi from 'src/api/staff/Staff';

interface PropsData {
  id: number;
  ngayTao: string;
  email: string;
  name: string;
  phoneNumber: string;
  gender: string;
  address: string;
  dataOfBird: Date;
  password: string;
  location: string;
  avatarUrl: string;
}

interface StrState {
  dataa: PropsData[];
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: [],
  loading: false,
  error: null,
};
interface FetchParams {
  page_no?: number;
  page_size?: number;
  sort_by?: string;
  sort_dir?: string;
  search_key?: string;
  begin?: string;
  end?: string;
}
export const fetchstaffData = createAsyncThunk(
  'fetchDatastaff',
  async (
    { page_no, page_size, sort_by, sort_dir, search_key, begin, end }: FetchParams,
    thunkAPI,
  ) => {
    try {
      const res = await staffApi.getAllstaff(
        page_no,
        page_size,
        sort_by,
        sort_dir,
        search_key,
        begin,
        end,
      );
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);
const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchstaffData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchstaffData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchstaffData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default staffSlice.reducer;
