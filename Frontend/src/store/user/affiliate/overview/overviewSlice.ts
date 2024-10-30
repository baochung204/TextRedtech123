import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import affiliateUserApi from 'src/api/user/affiliate/affiliate';

// Interface for the "overview" object
interface Overview {
  click: number;
  customer: number;
  order: number;
  revenue: number;
  cvr: number;
  linkGioiThieu: string;
}

// Interface for the "info" object
interface Info {
  affiliateName: string;
  type: string;
  status: string;
  walletBalance: number;
  moneyProcessing: number;
  totalCommission: number;
  rankName: string;
  rankUrl: string;
}

interface StrState {
  dataa: {
    overview: Overview;
    info: Info;
  };
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    overview: {
      click: 0,
      customer: 0,
      order: 0,
      revenue: 0,
      cvr: 0,
      linkGioiThieu: '',
    },
    info: {
      affiliateName: '',
      type: '',
      status: '',
      walletBalance: 0,
      moneyProcessing: 0,
      totalCommission: 0,
      rankName: '',
      rankUrl: '',
    },
  },
  loading: false,
  error: null,
};

export const fetchAffiliateOverviewData = createAsyncThunk(
  'fetchAffiliateOverviewData',
  async (_, thunkAPI) => {
    try {
      const response = await affiliateUserApi.getOverviewAffiliate();
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewAffiliateSlice = createSlice({
  name: 'overviewAffiliateSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAffiliateOverviewData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAffiliateOverviewData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchAffiliateOverviewData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default overviewAffiliateSlice.reducer;
