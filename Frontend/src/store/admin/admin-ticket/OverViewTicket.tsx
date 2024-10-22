import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AdminTicketApi from 'src/api/admin-ticket/AdminTicket';
interface OverViewTicket {
    countTicket: number
    countUserId: number
    avg_rate: number
    countIsSolve: number
}

interface StrState {
    result: OverViewTicket[];
    loading: boolean;
    error: string | null;
}

const initReactI18nextialState: StrState = {
    result: [],
    loading: false,
    error: null,
}

export const fetchOverViewTicket = createAsyncThunk(
    'str/fetchedOverViewTicket',
    async (_, thunkAPI) => {
        try {
            const response = await AdminTicketApi.OverViewTicket();
            return response.data; // Giả định rằng response.data chứa mảng các ticket
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message); // Trả về thông điệp lỗi
        }
    }
)

const overViewTicketSlice = createSlice({
    name: 'str',
    initialState: initReactI18nextialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOverViewTicket.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset lỗi khi bắt đầu fetch
            })
            .addCase(fetchOverViewTicket.fulfilled, (state, action) => {
                state.loading = false;
                state.result = action.payload; // Cập nhật kết quả khi fetch thành công
            })
            .addCase(fetchOverViewTicket.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; // Lưu lỗi nếu fetch thất bại
            });
    }
})

export default overViewTicketSlice.reducer; 
