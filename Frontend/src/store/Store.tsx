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
import PointSlice from './apps/point/PointSlice';
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
import assisstantSlice from './user/chatbots/assisstantUserSlice';
import twofaSlice from './user/2-factor-authentication/twofaSlice';
import cartSlice from './user/cart/cartSlice';
import staffSlice from 'src/api/admin/staff/Staff'; // Adjust the import path as necessary
import blogSlice from './admin/blog/overview/blogSlice';
import counponSlice from './admin/counpon/counponlist/overview/counponSlice';
import counponhistorySlice from './admin/counpon/counponhistory/table/counponthistorySlice';
import flashsaleoverviewSlice from './admin/counpon/flashsale/overview/flashsaleOverviewSlice';
import counponlistSlice from './admin/counpon/counponlist/table/counponlistSlice';
import flashsaleSlice from './admin/counpon/flashsale/table/flashsaleSlice';
import staffoverviewSlice from './admin/Staff/overview/overviewStaffSlice';

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
    points: PointSlice,
    vnd_coupons: vndCouponsSlice,
    str: StrReducer,
    function: functionReducer,
    file: fileReducer,
    test: userSlice,
    assisstant: assisstantSlice,
    twofa: twofaSlice,
    cart: cartSlice,
    staff: staffSlice,
    //admin
    overview_blog: blogSlice,
    overview_counpon: counponSlice,
    counpon_history: counponhistorySlice,
    overview_flashsale: flashsaleoverviewSlice,
    counpon_list: counponlistSlice,
    flashsale_list: flashsaleSlice,
    overview_staff: staffoverviewSlice,
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
  points: PointSlice,
  vnd_coupons: vndCouponsSlice,
  product: productReducer,
  str: StrReducer,
  function: functionReducer,
  file: fileReducer,
  test: userSlice,
  assisstant: assisstantSlice,
  twofa: twofaSlice,
  cart: cartSlice,
  staff: staffSlice,
  //admin
  overview_blog: blogSlice,
  overview_counpon: counponSlice,
  counpon_history: counponhistorySlice,
  overview_flashsale: flashsaleoverviewSlice,
  counpon_list: counponlistSlice,
  flashsale_list: flashsaleSlice,
  overview_staff: staffoverviewSlice,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch } = store;
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;

export default store;
