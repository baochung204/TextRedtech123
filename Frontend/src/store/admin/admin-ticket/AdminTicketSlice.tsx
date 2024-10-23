import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import overviewTicketApi from 'src/api/admin/ticket/ticket';

interface AdminTicket {
  ticketId: string;
  create_date: Date;
  messageTime: Date | null; // Thêm null để xử lý giá trị không có
  rate: number;
  status: string;
  title: string;
  user_id: number;
  user_name: string;
  email: string;
  phone_number: string;
}

interface StrState {
  result: AdminTicket[];
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  result: [],
  loading: false,
  error: null,
};

// Tạo async thunk để lấy dữ liệu ticket
export const fetchTicketsData = createAsyncThunk('str/fetchedTickets', async (_, thunkAPI) => {
  try {
    const response = await overviewTicketApi.getAllTicketData();
    return response.data; // Giả định rằng response.data chứa mảng các ticket
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
