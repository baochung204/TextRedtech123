import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import assistantAPi from "src/api/chatbots/assistantsUser";
import { TypeChartAssisstant } from "./TypeChart";



interface ChartAssisstant {
    data: TypeChartAssisstant,
    loading: boolean,
    error: string | null
}

const initialState: ChartAssisstant = {
    data: {},
    loading: false,
    error: null,
};

interface PropsData {
    chatbotID: number,
    typeChart: string,
    startDate?: Date,
    endDate?: Date
}

export const fetchChartAssisstant = createAsyncThunk(
    'fetchChartAssisstant',
    async ({ chatbotID, typeChart, startDate, endDate }: PropsData, thunkAPI) => {
        try {
            const res = await assistantAPi.getChartByID(chatbotID, typeChart, startDate, endDate);
            return res.data.result
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)

const ChartAssisstantSlice = createSlice({
    name: 'chartAssisstant',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChartAssisstant.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChartAssisstant.fulfilled, (state, action: PayloadAction<TypeChartAssisstant>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchChartAssisstant.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
})


export default ChartAssisstantSlice.reducer;