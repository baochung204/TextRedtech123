import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboardApi from 'src/api/admin/dasboard/dashboard';

interface PropsData {
  ticket: number;
  averageRating: number;
  ratedOutOf3Stars: number;
  ratedBelow3Stars: number;
  notRatedYet: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    ticket: 0,
    averageRating: 0,
    ratedOutOf3Stars: 0,
    ratedBelow3Stars: 0,
    notRatedYet: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewTicketDashboardData = createAsyncThunk(
  'fetchOverviewTicketData',
  async (_, thunkApi) => {
    try {
      const response = await dashboardApi.getOverviewTicketAdmin();

      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewTicketDashboardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewTicketDashboardData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewTicketDashboardData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewTicketDashboardData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewTicketDashboardSlice.reducer;
