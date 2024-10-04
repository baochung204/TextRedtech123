import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
const ChangePassword = Loadable(
  lazy(() => import('src/components/apps/userprofile/profile/ChangePassword')),
);
const CompanyAffiliate = Loadable(
  lazy(() => import('src/components/apps/userprofile/profile/CompanyAffiliate')),
);
const PersonAffiliate = Loadable(
  lazy(() => import('src/components/apps/userprofile/profile/PersonAffiliate')),
);
const AllNotifications = Loadable(
  lazy(() => import('src/layouts/full/vertical/header/AllNotification')),
);
const Affiliatepro = Loadable(lazy(() => import('src/views/admin/affiliatepro/affiliatepro')));

const EInvoice = Loadable(lazy(() => import('src/views/admin/EInvoice/EInvoice')));
const Feature = Loadable(lazy(() => import('src/views/admin/feature/feature')));

const Notification = Loadable(lazy(() => import('src/views/admin/notification/notification')));
const Packagepoint = Loadable(lazy(() => import('src/views/admin/packagepoint/packagepoint')));
const Pointdetail = Loadable(lazy(() => import('src/views/admin/pointdetail/pointdetail')));
const ProductAdmin = Loadable(lazy(() => import('src/views/admin/product/product')));
const Resources = Loadable(lazy(() => import('src/views/admin/resources/resources')));
const Staff = Loadable(lazy(() => import('src/views/admin/staff')));
const VoucherAdmin = Loadable(lazy(() => import('src/views/admin/voucher/voucher')));
const CustomerList2 = Loadable(lazy(() => import('src/views/apps/customerList/CustomerList2')));
const CustomerListOrder = Loadable(
  lazy(() => import('src/views/apps/customerList/CustomerListOrder')),
);
const Update = Loadable(lazy(() => import('src/views/apps/update/Update')));
const Fail = Loadable(lazy(() => import('src/views/apps/user-profile/Fail')));
const Pending = Loadable(lazy(() => import('src/views/apps/user-profile/Pending')));
const Success = Loadable(lazy(() => import('src/views/apps/user-profile/Success')));
const AssistantAdmin = Loadable(lazy(() => import('../views/admin/assistant/assistant')));

const AssistantEditorAdmin = Loadable(
  lazy(() => import('src/views/admin/assistant/AssistantEditorAdmin')),
);

import Loadable from '../layouts/full/shared/loadable/Loadable';
const BlogAdmin = Loadable(lazy(() => import('src/views/admin/blog/blog')));
const PageFeature = Loadable(lazy(() => import('src/views/admin/feature/feature')));
const ErrorAdmin = Loadable(lazy(() => import('src/views/authentication/ErrorAdmin')));
const BuyPoints = Loadable(lazy(() => import('src/views/admin/buyproduct')));
const OrderAdminPages = Loadable(lazy(() => import('src/views/admin/order')));
const RPoints = Loadable(lazy(() => import('src/views/admin/rpoints/RPoints')));

const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const Layouadmin = Loadable(lazy(() => import('../layouts/full/Layoutadmin')));

const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
/* ****Pages***** */
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Modern')));
const EcommerceDash = Loadable(lazy(() => import('../views/dashboard/Ecommerce')));
const List = Loadable(lazy(() => import('../views/dashboard/List')));
//  admin
const DashboardAdmin = Loadable(lazy(() => import('../views/admin/ChartsAdmin/dashboard')));

