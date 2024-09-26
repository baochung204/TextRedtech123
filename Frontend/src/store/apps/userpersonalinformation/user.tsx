import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserPersonalInformation } from 'src/types/apps/user_personal_information';

// Define the slice state interface
interface UserPersonalInformationState {
  data: UserPersonalInformation | null; // Thông tin của một user
  loading: boolean; // Trạng thái loading khi API đang được gọi
  error: string | null; // Lỗi khi request thất bại
}

// Initial state
const initialState: UserPersonalInformationState = {
  data: null, // Ban đầu không có dữ liệu
  loading: false,
  error: null,
};

// Thunk để fetch dữ liệu user theo ID
export const fetchCustomer = createAsyncThunk(
  'userpersonalinformation/fetchUserById',
  async (id: string) => { // Nhận tham số ID
    const response = await axios.get(`http://localhost:9999/userpersonalinformation/${id}`);
    return response.data;
  },
);

// Slice
const customerSliceAffiliate = createSlice({
  name: 'userpersonalinformation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Xử lý trạng thái pending (API request bắt đầu)
    builder.addCase(fetchCustomer.pending, (state) => {
      state.loading = true;
      state.error = null; // Xóa thông báo lỗi cũ (nếu có)
    });

    // Xử lý trạng thái fulfilled (API request thành công)
    builder.addCase(fetchCustomer.fulfilled, (state, action: PayloadAction<UserPersonalInformation>) => {
      state.loading = false; // Dừng trạng thái loading
      state.data = action.payload; // Lưu dữ liệu người dùng vào state
    });

    // Xử lý trạng thái rejected (API request thất bại)
    builder.addCase(fetchCustomer.rejected, (state, action) => {
      state.loading = false; // Dừng trạng thái loading
      state.error = action.error.message || 'Failed to fetch user data'; // Lưu lỗi vào state
    });
  },
});

export default customerSliceAffiliate.reducer;
