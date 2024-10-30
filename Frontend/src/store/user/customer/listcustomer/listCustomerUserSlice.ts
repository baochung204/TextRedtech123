import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerUserApi, { PropsCustomerUser } from 'src/api/admin/customeruser/customeruser';

interface PropsData {
  customerId: number;
  date: Date;
  name: string;
  phoneNumber: string;
  chatBotName: string;
  email: string;
  avatarUrl: string;
  facebookCode: string;
  facebookName: string;
}

interface VoucherData {
  content: PropsData[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

interface StrState {
  dataa: VoucherData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    content: [],
    pageNo: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
    last: false,
  },
  loading: false,
  error: null,
};

export const fetchCustomerUserListData = createAsyncThunk(
  'fetchCustomerUserList',
  async (object: PropsCustomerUser = {}, thunkApi) => {
    try {
      const response = await customerUserApi.getListCustomerUser(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const customerUserListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCustomerUserListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchCustomerUserListData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchCustomerUserListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default customerUserListSlice.reducer;
