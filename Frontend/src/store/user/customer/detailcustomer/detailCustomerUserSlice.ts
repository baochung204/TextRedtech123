import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerUserApi from 'src/api/admin/customeruser/customeruser';

interface detailData {
  name: string;
  content: [];
}

interface PropsData {
  customerId: number;
  date: Date;
  name: string;
  phoneNumber: number;
  chatBotName: string;
  email: string | null;
  address: string | null;
  psid: string | null;
  facebookCode: string | null;
  facebookName: string | null;
  detail: detailData;
}

interface StrState {
  dataa: PropsData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    customerId: 0,
    date: new Date(),
    name: '',
    phoneNumber: 0,
    chatBotName: '',
    email: '',
    facebookCode: '',
    facebookName: '',
    detail: {
      name: '',
      content: [],
    },
    psid: '',
    address: '',
  },
  loading: false,
  error: null,
};
export const fetchCustomerUserDetailData = createAsyncThunk(
  'fetchCustomerUserDetail',
  async (id: number, thunkApi) => {
    try {
      const response = await customerUserApi.getDetailCustomerUser(id);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const customerUserDetailSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCustomerUserDetailData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchCustomerUserDetailData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchCustomerUserDetailData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default customerUserDetailSlice.reducer;
