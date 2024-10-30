import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import SelectedReducer from './RouterSlice';
import adminTicketSlice from './admin/admin-ticket/AdminTicketSlice';
import BlogReducer from './apps/blog/BlogSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import ContactsReducer from './apps/contacts/ContactSlice';
import CustomerReducer from './apps/customer/customerSlice';
import CustomerAffiliate from './apps/customer/customerSliceAffiliate';
import EcommerceReducer from './apps/eCommerce/ECommerceSlice';
import EmailReducer from './apps/email/EmailSlice';
import integrationReducer from './apps/integration/integrationSlice';
import NotesReducer from './apps/notes/NotesSlice';
import productReducer from './apps/products/productsSlice';
import fileReducer from './apps/resources/file/fileSlice';
import functionReducer from './apps/resources/function/functionSlice';
import ImageSlice from './apps/resources/image/ImageSlice';
import StrReducer from './apps/resources/str/strSlice';
import TicketReducer from './apps/tickets/TicketSlice';
import UserProfileReducer from './apps/userProfile/UserProfileSlice';
import vndCouponsSlice from './apps/vnd_coupons/Vnd_CouponsSlice';
import CustomizerReducer from './customizer/CustomizerSlice';
import twofaSlice from './user/2-factor-authentication/twofaSlice';
import cartSlice from './user/cart/cartSlice';
import assistantSlice from './user/chatbots/chart/assisstantUserSlice';
import userSlice from './user/user-resources/userSlice';
// import overViewTicketSlice from './admin/admin-ticket/OverViewTicket';
import assistantByIdSlice from 'src/store/user/chatbots/assistantByIdUseSlice';
import ProductByIdSlice from 'src/store/user/products/productByIdUseSlice';
import ProductsSlice from 'src/store/user/products/productsUseSlice';
import CampaignsSlice from 'src/store/user/user-resources/campaigns/campaignsUseSlice';
import filesSlice from 'src/store/user/user-resources/files/filesUseSlice';
import functionsSlice from 'src/store/user/user-resources/functions/functionsUseSlice';
import imagesSlice from 'src/store/user/user-resources/images/imagesUesSlice';
import ModelsSlice from 'src/store/user/user-resources/models/modelsUseSlice';
import urlsSlice from 'src/store/user/user-resources/urls/urlsUseSlice';
import usermeSlice from 'src/store/user/userme/usermeSlice';
import staffSlice from './admin/Staff/Staff';
import staffoverviewSlice from './admin/Staff/overview/overviewStaffSlice';
import ticketOverviewSlice from './admin/admin-ticket/OverViewTicketSlice';
// import overviewWithdrawalHistory from './admin/affiliate/historywithdrawal/overview/historyWithdrawlOverviewSlice';
// import historyWithdrawalSlice from './admin/affiliate/historywithdrawal/table/historyWithdrawalSlice';
// import overviewOrderAffiliate from './admin/affiliate/orderaffiliate/oveview/orderAffiliateOverviewSlice';
// import listOrderAffiliateSlice from './admin/affiliate/orderaffiliate/table/orderAffiliateSlice';
// import overviewPublisher from './admin/affiliate/publisher/overview/publisherOverviewSlice';
// import listPublisherSlice from './admin/affiliate/publisher/table/listPublisherSlice';
// import blogSlice from './admin/blog/overview/blogSlice';
// import overviewBillSlice from './admin/contract/bill/overview/billOverviewSlice';
// import listBillSlice from './admin/contract/bill/table/listBillSlice';
// import overviewContractAffiliateSlice from './admin/contract/contractaffiliate/overview/contractAffiliateSlice';
// import listContractAffiliateSlice from './admin/contract/contractaffiliate/table/contractAffiliateListSlice';
// import overviewContractRuleSlice from './admin/contract/contractrule/overview/contractRuleSlice';
// import listContractRuleSlice from './admin/contract/contractrule/table/contractRuleSlice';
import counponhistorySlice from './admin/counpon/counponhistory/table/counponthistorySlice';
import counponSlice from './admin/counpon/counponlist/overview/counponSlice';
import counponlistSlice from './admin/counpon/counponlist/table/counponlistSlice';
import listProductFlashSaleSlice from './admin/counpon/flashsale/addflashsale/listProductSelectSlice';
import flashsaleoverviewSlice from './admin/counpon/flashsale/overview/flashsaleOverviewSlice';
import flashsaleSlice from './admin/counpon/flashsale/table/flashsaleSlice';
import customerAdminSlice from './admin/customer/overview/customerSlice';
import overviewNotificationSlice from './admin/notification/overview/notificationSlice';
import CampaignSlice from './admin/resources/campaign/overview/campaignSlice';
import CampaignListSlice from './admin/resources/campaign/table/campaignListSlice';
import fileSlice from './admin/resources/files/overview/filesSlice';
import fileListSlice from './admin/resources/files/table/filesListSlice';
import functionSlice from './admin/resources/function/overview/functionSlice';
import functionListSlice from './admin/resources/function/table/functionListSlice';
import modelSlice from './admin/resources/model/overview/modelSlice';
import modelListSlice from './admin/resources/model/table/modelListSlice';
import orderProductAdminSlice from './admin/sell/orderproduct/overview/orderproductSlice';
// import orderProductListSlice from './admin/sell/orderproduct/table/listOrderProductSlice';
import productAdminSlice from './admin/sell/product/overview/productSlice';
import affiliateApiSlice from './user/affiliate-account/affiliate-account';
import listCustomerSlice from './user/affiliate/customer/listCustomerSlice';
import historyPaymentSlice from './user/affiliate/overview/historyPaymentSlice';
import listOrderSlice from './user/affiliate/overview/listOrderSlice';
import overviewAffiliateSlice from './user/affiliate/overview/overviewSlice';
import BlogSlice from './user/chatbots/chart/blogs/blog';
import ChartAssisstantReducer from './user/chatbots/chart/chartAssisstantByID/ChartAssisstantByIDSlice';
import selectAssistantSlice from './user/dashboard/filter/selectAssistantSlice';
import flashSaleRandomSlice from './user/flashsale-random/flashsaleSlice';
import historyDialogSlice from './user/historyorder/historyDialogSlice';
import historyOrderListSlice from './user/historyorder/historyOrderSlice';
import couponRandomSlice from './user/points/couponRandomSlice';
import listPointSlice from './user/points/listPointSlice';
import withdrawalDetailSlice from './admin/affiliate/historywithdrawal/withdrawaldetail/withdrawalDetailSlice';
import orderProductDetailSlice from './admin/sell/orderproduct/detailorderproduct/detailOrderProductSlice';
import listCustomerAdminSlice from './admin/customer/table/listCustomerSlice';
import notificationListSlice from './admin/notification/table/notificationListSlice';
import overviewBillSlice from './admin/contract/bill/overview/billOverviewSlice';
import overviewContractRuleSlice from './admin/contract/contractrule/overview/contractRuleSlice';
import overviewContractAffiliateSlice from './admin/contract/contractaffiliate/overview/contractAffiliateSlice';
import overviewWithdrawalHistory from './admin/affiliate/historywithdrawal/overview/historyWithdrawlOverviewSlice';
import overviewPublisher from './admin/affiliate/publisher/overview/publisherOverviewSlice';
import overviewOrderAffiliate from './admin/affiliate/orderaffiliate/oveview/orderAffiliateOverviewSlice';
import listContractAffiliateSlice from './admin/contract/contractaffiliate/table/contractAffiliateListSlice';
import listContractRuleSlice from './admin/contract/contractrule/table/contractRuleSlice';
import listOrderAffiliateSlice from './admin/affiliate/orderaffiliate/table/orderAffiliateSlice';
import listPublisherSlice from './admin/affiliate/publisher/table/listPublisherSlice';
import historyWithdrawalSlice from './admin/affiliate/historywithdrawal/table/historyWithdrawalSlice';
import orderProductListSlice from './admin/sell/orderproduct/table/listOrderProductSlice';
import listBillSlice from './admin/contract/bill/table/listBillSlice';

