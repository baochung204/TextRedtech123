import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import convertApi from 'src/api/admin/convert/convert';

interface ConvertInfo {
  conversationId: number;
  date: string;
  mediaChannel: string;
  chatBotName: string;
}

interface CustomerInfo {
  customerName: string;
  phoneNumber: string;
  address: string;
}

interface Note {
  note: string;
}

interface Classification {
  name: string;
  image: string;
  color: string;
  price: string;
}

interface Product {
  name: string;
  classification: Classification;
  quantity: number;
  unitPrice: number;
}

interface PaymentMethod {
  type: string;
  detail: string | null;
}

interface OrderInfo {
  product: Product[];
  discount: number;
  shippingCost: number;
  totalPrice: number;
  paymentMethod: PaymentMethod;
}

interface DetailConvert {
  convertInfo: ConvertInfo;
  customerInfo: CustomerInfo;
  note: Note;
  rate: number | null;
  orderInfo: OrderInfo;
}

interface StrState {
  dataa: DetailConvert;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  dataa: {
    convertInfo: {
      conversationId: 0,
      date: '',
      mediaChannel: '',
      chatBotName: '',
    },
    customerInfo: {
      customerName: '',
      phoneNumber: '',
      address: '',
    },
    note: {
      note: '',
    },
    rate: null,
    orderInfo: {
      product: [],
      discount: 0,
      shippingCost: 0,
      totalPrice: 0,
      paymentMethod: {
        type: '',
        detail: null,
      },
    },
  },
  loading: false,
  error: null,
};

export const fetchConvertDetailData = createAsyncThunk(
  'fetchConvertDetailData',
  async (id: number, thunkApi) => {
    try {
      const response = await convertApi.getDetailConvertList(id);
      return response.data.result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const convertDetailSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchConvertDetailData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchConvertDetailData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataa = action.payload;
    },
    [fetchConvertDetailData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default convertDetailSlice.reducer;
