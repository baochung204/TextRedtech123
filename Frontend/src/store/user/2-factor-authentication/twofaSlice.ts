import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import twoFA from 'src/api/2-factor-authentication/TwoFa';

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

export const fetchStatusTwoFaData = createAsyncThunk('str/fetchData', async (thunkAPI) => {
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
      .addCase(fetchStatusTwoFaData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStatusTwoFaData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchStatusTwoFaData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default twofaSlice.reducer;
