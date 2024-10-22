import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import listPointApi from 'src/api/user/point/listpoint';

interface PropsData {
  pointType: string;
  pointName: string;
  cash: number;
  point: number;
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

export const fetchListPointData = createAsyncThunk('fetchListPointData', async (_, thunkAPI) => {
  try {
    const response = await listPointApi.getListPoint();
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});

const listPointSlice = createSlice({
  name: 'listPoint',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListPointData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListPointData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchListPointData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default listPointSlice.reducer;
