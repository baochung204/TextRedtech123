import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import productsApi from 'src/api/userProducts/products';
import { ProductType } from './type/productByIdType';

interface ShopI {
  data: ProductType;
  loading: boolean;
  error: string | null;
}

const initialState: ShopI = {
  data: {
    productInfo: {
      productId: 0,
      name: '',
      description: '',
      category: '',
      point: 0,
      priceAfterDiscount: 0,
      productImages: [],
      productTags: [],
      isQuantity: false,
      isOwn: false,
    },
    detailInformation: '',
    userManual: '',
    campaign: {
      badgeUrl: '',
      campaignName: '',
      groupCampaign: '',
      level: 0,
    },
    model: {
      modelName: '',
      baseModel: '',
      trainedToken: 0,
    },
    function: {
      name: '',
      badgeUrl: '',
    },
    knowledgeFile: {
      fileName: '',
      size: '',
      type: '',
    },
    assistantPack: {
      name: '',
      gender: '',
      dateOfBirth: '',
      education: '',
      nation: '',
      language: '',
      maxFileQuantity: '',
      maxStorage: '',
      expertise: [],
      personality: [],
      fileNames: [],
      functionNames: [],
      model: {
        modelName: '',
        baseModel: '',
        trainedToken: 0,
      },
      campaign: {
        badgeUrl: '',
        campaignName: '',
        groupCampaign: '',
        level: 0,
      },
    },
    unit: '',
  },
  loading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk<ProductType, number | string>(
  'productById/fetchData',
  async (id, thunkAPI) => {
    try {
      const response = await productsApi.getProductById(id);
      return response.data.result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const ProductByIdSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<ProductType>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ProductByIdSlice.reducer;
