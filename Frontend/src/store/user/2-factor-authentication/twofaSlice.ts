import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import twoFA from 'src/api/2-factor-authentication/twofa';

interface PropsData {
  google_authenticator: boolean;
  sms: boolean;
  email: boolean;
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

export const fetchStrData = createAsyncThunk('str/fetchData', async (thunkAPI) => {
  try {
    const response = await twoFA.getStatus2fa();
    return response.data;
  } catch (error: any) {
    return thunkAPI;
  }
});

const twofaSlice = createSlice({
  name: 'str',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStrData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStrData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchStrData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default twofaSlice.reducer;
