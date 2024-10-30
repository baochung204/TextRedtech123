import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewTicketApi from 'src/api/admin/ticket/ticket';

interface AdminTicket {
  ticketId: string;
  create_date: Date;
  messageTime: Date | null; 
  rate: number;
  status: string;
  title: string;
  user_id: number;
  user_name: string;
  email: string;
  phone_number: string;
}
interface StaffData {
    content: AdminTicket[];
    pageNo: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
}

interface StrState {
  result: StaffData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  result: {
    content: [],
    pageNo: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
    last: false,
  },
  loading: false,
  error: null,
}

// Tạo async thunk để lấy dữ liệu ticket
export const fetchTicketsData = createAsyncThunk('fetchedTickets', 
  async (object: Partial<AdminTicket> = {}, thunkAPI) => {
  try {
    const response = await overviewTicketApi.getAllTicketData(object);
    return response.data.result; // Giả định rằng response.data chứa mảng các ticket
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message); // Trả về thông điệp lỗi
  }
});

const adminTicketSlice = createSlice({
  name: 'str',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketsData.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset lỗi khi bắt đầu fetch
      })
      .addCase(fetchTicketsData.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload; // Cập nhật kết quả khi fetch thành công
      })
      .addCase(fetchTicketsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Lưu lỗi nếu fetch thất bại
      });
  },
});

export default adminTicketSlice.reducer;
