import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import assistantAPi, { PropsAssistant } from 'src/api/chatbots/assistantsUser';
import { PropsDataAssisstant } from 'src/store/Interface/user/assisstant/PropsAssisstant';
// import { AssistantType } from '../type/assistantType';

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

export const fetchAssistantData = createAsyncThunk<PropsDataAssisstant[], PropsAssistant>(
  'fetchDataAssistant',
  async (dataa: PropsAssistant = {}, thunkAPI) => {
    try {
      const response = await assistantAPi.getAllAssistant(dataa);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);
const assistantSlice = createSlice({
  name: 'assistant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssistantData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAssistantData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
      })
      .addCase(fetchAssistantData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default assistantSlice.reducer;
