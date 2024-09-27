// src/redux/integrationSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Str } from 'src/types/apps/str';
// Define the slice state interface
interface StrState {
    data: Str[];   // List of integrations
    loading: boolean;      // Loading state for API requests
    error: string | null;  // Error state for failed requests
}

// Initial state
const initialState: StrState = {
    data: [],  // Initially an empty array
    loading: false,
    error: null,
};

// Thunk to fetch integration data
export const fetchStr = createAsyncThunk(
    'str/fetchStr',
    async () => {
        const response = await axios.get('http://localhost:9999/campaign');
        console.log('tet', response.data);

        return response.data;
    }
);

// Slice
// eslint-disable-next-line react-refresh/only-export-components
const StrSlice = createSlice({
    name: 'str',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle pending state (API request started)
        builder.addCase(fetchStr.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        // Handle fulfilled state (API request succeeded)
        builder.addCase(fetchStr.fulfilled, (state, action: PayloadAction<Str[]>) => {
            state.loading = false;
            state.data = action.payload;

        });

        // Handle rejected state (API request failed)
        builder.addCase(fetchStr.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch integrations';
        });
    },
});

export default StrSlice.reducer;