/* ****Apps***** */
const Blog = Loadable(lazy(() => import('../views/apps/blog/Blog')));
const BlogDetail = Loadable(lazy(() => import('../views/apps/blog/BlogPost')));
const Contacts = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
const Collaborate = Loadable(lazy(() => import('../views/apps/collaborate/Collaborate')));
const CustomerList = Loadable(lazy(() => import('../views/apps/customerList/CustomerList')));
const Assistant = Loadable(lazy(() => import('../views/apps/assistant/Assistant')));
const AssistantEditor = Loadable(lazy(() => import('src/views/apps/assistant/AssistantEditor')));
const AssistantInfor = Loadable(lazy(() => import('src/views/apps/assistant/AssistantById')));
// const AssistantById = Loadable(lazy(() => import('../views/apps/assistant/AssistantById')));
const Integration = Loadable(lazy(() => import('../views/apps/integration/Integration')));
const Product = Loadable(lazy(() => import('../views/apps/sell/Product')));
const Chats = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Tickets = Loadable(lazy(() => import('../views/apps/tickets/Tickets')));
const Ecommerce = Loadable(lazy(() => import('../views/apps/eCommerce/Ecommerce')));
const EcommerceDetail = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceDetail')));
const EcomProductList = Loadable(lazy(() => import('../views/apps/eCommerce/EcomProductList')));
const EcomProductCheckout = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceCheckout')),
);
const Detailpoint = Loadable(lazy(() => import('../views/apps/collaborate/point/detailpoint')));
const Aff = Loadable(lazy(() => import('../views/apps/contract/Affiliate')));
const Client = Loadable(lazy(() => import('../views/apps/contract/Client')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/BigCalendar')));
const UserProfile = Loadable(lazy(() => import('../views/apps/user-profile/UserProfile')));
const Purchasehistory = Loadable(lazy(() => import('../views/apps/history/purchase-history')));
const Pointhistory = Loadable(lazy(() => import('../views/apps/history/point-history')));
const Followers = Loadable(lazy(() => import('../views/apps/user-profile/Followers')));
const Friends = Loadable(lazy(() => import('../views/apps/user-profile/Friends')));
const Gallery = Loadable(lazy(() => import('../views/apps/user-profile/Gallery')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));

//affiliate
const Affiliate = Loadable(lazy(() => import('../views/apps/user-profile/Affiliate')));
//Ai ticket
const Aisupport = Loadable(lazy(() => import('../views/apps/support/Aisupport')));
//update page
// const Update = Loadable(lazy(() => import('../views/apps/update/update')));
// ui components

const Faq = Loadable(lazy(() => import('../views/pages/faq/Faq')));

// charts

// tables

// widget

// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login2')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register2')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const ForgotPassword2 = Loadable(
  lazy(() => import('../views/authentication/auth2/ForgotPassword2')),
);
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const TwoSteps2 = Loadable(lazy(() => import('../views/authentication/auth2/TwoSteps2')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));
const Updating = Loadable(lazy(() => import('../views/authentication/Updating')));
// landingpage
// buypoint
const BuyPoint = Loadable(lazy(() => import('../views/buypoint/buypoint')));
// history
const HistoryBuyPoint = Loadable(lazy(() => import('../views/historybuypoint/historybuypoint')));
const HistoryBuyPointInProfile = Loadable(
  lazy(() => import('../views/apps/user-profile/historyBuyPointInProfile')),
);
const PurchaseHistoryInProfile = Loadable(
  lazy(() => import('../views/apps/user-profile/purchaseHistoryInProfile')),
);
// pay
const PaymentPoint = Loadable(lazy(() => import('../views/payment/payment')));
const PaymentPoint2 = Loadable(lazy(() => import('../views/payment2/payment2')));
//list assistant
const ListAssistantInProfile = Loadable(
  lazy(() => import('../views/apps/user-profile/ListAssistantInProfile')),
);
const OrderRPoint = Loadable(lazy(() => import('../views/admin/orderRPoint/OrderRPoint')));
const Ticket = Loadable(lazy(() => import('../views/admin/ticket/ticket')));
// const AssistantList = Loadable(
//   lazy(() => import('../components/apps/assistant/listAssistant/AssistantList')),
// );import Blog from './../views/apps/blog/Blog';

//admin affiliate
const OrderAffiliate = Loadable(lazy(() => import('../views/admin/affiliate/orderaffiliate')));
const Publisher = Loadable(lazy(() => import('../views/admin/publishers/publishers')));
const HistoryAffiliate = Loadable(lazy(() => import('../views/admin/affiliate/historyaffiliate')));
const ContactAffiliate = Loadable(lazy(() => import('../views/admin/affiliate/contactaffiliate')));
const ContactPoint = Loadable(lazy(() => import('../views/admin/affiliate/contactpoint')));
const ListAssistant = Loadable(lazy(() => import('../views/listAssistant/listAssistant')));
const FormRequest = Loadable(lazy(() => import('../views/suggestion/FormRequest')));
// const Suggestion = Loadable(lazy(() => import('')));
//history of contract

const ContractAffiliateUser = Loadable(
  lazy(() => import('../views/apps/historycontract/contractaffiliateuser')),
);
const ContractOrderUser = Loadable(
  lazy(() => import('../views/apps/historycontract/contractorderuser')),
);

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboards" /> },
      { path: '/dashboards', exact: true, element: <ModernDash /> },
      {
        path: '/user_profile/contract/contract_affiliate',
        exact: true,
        element: <ContractAffiliateUser />,
      },
      {
        path: '/user_profile/contract/contract_order',
        exact: true,
        element: <ContractOrderUser />,
      },
      { path: '/dashboards/ecommerce', exact: true, element: <EcommerceDash /> },
      { path: '/dashboards/list', exact: true, element: <List /> },
      { path: '/apps/list-assistant', element: <Assistant /> },
      { path: '/apps/assistant', element: <Assistant /> },
      { path: '/apps/assistant/add', element: <AssistantEditor /> },
      { path: '/apps/assistant/:id', element: <AssistantInfor /> },
      { path: '/integrations', element: <Integration /> },
      { path: '/products', element: <Product /> },
      { path: '/conversions', element: <CustomerListOrder /> },
      { path: '/apps/contacts', element: <Contacts /> },

      //       { path: '/apps/collaborate', element: <Collaborate /> },
      //       { path: '/customers', element: <CustomerList2 /> },
      //       { path: '/apps/customerlist', element: <CustomerList /> },

      { path: '/affiliate', element: <Collaborate /> },
      { path: '/customers', element: <CustomerList2 /> },
      { path: '/affiliate/list_customer', element: <CustomerList /> },

      { path: '/apps/contract-client', element: <Client /> },
      { path: '/apps/contract-affiliate', element: <Aff /> },
      { path: '/blogs', element: <Blog /> },
      { path: '/apps/blog/detail/:id', element: <BlogDetail /> },
      { path: '/tickets', element: <Chats /> },
      { path: '/apps/email', element: <Email /> },
      { path: '/apps/notes', element: <Notes /> },
      { path: '/apps/tickets', element: <Tickets /> },
      { path: '/update', element: <Update /> },
      { path: '/shops', element: <Ecommerce /> },
      { path: '/apps/ecommerce/eco-product-list', element: <EcomProductList /> },
      { path: '/carts', element: <EcomProductCheckout /> },
      { path: '/apps/point/detaipoint/:id', element: <Detailpoint /> },
      { path: '/apps/ecommerce/detail/:id', element: <EcommerceDetail /> },
      { path: '/apps/followers', element: <Followers /> },
      { path: '/apps/friends', element: <Friends /> },
      { path: '/user_profile/affiliate/register', element: <Affiliate /> },
      { path: '/apps/success', element: <Success /> },
      { path: '/apps/fail', element: <Fail /> },
      { path: '/apps/pending', element: <Pending /> },
      { path: '/apps/person-affiliate', element: <PersonAffiliate /> },
      { path: '/apps/company-affiliate', element: <CompanyAffiliate /> },
      { path: '/apps/gallery', element: <Gallery /> },
      { path: '/user_profile', element: <UserProfile /> },
      { path: '/pointhistory', element: <Pointhistory /> },
      { path: '/purchasehistory', element: <Purchasehistory /> },
      { path: '/apps/support', element: <Aisupport /> },
      { path: '/apps/calendar', element: <Calendar /> },

      { path: '/pages/faq', element: <Faq /> },
      { path: '/user_profile/assistants', element: <ListAssistantInProfile /> },
      { path: '/assistants', element: <ListAssistant /> },
      { path: '/buy/point', element: <BuyPoint /> },
      { path: '/pay/point', element: <PaymentPoint /> },
      { path: '/pay/point2', element: <PaymentPoint2 /> },
      { path: '/history/buy-point', element: <HistoryBuyPoint /> },
      {
        path: '/user_profile/point/transaction_point_history',
        element: <HistoryBuyPointInProfile />,
      },
      { path: '/user_profile/point/purchase_history', element: <PurchaseHistoryInProfile /> },
      { path: '/assistant/list', element: <ListAssistant /> },
      { path: '/notifications', element: <AllNotifications /> },
      { path: '*', element: <Navigate to="/error/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/error/404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/login2', element: <Login2 /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/register2', element: <Register2 /> },
      { path: '/auth/forgot-password2', element: <ForgotPassword /> },
      { path: '/auth/forgot-password', element: <ForgotPassword2 /> },
      { path: 'user-profile/changepassword', element: <ChangePassword /> },
      { path: '/auth/two-steps', element: <TwoSteps /> },
      { path: '/auth/two-steps2', element: <TwoSteps2 /> },
      { path: '/auth/maintenance', element: <Maintenance /> },
      { path: '/updating', element: <Updating /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/admin',
    element: <Layouadmin />,
    children: [
      { path: '/admin', element: <DashboardAdmin /> },
      { path: '/admin/dashboard', element: <AssistantAdmin /> },
      { path: '/admin/assistanteditoradmin', element: <AssistantEditorAdmin /> },
      { path: '/admin/assistant', element: <AssistantAdmin /> },
      { path: '/admin/shop/orderproducts', element: <ProductAdmin /> },
      { path: '/admin/shop/products', element: <BuyPoints /> },
      { path: '/admin/shop/packagepoint', element: <Packagepoint /> },
      { path: '/admin/pointdetail', element: <Pointdetail /> },
      { path: '/admin/voucher', element: <VoucherAdmin /> },
      { path: '/admin/affiliate/affiliatepro', element: <Affiliatepro /> },
      // { path: '/admin/affiliate/history', element: <History /> },
      { path: '/admin/staff', element: <Staff /> },
      { path: '/admin/feature', element: <PageFeature /> },
      { path: '/admin/point/packagepoint', element: <RPoints /> },
      { path: '/admin/blogs', element: <BlogAdmin /> },
      { path: '/admin/ticket', element: <Ticket /> },
      { path: '/admin/notification', element: <Notification /> },
      { path: '/admin/customer', element: <OrderAdminPages /> },
      { path: '/admin/point/orderRPoint', element: <OrderRPoint /> },
      { path: '/admin/resources', element: <Resources /> },
      { path: '/admin/einvoice', element: <EInvoice /> },
      { path: '/admin/order', element: <OrderAffiliate /> },
      { path: '/admin/contactaffiliate', element: <ContactAffiliate /> },
      { path: '/admin/contactpoint', element: <ContactPoint /> },
      { path: '/admin/publisher', element: <Publisher /> },
      { path: '/admin/history', element: <HistoryAffiliate /> },
      { path: '/admin/accountant/feature', element: <Feature /> },
      { path: '/admin/auth/404', element: <ErrorAdmin /> },
      { path: '*', element: <Navigate to="/admin/auth/404" /> },
    ],
  },
];

export default Router;
