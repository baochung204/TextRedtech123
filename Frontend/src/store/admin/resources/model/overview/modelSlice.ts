import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resourcesAdminApi from 'src/api/admin/resources/resources';

interface PropsData {
  totalModel: number;
  totalTranningToken: number;
  totalOwnership: number;
  totalApplicationAsisstant: number;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    totalModel: 0,
    totalTranningToken: 0,
    totalOwnership: 0,
    totalApplicationAsisstant: 0,
  },
  loading: false,
  error: null,
};

export const fetchOverviewModelData = createAsyncThunk(
  'fetchOverviewModelData',
  async (_, thunkApi) => {
    try {
      const response = await resourcesAdminApi.getOverviewModel();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const overviewModelsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOverviewModelData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOverviewModelData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchOverviewModelData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default overviewModelsSlice.reducer;
