// src/redux/integrationSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Integration } from 'src/types/apps/integration';
// Define the slice state interface
interface IntegrationState {
    data: Integration[];   // List of integrations
    loading: boolean;      // Loading state for API requests
    error: string | null;  // Error state for failed requests
}

// Initial state
const initialState: IntegrationState = {
    data: [],  // Initially an empty array
    loading: false,
    error: null,
};

// Thunk to fetch integration data
export const fetchIntegrations = createAsyncThunk(
    'integration/fetchIntegrations',
    async () => {
        const response = await axios.get('http://localhost:9999/integration');
        console.log('tet', response.data);
        
        return response.data;
    }
);

// Slice
const integrationSlice = createSlice({
    name: 'integration',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle pending state (API request started)
        builder.addCase(fetchIntegrations.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        // Handle fulfilled state (API request succeeded)
        builder.addCase(fetchIntegrations.fulfilled, (state, action: PayloadAction<Integration[]>) => {
            state.loading = false;
            state.data = action.payload;

        });

        // Handle rejected state (API request failed)
        builder.addCase(fetchIntegrations.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch integrations';
        });
    },
});

export default integrationSlice.reducer;
