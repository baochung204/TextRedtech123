import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AdminTicketApi from "src/api/admin-ticket/AdminTicket";

interface AdminTicket {
    ticketId: string;
    create_date: Date;
    messageTime: Date
    rate: number;
    status: string
    title: string
    user_id: number
    user_name: string
    email: string
    phone_number: string
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
}

export const fetchTicketsData = createAsyncThunk(
    'str/fetchedTickets',
    async (_, thunkAPI) => {
        try {
            const response = await AdminTicketApi.getAllTicket();
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
const adminTicketSlide = createSlice({
    name: "str",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTicketsData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
       .addCase(fetchTicketsData.fulfilled, (state, action) => {
           state.loading = false;
           state.result = action.payload;
       })
    }
})

export default adminTicketSlide.reducer;