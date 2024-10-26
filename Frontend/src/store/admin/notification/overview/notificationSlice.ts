import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import notificationAdminApi from 'src/api/admin/notification/notification';

interface PropsData {
  totalNotificationUpdate: number;
  totalTag: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalNotificationUpdate: 0,
    totalTag: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewNotificationData = createAsyncThunk(
  'fetchOverviewNotificationData',
  async (_, thunkApi) => {
    try {
      const response = await notificationAdminApi.getOverviewNotification();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewNotificationAdminSlice = createSlice({
  name: 'overviewNotificationAdminSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewNotificationData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewNotificationData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewNotificationData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewNotificationAdminSlice.reducer;
