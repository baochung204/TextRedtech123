import { configureStore } from '@reduxjs/toolkit';
import BlogReducer from './apps/blog/BlogSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import ContactsReducer from './apps/contacts/ContactSlice';
import EcommerceReducer from './apps/eCommerce/ECommerceSlice';
import EmailReducer from './apps/email/EmailSlice';
import integrationReducer from './apps/integration/integrationSlice';
import NotesReducer from './apps/notes/NotesSlice';
import TicketReducer from './apps/tickets/TicketSlice';
import UserProfileReducer from './apps/userProfile/UserProfileSlice';
import CustomizerReducer from './customizer/CustomizerSlice';
import SelectedReducer from './RouterSlice';
import productReducer from './apps/products/productsSlice';
import UrlSlice from './apps/resources/url/UrlSlice';
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import { combineReducers } from 'redux';
import CustomerReducer from './apps/customer/customerSlice';
import CustomerAffiliate from './apps/customer/customerSliceAffiliate';
import StrReducer from './apps/resources/str/strSlice';
import functionReducer from './apps/resources/function/functionSlice';
import fileReducer from './apps/resources/file/fileSlice';
import ImageSlice from './apps/resources/image/ImageSlice';
import vndCouponsSlice from './apps/vnd_coupons/Vnd_CouponsSlice';
import userSlice from './user/user-resources/userSlice';
import assistantSlice from './user/chatbots/assisstantUserSlice';
import twofaSlice from './user/2-factor-authentication/twofaSlice';
import cartSlice from './user/cart/cartSlice';
import adminTicketSlice from './admin/admin-ticket/AdminTicketSlice';
// import overViewTicketSlice from './admin/admin-ticket/OverViewTicket';
import usermeSlice from 'src/store/user/userme/usermeSlice';
import staffSlice from './admin/Staff/Staff'; // Adjust the import path as necessary
import blogSlice from './admin/blog/overview/blogSlice';
import counponSlice from './admin/counpon/counponlist/overview/counponSlice';
import counponhistorySlice from './admin/counpon/counponhistory/table/counponthistorySlice';
import flashsaleoverviewSlice from './admin/counpon/flashsale/overview/flashsaleOverviewSlice';
import counponlistSlice from './admin/counpon/counponlist/table/counponlistSlice';
import affiliateApiSlice from './user/affiliate-account/affiliate-account';
import BlogSlice from './user/blogs/blog';
import flashsaleSlice from './admin/counpon/flashsale/table/flashsaleSlice';
import CampaignsSlice from 'src/store/user/user-resources/campaigns/campaignsUseSlice';
import staffoverviewSlice from './admin/Staff/overview/overviewStaffSlice';
import CampaignSlice from './admin/resources/campaign/overview/campaignSlice';
import functionsSlice from 'src/store/user/user-resources/functions/functionsUseSlice';
import modelsSlice from 'src/store/user/user-resources/models/modelsUseSlice';
import imagesSlice from 'src/store/user/user-resources/images/imagesUesSlice';
import filesSlice from 'src/store/user/user-resources/files/filesUseSlice';
import functionSlice from './admin/resources/function/overview/functionSlice';
import flashSaleRandomSlice from './user/flashsale-random/flashsaleSlice';
import urlsSlice from 'src/store/user/user-resources/urls/urlsUseSlice';
import fileSlice from './admin/resources/files/overview/filesSlice';
import listPointSlice from './user/points/listPointSlice';
import modelSlice from './admin/resources/model/overview/modelSlice';
import CampaignListSlice from './admin/resources/campaign/table/campaignListSlice';
import fileListSlice from './admin/resources/files/table/filesListSlice';
import functionListSlice from './admin/resources/function/table/functionListSlice';
import modelListSlice from './admin/resources/model/table/modelListSlice';

export const store = configureStore({
  reducer: {
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
    urlResources: UrlSlice,
    imageResources: ImageSlice,
    product: productReducer,
    customeraffiliate: CustomerAffiliate,
    vnd_coupons: vndCouponsSlice,
    str: StrReducer,
    function: functionReducer,
    file: fileReducer,
    test: userSlice,
    assisstant: assistantSlice,
    twofa: twofaSlice,
    flashsale_random: flashSaleRandomSlice,
    adminTicker: adminTicketSlice,
    cart: cartSlice,
    // overViewTicket: overViewTicketSlice,
    userme: usermeSlice,
    staff: staffSlice,
    resourcesCampaigns: CampaignsSlice,
    resourcesFunctions: functionsSlice,
    resourcesFiles: filesSlice,
    resourcesModels: modelsSlice,
    resourcesImages: imagesSlice,
    resourcesUrls: urlsSlice,
    affiliate: affiliateApiSlice,
    blogs: BlogSlice,
    point_list: listPointSlice,
    //admin
    overview_blog: blogSlice,
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
  },
});

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
  urlResources: UrlSlice,
  imageResources: ImageSlice,
  customeraffiliate: CustomerAffiliate,
  vnd_coupons: vndCouponsSlice,
  product: productReducer,
  str: StrReducer,
  function: functionReducer,
  file: fileReducer,
  test: userSlice,
  //assistant
  assisstant: assistantSlice,
  flashsale_random: flashSaleRandomSlice,
  twofa: twofaSlice,
  adminTicker: adminTicketSlice,
  cart: cartSlice,
  staff: staffSlice,
  resourcesCampaigns: CampaignsSlice,
  resourcesFunctions: functionsSlice,
  resourcesFiles: filesSlice,
  // overViewTicket: overViewTicketSlice,
  userme: usermeSlice,
  blogs: BlogSlice,
  affiliate: affiliateApiSlice,
  point_list: listPointSlice,
  //admin
  overview_blog: blogSlice,
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

});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch } = store;
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;

export default store;
