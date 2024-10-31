import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import assistantAPi from 'src/api/chatbots/assistantsUser';
import { PropsDataAssisstant } from 'src/store/Interface/user/assisstant/PropsAssisstant';

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

export const fetchAssistantData = createAsyncThunk('fetchDataAssistant', async (_, thunkAPI) => {
  try {
    const response = await assistantAPi.getAllAssistant();
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
  }
});
export const fetchAssistantById = createAsyncThunk(
  'fetchAssistantById',
  async (id: number, thunkAPI) => {
    try {
      const response = await assistantAPi.getAssistantById(id);
      console.log('datatest', response.data.result);

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
      })
      .addCase(fetchAssistantById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAssistantById.fulfilled, (state, action) => {
        state.loading = false;
        state.dataa = action.payload;
        const index = state.dataa.findIndex(
          (assistant) => assistant.chatbotId === action.payload.chatbotId,
        );
        if (index !== -1) {
          state.dataa[index] = action.payload;
        }
      })
      .addCase(fetchAssistantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default assistantSlice.reducer;
