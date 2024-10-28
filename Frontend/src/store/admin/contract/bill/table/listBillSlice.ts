import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import accountantApi from 'src/api/admin/accountant/accountant';
import contractApi, { PropsContractAffiliate } from 'src/api/admin/contract/contract';

export interface PropsData {
  einvoiceId: number;
  orderId: number;
  userId: number;
  createAt: Date;
  userType: string;
  companyName: string;
  taxCode: number;
  einvoiceOrderInfo: string;
  dvt: string;
  quantity: number;
  donGia: number;
  thanhTien: number;
  tongVat: number;
  diaChi: string;
  nguoiDaiDien: string;
  chucVu: string;
  sdtCongTy: number;
  emailCongTy: string;
  trangThai: string;
}

interface PropsAffiliateOderList {
  content: PropsData[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

interface PropsOrderAffiliateList {
  dataa: PropsAffiliateOderList;
  loading: boolean;
  error: string | null;
}

const initialState: PropsOrderAffiliateList = {
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

export const fetchBillListData = createAsyncThunk(
  'fetchBillList',
  async (object: PropsContractAffiliate = {}, thunkApi) => {
    try {
      const response = await accountantApi.getListBill(object);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const listBillSlice = createSlice({
  name: 'listBill',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBillListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBillListData.fulfilled,
        (state, action: PayloadAction<PropsAffiliateOderList>) => {
          state.loading = false;
          state.dataa = action.payload;
        },
      )
      .addCase(fetchBillListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default listBillSlice.reducer;