const rootReducer = combineReducers({
  //user
  customizer: CustomizerReducer,
  ecommerceReducer: EcommerceReducer,
  chatReducer: ChatsReducer,
  emailReducer: EmailReducer,
  notesReducer: NotesReducer,
  contactsReducer: ContactsReducer,
  ticketReducer: TicketReducer,
  userpostsReducer: UserProfileReducer,
  blogReducer: BlogReducer,
  selectReducer: SelectedReducer,
  integration: integrationReducer,
  customer: CustomerReducer,
  imageResources: ImageSlice,
  customeraffiliate: CustomerAffiliate,
  vnd_coupons: vndCouponsSlice,
  product: productReducer,
  str: StrReducer,
  function: functionReducer,
  file: fileReducer,
  test: userSlice,
  resourcesModels: ModelsSlice,
  resourcesUrls: urlsSlice,
  //Dashboard
  selectAssistant: selectAssistantSlice,
  //Assistant
  assisstant: assistantSlice,
  assistantById: assistantByIdSlice,
  //Products
  products: ProductsSlice,
  productById: ProductByIdSlice,
  flashsale_random: flashSaleRandomSlice,
  twofa: twofaSlice,
  adminTicker: adminTicketSlice,
  cart: cartSlice,
  staff: staffSlice,
  resourcesCampaigns: CampaignsSlice,
  resourcesFunctions: functionsSlice,
  resourcesFiles: filesSlice,
  resourcesImages: imagesSlice,
  chartAssisstantID: ChartAssisstantReducer,
  // overViewTicket: overViewTicketSlice,
  userme: usermeSlice,
  blogs: BlogSlice,
  affiliate: affiliateApiSlice,
  point_list: listPointSlice,
  historyorder_list: historyOrderListSlice,
  historyorder_detail: historyDialogSlice,
  list_order: listOrderSlice,
  list_paymenthistory: historyPaymentSlice,
  list_customer: listCustomerSlice,
  //admin
  // overview_blog: blogSlice,
  overview_counpon: counponSlice,
  counpon_history: counponhistorySlice,
  overview_flashsale: flashsaleoverviewSlice,
  counpon_list: counponlistSlice,
  flashsale_list: flashsaleSlice,
  overview_staff: staffoverviewSlice,
  overview_campaign: CampaignSlice,
  overview_function: functionSlice,
  overview_files: fileSlice,
  overview_models: modelSlice,
  campaign_list: CampaignListSlice,
  files_list: fileListSlice,
  function_list: functionListSlice,
  model_list: modelListSlice,
  overview_customer: customerAdminSlice,
  overview_product: productAdminSlice,
  overview_order: orderProductAdminSlice,
  overview_ticket: ticketOverviewSlice,
  randomcoupon: couponRandomSlice,
  overview_notification: overviewNotificationSlice,
  overview_affiliate: overviewAffiliateSlice,
  overview_contractaffiliate: overviewContractAffiliateSlice,
  overview_bill: overviewBillSlice,
  overview_contractrule: overviewContractRuleSlice,
  overview_withdrawal_history: overviewWithdrawalHistory,
  overview_publisher: overviewPublisher,
  overview_order_affiliate: overviewOrderAffiliate,
  list_contract_affiliate: listContractAffiliateSlice,
  list_contract_rule: listContractRuleSlice,
  list_order_affiliate: listOrderAffiliateSlice,
  list_publisher: listPublisherSlice,
  list_withdrawal_history: historyWithdrawalSlice,
  list_order_product: orderProductListSlice,
  list_bill: listBillSlice,
  list_product_flashsale: listProductFlashSaleSlice,
  detailWithdrawal: withdrawalDetailSlice,
  detailOrderProduct: orderProductDetailSlice,
  listCustomer: listCustomerAdminSlice,
  listNotification: notificationListSlice,
});

