import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resourcesAdminApi, { PropsAffiliate } from 'src/api/admin/resources/resources';

interface PropsData {
  productId: number;
  nameProduct: string;
  customer: number;
  type: string;
  size: number;
  createDate: Date;
}

interface VoucherData {
  content: PropsData[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

interface StrState {
  dataa: VoucherData;
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

export const fetchFilesListData = createAsyncThunk(
  'fetchFilesListData',
  async (object: PropsAffiliate = {}, thunkApi) => {
    try {
      const response = await resourcesAdminApi.getAllDataFiles(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const fileListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilesListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchFilesListData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchFilesListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default fileListSlice.reducer;
