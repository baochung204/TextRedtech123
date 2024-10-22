import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import twoFA from 'src/api/2-factor-authentication/TwoFa';

interface PropsData {
  google_authenticator: boolean | null;
  sms: boolean | null;
  email: boolean | null;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: { google_authenticator: null, sms: null, email: null },
  loading: false,
  error: null,
};

// export const fetchStatusTwoFaData = createAsyncThunk('str/fetchData', async (thunkAPI) => {
//   try {
//     const response = await twoFA.getStatus2fa();
//     return response.data;
//   } catch (error: any) {
//     return thunkAPI;
//   }
// });

export const fetchStatusTwoFaData = createAsyncThunk('fetch2FA', async (_, thunkAPI) => {
  try {
    const response = await twoFA.getStatus2fa();
    return response.data.result.options;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
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
