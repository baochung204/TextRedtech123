import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserMeApi from "src/api/userme/Userme";

interface UserMeData {
  userId: number;
  point: number;
  email: string;
  phoneNumber: string;
  name: string;
  avatarUrl:string
}

interface UserMeState {
  result: UserMeData | null; 
  loading: boolean;
  error: string | null;
}

const initialState: UserMeState = {
  result: null, 
  loading: false,
  error: null,
};

export const fetchUserMeData = createAsyncThunk(
  "userme/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await UserMeApi.getUserMe();
      return response.data.result; // Truy cập 'result' từ API response
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const usermeSlice = createSlice({
  name: "userme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserMeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserMeData.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload; 
      })
      .addCase(fetchUserMeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default usermeSlice.reducer;
