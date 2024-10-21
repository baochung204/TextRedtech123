import campaignsApi from 'src/api/userResource/text';
import { CampaignsType } from './Type/campaignsType';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CampaignsI {
  data: CampaignsType;
  loading: boolean;
  error: string | null;
}

const initialState: CampaignsI = {
  data: {
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
  page?: number;
  size?: number;
}

export const fetchCampaigns = createAsyncThunk<CampaignsType, FetchParams>(
  'campaigns/fetchData',
  async ({ page, size }: FetchParams, thunkAPI) => {
    try {
      const response = await campaignsApi.getAllCampaigns(page, size);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaigns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaigns.fulfilled, (state, action: PayloadAction<CampaignsType>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCampaigns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default campaignsSlice.reducer;
