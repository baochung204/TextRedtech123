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
import { ProtectedRoute } from 'src/service/guard';
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
const AssistantAdd = Loadable(lazy(() => import('src/views/apps/assistant/AssistantAdd')));
const AssistantEdit = Loadable(lazy(() => import('src/views/apps/assistant/AssistantEdit')));
const AssistantInfor = Loadable(lazy(() => import('src/views/apps/assistant/AssistantById')));
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
const UserProfile = Loadable(lazy(() => import('../views/apps/user-profile/UserProfile')));
const Purchasehistory = Loadable(lazy(() => import('../views/apps/history/purchase-history')));
const Pointhistory = Loadable(lazy(() => import('../views/apps/history/point-history')));
const Followers = Loadable(lazy(() => import('../views/apps/user-profile/Followers')));
const Friends = Loadable(lazy(() => import('../views/apps/user-profile/Friends')));
const Gallery = Loadable(lazy(() => import('../views/apps/user-profile/Gallery')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));

//affiliate
const Affiliate = Loadable(lazy(() => import('../views/apps/user-profile/Affiliate')));

const Faq = Loadable(lazy(() => import('../views/pages/faq/Faq')));

// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
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

//admin affiliate
const OrderAffiliate = Loadable(lazy(() => import('../views/admin/affiliate/orderaffiliate')));
const Publisher = Loadable(lazy(() => import('../views/admin/publishers/publishers')));
const HistoryAffiliate = Loadable(lazy(() => import('../views/admin/affiliate/historyaffiliate')));
const ContactAffiliate = Loadable(lazy(() => import('../views/admin/affiliate/contactaffiliate')));
const ContactPoint = Loadable(lazy(() => import('../views/admin/affiliate/contactpoint')));
const ListAssistant = Loadable(lazy(() => import('../views/listAssistant/listAssistant')));
const FormRequest = Loadable(lazy(() => import('../views/suggestion/FormRequest')));

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
      { path: '/dashboards', exact: true, element: <ProtectedRoute element={ModernDash} /> },
      {
        path: '/user_profile/contract/contract_affiliate',
        exact: true,
        element: <ProtectedRoute element={ContractAffiliateUser} />,
      },
      {
        path: '/user_profile/contract/contract_order',
        exact: true,
        element: <ProtectedRoute element={ContractOrderUser} />,
      },

      {
        path: '/dashboards/ecommerce',
        exact: true,
        element: <ProtectedRoute element={EcommerceDash} />,
      },
      { path: '/dashboards/list', exact: true, element: <ProtectedRoute element={List} /> },
      { path: '/apps/list-assistant', element: <ProtectedRoute element={Assistant} /> },
      { path: '/apps/assistant', element: <ProtectedRoute element={Assistant} /> },
      { path: '/assistants/add', element: <ProtectedRoute element={AssistantAdd} /> },
      { path: '/assistants/edit/:id', element: <ProtectedRoute element={AssistantEdit} /> },
      { path: '/assistants/detail/:id', element: <ProtectedRoute element={AssistantInfor} /> },
      { path: '/integrations', element: <ProtectedRoute element={Integration} /> },
      { path: '/products', element: <ProtectedRoute element={Product} /> },
      { path: '/conversions', element: <ProtectedRoute element={CustomerListOrder} /> },
      { path: '/apps/contacts', element: <ProtectedRoute element={Contacts} /> },
      { path: '/feature_suggestion', element: <ProtectedRoute element={FormRequest} /> },
      { path: '/affiliate', element: <ProtectedRoute element={Collaborate} /> },
      { path: '/customers', element: <ProtectedRoute element={CustomerList2} /> },
      { path: '/affiliate/list_customer', element: <ProtectedRoute element={CustomerList} /> },

      { path: '/apps/contract-client', element: <ProtectedRoute element={Client} /> },
      { path: '/affiliate/agreement', element: <ProtectedRoute element={Aff} /> },
      { path: '/blogs', element: <ProtectedRoute element={Blog} /> },
      { path: '/blog/detail/:id', element: <ProtectedRoute element={BlogDetail} /> },
      { path: '/tickets', element: <ProtectedRoute element={Chats} /> },
      { path: '/apps/email', element: <ProtectedRoute element={Email} /> },
      { path: '/apps/notes', element: <ProtectedRoute element={Notes} /> },
      { path: '/apps/tickets', element: <ProtectedRoute element={Tickets} /> },
      { path: '/update', element: <ProtectedRoute element={Update} /> },
      { path: '/shops', element: <ProtectedRoute element={Ecommerce} /> },
      {
        path: '/apps/ecommerce/eco-product-list',
        element: <ProtectedRoute element={EcomProductList} />,
      },
      { path: '/carts', element: <ProtectedRoute element={EcomProductCheckout} /> },
      { path: '/apps/point/detaipoint/:id', element: <ProtectedRoute element={Detailpoint} /> },
      { path: '/shop/detail/:id', element: <ProtectedRoute element={EcommerceDetail} /> },
      { path: '/apps/followers', element: <ProtectedRoute element={Followers} /> },
      { path: '/apps/friends', element: <ProtectedRoute element={Friends} /> },
      { path: '/user_profile/affiliate/register', element: <ProtectedRoute element={Affiliate} /> },
      { path: '/affiliate_register', element: <ProtectedRoute element={Affiliate} /> },
      { path: '/apps/success', element: <ProtectedRoute element={Success} /> },
      { path: '/apps/fail', element: <ProtectedRoute element={Fail} /> },
      { path: '/pending', element: <ProtectedRoute element={Pending} /> },
      { path: '/person-affiliate', element: <ProtectedRoute element={PersonAffiliate} /> },
      { path: '/company-affiliate', element: <ProtectedRoute element={CompanyAffiliate} /> },
      { path: '/apps/gallery', element: <ProtectedRoute element={Gallery} /> },
      { path: '/user_profile', element: <ProtectedRoute element={UserProfile} /> },
      { path: '/pointhistory', element: <ProtectedRoute element={Pointhistory} /> },
      { path: '/purchasehistory', element: <ProtectedRoute element={Purchasehistory} /> },

      { path: '/pages/faq', element: <ProtectedRoute element={Faq} /> },
      {
        path: '/user_profile/assistants',
        element: <ProtectedRoute element={ListAssistantInProfile} />,
      },
      { path: '/resources', element: <ProtectedRoute element={Faq} /> },
      {
        path: '/profile/assistant/list',
        element: <ProtectedRoute element={ListAssistantInProfile} />,
      },
      { path: '/assistants', element: <ProtectedRoute element={ListAssistant} /> },
      { path: '/buy/point', element: <ProtectedRoute element={BuyPoint} /> },
      { path: '/pay/point', element: <ProtectedRoute element={PaymentPoint} /> },
      { path: '/pay/checkout_point/:id', element: <ProtectedRoute element={PaymentPoint2} /> },
      { path: '/history/buy-point', element: <ProtectedRoute element={HistoryBuyPoint} /> },

      {
        path: '/user_profile/point/transaction_point_history',
        element: <ProtectedRoute element={HistoryBuyPointInProfile} />,
      },
      {
        path: '/user_profile/point/purchase_history',
        element: <ProtectedRoute element={PurchaseHistoryInProfile} />,
      },
      { path: '/assistant/list', element: <ProtectedRoute element={ListAssistant} /> },
      { path: '/notifications', element: <ProtectedRoute element={AllNotifications} /> },
      { path: '*', element: <Navigate to="/error/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/error/404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },

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
