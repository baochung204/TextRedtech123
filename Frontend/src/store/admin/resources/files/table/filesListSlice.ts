import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resourcesAdminApi from 'src/api/admin/resources/resources';

interface PropsData {
  productId: number;
  nameProduct: string;
  customer: number;
  type: string;
  size: number;
  createDate: Date;
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

export const fetchFilesListData = createAsyncThunk('fetchFilesListData', async (_, thunkApi) => {
  try {
    const response = await resourcesAdminApi.getAllDataFiles();
    return response.data.result;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});

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
