import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import staffApi from 'src/api/staff/Staff';

interface PropsData {
  id: number;
  ngayTao: string;
  nhanVien: string;
  phongBan: string;
  email: string;
  soDienThoai: string;
  baiViet: number;
  trangThai: string;
}

interface StaffData {
  content: PropsData[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

interface StrState {
  dataa: StaffData;
  loading: boolean;
  error: string | null;
}
const initialState: StrState = {
  dataa: {
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
  page_no?: number;
  page_size?: number;
  sort_by?: string;
  sort_dir?: string;
  search_key?: string;
  begin?: string;
  end?: string;
}
export const fetchstaffData = createAsyncThunk('fetchDatastaff', async (_, thunkApi) => {
  try {
    const res = await staffApi.getAllstaff();
    return res.data.result;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});
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
