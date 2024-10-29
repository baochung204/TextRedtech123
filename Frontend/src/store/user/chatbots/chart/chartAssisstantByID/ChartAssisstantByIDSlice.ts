import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import assistantAPi, { PropsData } from "src/api/chatbots/assistantsUser";
import { TypeChartAssisstant } from "./TypeChart";



interface ChartAssisstant {
    data: TypeChartAssisstant,
    loading: boolean,
    error: string | null
}

const initialState: ChartAssisstant = {
    data: {
        status: null,
        chart: []
    },
    loading: false,
    error: null,
};

export const fetchChartAssisstant = createAsyncThunk(
    'fetchChartAssisstant',
    async ({ chatbot_id, object = {} }: { chatbot_id: number, object?: PropsData }, thunkAPI) => {
        try {
            const res = await assistantAPi.getChartByID(chatbot_id, object);
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