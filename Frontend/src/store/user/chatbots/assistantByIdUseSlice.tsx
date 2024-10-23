import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import assistantAPi from 'src/api/chatbots/assistantsUser';
import { ChatBotData } from './type/assistantByIdType';

const ChatBotDataI: ChatBotData = {
  chatBotInfo: {
    chatBotId: 0,
    name: '',
    avatar: '',
    modelName: '',
    totalToken: 0,
    level: '',
    exp: 0,
    expMax: 0,
    dateOfBirth: '',
    gender: '',
    nation: '',
    language: '',
    education: '',
    chatBotPersonalities: [],
    chatBotExpertises: [],
    campaignName: '',
    campaignBadge: '',
  },
  chatBotIndex: {
    customer: 0,
    converts: 0,
    expense: 0,
    costToRevenueRatio: 0,
    costPerOrderRatio: 0,
    costPerCustomerRatio: 0,
    gvm: 0,
    cvr: 0,
    aov: 0,
  },
  chatBotResource: {
    fileSlot: 0,
    fileSlotMax: 0,
    functionSlot: 0,
    storage: 0,
    storageMax: 0,
    chatBotFunctions: [],
    chatbotFiles: [],
  },
};

interface StrState {
  data: ChatBotData;
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  data: ChatBotDataI,
  loading: false,
  error: null,
};

export const fetchAssistantById = createAsyncThunk(
  'fetchAssistantById',
  async (id: number | null, thunkAPI) => {
    try {
      const response = await assistantAPi.getAssistantById(id as number | null);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const assistantByIdSlice = createSlice({
  name: 'assistantById',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssistantById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAssistantById.fulfilled, (state, action: PayloadAction<ChatBotData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAssistantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default assistantByIdSlice.reducer;
