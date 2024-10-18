import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import assisstantAPi from "src/api/chatbots/assistantsUser";
import { PropsDataAssisstant } from "src/store/Interface/user/assisstant/PropsAssisstant";





interface StrState {
    dataa: PropsDataAssisstant[];
    loading: boolean;
    error: string | null;
}

const initialState: StrState = {
    dataa: [],
    loading: false,
    error: null,
};

export const fetchAssisstantData = createAsyncThunk(
    'fetchDataAssisstant',
    async (_, thunkAPI) => {
        try {
            const response = await assisstantAPi.getAllAssisstant();
            return response.data.result;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

const assisstantSlice = createSlice({
    name: 'assisstant',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAssisstantData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAssisstantData.fulfilled, (state, action) => {
                state.loading = false;
                state.dataa = action.payload;
            })
            .addCase(fetchAssisstantData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default assisstantSlice.reducer;