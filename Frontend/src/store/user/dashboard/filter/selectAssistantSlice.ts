import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboardApi from 'src/api/user/dashboard/dasboard';

interface PropsData {
  chatBotId: number;
  chatBotName: string;
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

export const fetchSelectAssistantData = createAsyncThunk(
  'fetchSelectAssistantData',
  async (_, thunkAPI) => {
    try {
      const response = await dashboardApi.getSelectAssistant();
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const selectAssistantSlice = createSlice({
  name: 'selectAssistant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectAssistantData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSelectAssistantData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchSelectAssistantData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default selectAssistantSlice.reducer;
