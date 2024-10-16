import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import assisstantAPi from "src/api/chatbots/assistantsUser";



interface PropsData {

    chatbotId: number,
    chatbotName: string,
    modelName: string,
    avatar: string,
    badgeUrl: string,
    exp: number,
    expMax: number,
    isActive: boolean,
    conversionRate: number,
    customer: number,
    conversion: number,
    totalIncome: number,
    gmv: number,
    aov: number

}



interface StrState {
    dataa: PropsData[];
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
            return response.data;
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