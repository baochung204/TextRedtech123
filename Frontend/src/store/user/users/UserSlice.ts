import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'src/api/user/User';

interface PropsData {
  userId: number;
  point: number;
  email: string;
  name: string;
  phoneNumber: string;
  gender: string;
  address: string;
  dataOfBird: Date;
  password: string;
  location: string;
  avatarUrl: string;
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

export const fetchUserData = createAsyncThunk('fetchDataUser', async (_, thunkApi) => {
  try {
    const res = await userApi.getAllUser();
    return res.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUserData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchUserData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default userSlice.reducer;
