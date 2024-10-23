import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resourcesAdminApi from 'src/api/admin/resources/resources';

interface PropsData {
  totalGroupCompaign: number;
  totalCompaign: number;
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
    totalGroupCompaign: 0,
    totalCompaign: 0,
    totalCustomerOwnership: 0,
    totalApplicationAsisstant: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewCampaignData = createAsyncThunk(
  'fetchOverviewCampaignData',
  async (_, thunkApi) => {
    try {
      const response = await resourcesAdminApi.getOverviewCampaign();

      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewCampaignSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewCampaignData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewCampaignData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewCampaignData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewCampaignSlice.reducer;
