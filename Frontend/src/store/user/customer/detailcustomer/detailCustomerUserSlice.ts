import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerUserApi from 'src/api/admin/customeruser/customeruser';

//not correct
interface PropsData {
  userId: number;
  name: string;
  email: string;
  phoneNumber: number;
  type: string;
  totalChatBot: number;
  totalRecharge: number;
  totalPointBalence: number;
  representativeName: string | null;
  publisher: string | null;
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
