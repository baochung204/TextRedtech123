import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'src/api/userResource/UserResource';

export const fetchAllUsers = createAsyncThunk('users/fetchAll', async () => {
    const response = await userApi.getAllFiles();
    return response.data; // Giả sử dữ liệu trả về nằm trong `data`
});

interface UsersState {
    users: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | undefined;
}

const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: undefined,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;