import campaignsApi from 'src/api/userResource/UserResource';
import { CampaignsType } from './Type/campaignsType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface CampaignsI {
  data: CampaignsType[];
  loading: boolean;
  error: string | null;
}

const initialState: CampaignsI = {
  data: [],
  loading: false,
  error: null,
};

export const fetchCampaingns = createAsyncThunk('fetchDataCampaigns', async (_, thunkAPI) => {
  try {
    const response = await campaignsApi.getAllCampaigns();
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});
const CampaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaingns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaingns.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCampaingns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default CampaignsSlice.reducer;
