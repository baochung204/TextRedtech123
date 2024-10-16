import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'src/api/userResource/UserResource';


interface PropsData {
    fileId: number,
    name: string,
    size: string,
    date: Date,
    type: string,
    action: boolean
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

export const fetchStrData = createAsyncThunk(
    'str/fetchData',
    async ({ page = 0, size = 25 }: { page?: number; size?: number }, thunkAPI) => {
        try {
            const response = await userApi.getAllFiles(page, size); 
            return response.data; 
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

const userSlice = createSlice({
    name: 'str',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStrData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStrData.fulfilled, (state, action) => {
                state.loading = false;
                state.dataa = action.payload;
            })
            .addCase(fetchStrData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default userSlice.reducer;