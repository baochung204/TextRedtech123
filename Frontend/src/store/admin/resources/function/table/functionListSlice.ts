import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resourcesAdminApi from 'src/api/admin/resources/resources';

interface PropsData {
  productId: number;
  createDate: Date;
  nameGroupFunction: string;
  nameProduct: string;
  badgeUrl: string;
  level: number;
  customer: number;
  applicationAssistant: number;
  sammary: string;
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

export const fetchFunctionListData = createAsyncThunk(
  'fetchFunctionListData',
  async (_, thunkApi) => {
    try {
      const response = await resourcesAdminApi.getAllDataFunction();
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const functionListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFunctionListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchFunctionListData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchFunctionListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default functionListSlice.reducer;
