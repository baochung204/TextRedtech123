import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resourcesAdminApi from 'src/api/admin/resources/resources';

interface PropsData {
  totalFile: number;
  totalCustomer: number;
  totalSize: number;
  totalApplicationAsisstant: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalFile: 0,
    totalCustomer: 0,
    totalSize: 0,
    totalApplicationAsisstant: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewFilesData = createAsyncThunk(
  'fetchOverviewFilesData',
  async (_, thunkApi) => {
    try {
      const response = await resourcesAdminApi.getOverviewFiles();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewFilesSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewFilesData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewFilesData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewFilesData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewFilesSlice.reducer;
