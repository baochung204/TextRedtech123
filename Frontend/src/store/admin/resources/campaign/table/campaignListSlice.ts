import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PropsAffiliate } from 'src/api/admin/affiliate/affiliate';
import resourcesAdminApi from 'src/api/admin/resources/resources';
type PropsData = {
  id: number;
  groupCompaignName: string;
  badgeUrl: string;
  nameProduc: string;
  level: number;
  customOwnership: number;
  applicationAssistant: number;
  sammary: string;
  content: string;
  createDate: Date;
  nameEmployee: string;
};

interface VoucherData {
  content: PropsData[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

interface StrState {
  dataa: VoucherData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
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

export const fetchCampaignListData = createAsyncThunk(
  'fetchCampaignListData',
  async (object: PropsAffiliate = {}, thunkApi) => {
    try {
      const response = await resourcesAdminApi.getAllDataCampaign(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const campaignListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCampaignListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchCampaignListData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchCampaignListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default campaignListSlice.reducer;