const whitelistReducers = [
  'randomcoupon',
  'point_list',
  'historyorder_detail',
  'historyorder_list',
];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: whitelistReducers,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch } = store;
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;
export default store;

// export const store = configureStore({
//   reducer: {
//     //user
//     customizer: CustomizerReducer,
//     ecommerceReducer: EcommerceReducer,
//     chatReducer: ChatsReducer,
//     emailReducer: EmailReducer,
//     notesReducer: NotesReducer,
//     contactsReducer: ContactsReducer,
//     ticketReducer: TicketReducer,
//     userpostsReducer: UserProfileReducer,
//     blogReducer: BlogReducer,
//     selectReducer: SelectedReducer,
//     integration: integrationReducer,
//     customer: CustomerReducer,
//     urlResources: UrlSlice,
//     imageResources: ImageSlice,
//     product: productReducer,
//     customeraffiliate: CustomerAffiliate,
//     vnd_coupons: vndCouponsSlice,
//     str: StrReducer,
//     function: functionReducer,
//     file: fileReducer,
//     test: userSlice,
//     assisstant: assistantSlice,
//     twofa: twofaSlice,
//     flashsale_random: flashSaleRandomSlice,
//     adminTicker: adminTicketSlice,
//     cart: cartSlice,
//     // overViewTicket: overViewTicketSlice,
//     userme: usermeSlice,
//     staff: staffSlice,
//     resourcesCampaigns: CampaignsSlice,
//     resourcesFunctions: functionsSlice,
//     resourcesFiles: filesSlice,
//     resourcesModels: ModelsSlice,
//     resourcesImages: imagesSlice,
//     resourcesUrls: urlsSlice,
//     affiliate: affiliateApiSlice,
//     blogs: BlogSlice,
//     point_list: listPointSlice,
//     //admin
//     overview_blog: blogSlice,
//     overview_counpon: counponSlice,
//     counpon_history: counponhistorySlice,
//     overview_flashsale: flashsaleoverviewSlice,
//     counpon_list: counponlistSlice,
//     flashsale_list: flashsaleSlice,
//     overview_staff: staffoverviewSlice,
//     overview_campaign: CampaignSlice,
//     overview_function: functionSlice,
//     overview_files: fileSlice,
//     overview_models: modelSlice,
//     campaign_list: CampaignListSlice,
//     files_list: fileListSlice,
//     function_list: functionListSlice,
//     model_list: modelListSlice,
//     overview_customer: customerAdminSlice,
//     overview_product: productAdminSlice,
//     overview_order: orderProductAdminSlice,
//   },
// });
