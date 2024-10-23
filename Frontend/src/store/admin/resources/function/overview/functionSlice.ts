import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resourcesAdminApi from 'src/api/admin/resources/resources';

interface PropsData {
  totalGroupFunction: number;
  totalFunction: number;
  totalCustomerOwnership: number;
  totalApplicationAsisstant: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalGroupFunction: 0,
    totalFunction: 0,
    totalCustomerOwnership: 0,
    totalApplicationAsisstant: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewFunctionData = createAsyncThunk(
  'fetchOverviewFunctionData',
  async (_, thunkApi) => {
    try {
      const response = await resourcesAdminApi.getOverviewFunction();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewFunctionSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewFunctionData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewFunctionData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewFunctionData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewFunctionSlice.reducer;
