import { loading } from 'src/assets/images/certificate/loadingre.png';
import { createSlice } from '@reduxjs/toolkit';
import { chatbotConfigType } from './type/assistantConfigById';

interface StateI {
  data: chatbotConfigType;
  loading: boolean;
  error: string | null;
}
const initialState: StateI = {
  data: {
    chatBotInfoInConfigResponse: {
      chatBotId: 0,
      name: '',
      avatar: '',
      modelName: '',
      dateOfBirth: '',
      institution: '',
      gender: '',
      nation: '',
      language: '',
      education: '',
      campaignName: '',
      campaignBadge: '',
      chatBotPersonalities: [],
      chatBotExpertises: [],
    },
    chatBotConvertResponse: {
      note: true,
      email: true,
      address: true,
      phoneNumber: true,
      customerName: true,
      orderInfo: true,
      rate: true,
    },
    chatBotResourceInConfigResponse: {
      fileSlotRemaining: 0,
      storageSlotRemaining: 0,
      fileSlot: 0,
      storage: 0,
      files: [
        {
          id: 0,
          fileName: '',
          size: '',
          type: '',
        },
      ],
      functions: [{ name: '', badgeUrl: '' }],
      images: [{ imageUrl: '', fileName: '' }],
      urls: [],
      products: [
        {
          product_id: 0,
          name: '',
          point: 0,
          price_after_discount: 0,
          amount_discount: 0,
          discount: 0,
          image_url: '',
          quantity: 0,
          tags: [{ tag_id: 0, tag_name: '' }],
          category_id: 0,
          category_name: '',
          total_buy: 0,
          total_revenue: 0,
          revenue_share: 0,
        },
      ],
    },
    integrationResponses: [
      {
        integrationId: 0,
        integrationName: '',
        isActive: true,
      },
    ],
    productResponses: [
      {
        product_id: 0,
        name: '',
        point: 0,
        price_after_discount: 0,
        amount_discount: 0,
        discount: 0,
        image_url: '',
        quantity: 0,
        tags: [{ tag_id: 0, tag_name: '' }],
        category_id: 0,
        category_name: '',
        total_buy: 0,
        total_revenue: 0,
        revenue_share: 0,
      },
    ],
  },
  loading: false,
  error: null,
};
