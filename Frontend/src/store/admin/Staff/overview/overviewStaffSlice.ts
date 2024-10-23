import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewStaffApi from 'src/api/admin/staff/overview/overviewStaff';

interface PropsData {
  totalEmployee: number;
  totalAdmin: number;
  employeeActive: number;
  employeeBlock: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalEmployee: 0,
    totalAdmin: 0,
    employeeActive: 0,
    employeeBlock: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewStaffData = createAsyncThunk(
  'fetchOverviewStaffData',
  async (_, thunkApi) => {
    try {
      const response = await overviewStaffApi.getAllOverviewStaff();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewStaffSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewStaffData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewStaffData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewStaffData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewStaffSlice.reducer;
