import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PropsContractAffiliate } from 'src/api/admin/accountant/accountant';
import customerAdminApi from 'src/api/admin/cusomer/customer';

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

export const fetchCustomerAdminListData = createAsyncThunk(
  'fetchCustomerAdminList',
  async (object: PropsContractAffiliate = {}, thunkApi) => {
    try {
      const response = await customerAdminApi.getCustomerListAdmin(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const CustomerAdminListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCustomerAdminListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchCustomerAdminListData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchCustomerAdminListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default CustomerAdminListSlice.reducer;
