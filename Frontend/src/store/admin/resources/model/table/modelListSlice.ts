import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resourcesAdminApi from 'src/api/admin/resources/resources';

interface PropsData {
  id: number;
  groupCompaignName: string;
  badgeUrl: string;
  nameProduc: string;
  level: number;
  customOwnership: number;
  applicationAssistant: number;
  sammary: string;
  content: string;
  createDate: string;
  nameEmployee: string;
}

interface StrState {
  dataa: PropsData[];
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: [],
  loading: false,
  error: null,
};

export const fetchModelListData = createAsyncThunk('fetchCampaignData', async (_, thunkApi) => {
  try {
    const response = await resourcesAdminApi.getAllDataModel();
    return response.data.result;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});

const modelListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchModelListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchModelListData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchModelListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default modelListSlice.reducer;
