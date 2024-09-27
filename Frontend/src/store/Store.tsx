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

export const store = configureStore({
  reducer: {
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
    str: StrReducer,
    function: functionReducer,
    file: fileReducer
  },
});

const rootReducer = combineReducers({
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
  product: productReducer,
  str: StrReducer,
  function: functionReducer,
  file: fileReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch } = store;
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;

export default store;
