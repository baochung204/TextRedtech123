import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PropsContractAffiliate } from 'src/api/admin/accountant/accountant';
import convertApi from 'src/api/admin/convert/convert';
import notificationAdminApi from 'src/api/admin/notification/notification';

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

export const fetchConvertHistoryListData = createAsyncThunk(
  'fetchConvertHistoryList',
  async (object: PropsContractAffiliate = {}, thunkApi) => {
    try {
      const response = await convertApi.getConvertList(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const convertHistoryListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchConvertHistoryListData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchConvertHistoryListData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchConvertHistoryListData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default convertHistoryListSlice.reducer;
