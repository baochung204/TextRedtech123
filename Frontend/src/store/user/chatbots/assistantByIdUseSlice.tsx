import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import assistantApi from 'src/api/chatbots/assistantsUser';
import { ChatBotIndex, ChatBotInfo, ChatBotResource } from '../products/type/productByIdType';

const initialChatBotInfo: ChatBotInfo = {
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
  badgeUrl: '',
};

const initialChatBotIndex: ChatBotIndex = {
  customer: 0,
  converts: 0,
  expense: 0,
  costToRevenueRatio: 0,
  costPerOrderRatio: 0,
  costPerCustomerRatio: 0,
  gvm: 0,
  cvr: 0,
  aov: 0,
};

const initialChatBotResource: ChatBotResource = {
  fileSlot: 0,
  fileSlotMax: 0,
  functionSlot: 0,
  storageFile: '',
  storage: 0,
  storageMax: 0,
  chatBotFunctions: [],
  chatbotFiles: [],
};

const initialChatBotData = {
  chatBotInfo: initialChatBotInfo,
  chatBotIndex: initialChatBotIndex,
  chatBotResource: initialChatBotResource,
};

interface StrState {
  data: typeof initialChatBotData; // Thay đổi kiểu dữ liệu ở đây
  loading: boolean;
  error: string | null;
}

const initialState: StrState = {
  data: initialChatBotData,
  loading: false,
  error: null,
};

export const fetchAssistantById = createAsyncThunk(
  'assistantById/fetchAssistantById',
  async ({ id }: { id: number }, thunkAPI) => {
    try {
      const response = await assistantApi.getAssistantById(id);
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
      .addCase(
        fetchAssistantById.fulfilled,
        (state, action: PayloadAction<typeof initialChatBotData>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchAssistantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default assistantByIdSlice.reducer;
