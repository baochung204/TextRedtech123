// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
const History = Loadable(lazy(() => import('src/views/admin/history/history')));
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
const FormRequest = Loadable(lazy(() => import('src/views/forms/FormRequest')));
const AssistantAdmin = Loadable(lazy(() => import('../views/admin/assistant/assistant')));
import Loadable from '../layouts/full/shared/loadable/Loadable';
// import AssistantAdmin from '../views/admin/assistant/assistant';
const BlogAdmin = Loadable(lazy(() => import('src/views/admin/blog/blog')));
const PageFeature = Loadable(lazy(() => import('src/views/admin/feature/feature')));
const ErrorAdmin = Loadable(lazy(() => import('src/views/authentication/ErrorAdmin')));
// const OrderAdmin = Loadable(lazy(() => import('src/views/admin/order')));
const BuyPoints = Loadable(lazy(() => import('src/views/admin/buyproduct')));
const OrderAdminPages = Loadable(lazy(() => import('src/views/admin/order')));
const RPoints = Loadable(lazy(() => import('src/views/admin/rpoints/RPoints')));

<<<<<<< HEAD
=======
/* ***Layouts**** */

>>>>>>> main
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
// const Bill = Loadable(lazy(() => import('../views/apps/collaborate/bill')));

//affiliate
const Affiliate = Loadable(lazy(() => import('../views/apps/user-profile/Affiliate')));
//Ai ticket
const Aisupport = Loadable(lazy(() => import('../views/apps/support/Aisupport')));
//update page
// const Update = Loadable(lazy(() => import('../views/apps/update/update')));
// ui components
const MuiAlert = Loadable(lazy(() => import('../views/ui-components/MuiAlert')));
const MuiAccordion = Loadable(lazy(() => import('../views/ui-components/MuiAccordion')));
const MuiAvatar = Loadable(lazy(() => import('../views/ui-components/MuiAvatar')));
const MuiChip = Loadable(lazy(() => import('../views/ui-components/MuiChip')));
const MuiDialog = Loadable(lazy(() => import('../views/ui-components/MuiDialog')));
const MuiList = Loadable(lazy(() => import('../views/ui-components/MuiList')));
const MuiPopover = Loadable(lazy(() => import('../views/ui-components/MuiPopover')));
const MuiRating = Loadable(lazy(() => import('../views/ui-components/MuiRating')));
const MuiTabs = Loadable(lazy(() => import('../views/ui-components/MuiTabs')));
const MuiTooltip = Loadable(lazy(() => import('../views/ui-components/MuiTooltip')));
const MuiTransferList = Loadable(lazy(() => import('../views/ui-components/MuiTransferList')));
const MuiTypography = Loadable(lazy(() => import('../views/ui-components/MuiTypography')));
// form elements
const MuiAutoComplete = Loadable(
  lazy(() => import('../views/forms/form-elements/MuiAutoComplete')),
);
const MuiButton = Loadable(lazy(() => import('../views/forms/form-elements/MuiButton')));
const MuiCheckbox = Loadable(lazy(() => import('../views/forms/form-elements/MuiCheckbox')));
const MuiRadio = Loadable(lazy(() => import('../views/forms/form-elements/MuiRadio')));
const MuiSlider = Loadable(lazy(() => import('../views/forms/form-elements/MuiSlider')));
const MuiDateTime = Loadable(lazy(() => import('../views/forms/form-elements/MuiDateTime')));
const MuiSwitch = Loadable(lazy(() => import('../views/forms/form-elements/MuiSwitch')));
// forms
const FormLayouts = Loadable(lazy(() => import('../views/forms/FormLayouts')));
const FormCustom = Loadable(lazy(() => import('../views/forms/FormCustom')));
const FormHorizontal = Loadable(lazy(() => import('../views/forms/FormHorizontal')));
const FormVertical = Loadable(lazy(() => import('../views/forms/FormVertical')));
const FormWizard = Loadable(lazy(() => import('../views/forms/FormWizard')));
const FormValidation = Loadable(lazy(() => import('../views/forms/FormValidation')));
const QuillEditor = Loadable(lazy(() => import('../views/forms/quill-editor/QuillEditor')));

// pages
const RollbaseCASL = Loadable(lazy(() => import('../views/pages/rollbaseCASL/RollbaseCASL')));
const Treeview = Loadable(lazy(() => import('../views/pages/treeview/Treeview')));
const Faq = Loadable(lazy(() => import('../views/pages/faq/Faq')));
const Pricing = Loadable(lazy(() => import('../views/pages/pricing/Pricing')));
const AccountSetting = Loadable(
  lazy(() => import('../views/pages/account-setting/AccountSetting')),
);
// charts
const AreaChart = Loadable(lazy(() => import('../views/charts/AreaChart')));
const CandlestickChart = Loadable(lazy(() => import('../views/charts/CandlestickChart')));
const ColumnChart = Loadable(lazy(() => import('../views/charts/ColumnChart')));
const DoughnutChart = Loadable(lazy(() => import('../views/charts/DoughnutChart')));
const PieCharts = Loadable(lazy(() => import('../views/charts/PieCharts')));
const GredientChart = Loadable(lazy(() => import('../views/charts/GredientChart')));
const RadialbarChart = Loadable(lazy(() => import('../views/charts/RadialbarChart')));
const LineChart = Loadable(lazy(() => import('../views/charts/LineChart')));
// tables
const BasicTable = Loadable(lazy(() => import('../views/tables/BasicTable')));
const EnhanceTable = Loadable(lazy(() => import('../views/tables/EnhanceTable')));
const PaginationTable = Loadable(lazy(() => import('../views/tables/PaginationTable')));
const FixedHeaderTable = Loadable(lazy(() => import('../views/tables/FixedHeaderTable')));
const CollapsibleTable = Loadable(lazy(() => import('../views/tables/CollapsibleTable')));
const SearchTable = Loadable(lazy(() => import('../views/tables/SearchTable')));
// widget
const WidgetCards = Loadable(lazy(() => import('../views/widgets/cards/WidgetCards')));
const WidgetBanners = Loadable(lazy(() => import('../views/widgets/banners/WidgetBanners')));
const WidgetCharts = Loadable(lazy(() => import('../views/widgets/charts/WidgetCharts')));
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
const Landingpage = Loadable(lazy(() => import('../views/pages/landingpage/Landingpage')));
// buypoint
const BuyPoint = Loadable(lazy(() => import('../views/buypoint/buypoint')));
const BuyPointService = Loadable(lazy(() => import('../views/buyservicepackage/buyservice')));
// history
const HistoryBuyPoint = Loadable(lazy(() => import('../views/historybuypoint/historybuypoint')));
const HistoryBuyPointInProfile = Loadable(
  lazy(() => import('../views/apps/user-profile/historyBuyPointInProfile')),
);
const HistoryBuyService = Loadable(
  lazy(() => import('../views/historybuyservice/historybuyservice')),
);
// pay
const PaymentPoint = Loadable(lazy(() => import('../views/payment/payment')));
const PaymentPoint2 = Loadable(lazy(() => import('../views/payment2/payment2')));
//list assistant
const ListAssistant = Loadable(lazy(() => import('../views/listAssistant/listAssistant')));
const AssistantList = Loadable(
  lazy(() => import('../components/apps/assistant/listAssistant/AssistantList')),
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

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboards/modern" /> },
      { path: '/dashboards/modern', exact: true, element: <ModernDash /> },
      { path: '/dashboards/ecommerce', exact: true, element: <EcommerceDash /> },
      { path: '/dashboards/list', exact: true, element: <List /> },
      { path: '/apps/list-assistant', element: <Assistant /> },
      { path: '/apps/assistant', element: <Assistant /> },
      { path: '/apps/assistant/add', element: <AssistantEditor /> },
      { path: '/apps/assistant/:id', element: <AssistantInfor /> },
      { path: '/apps/integration', element: <Integration /> },
      { path: '/apps/sell/product', element: <Product /> },
      { path: '/apps/sell/order', element: <CustomerListOrder /> },
      { path: '/apps/contacts', element: <Contacts /> },
      { path: '/apps/collaborate', element: <Collaborate /> },
      { path: '/apps/customerlist2', element: <CustomerList2 /> },
      { path: '/apps/customerlist', element: <CustomerList /> },
      { path: '/apps/contract-client', element: <Client /> },
      { path: '/apps/contract-affiliate', element: <Aff /> },
      // { path: '/admin/dashborard', element: <Admin /> },
      // { path: '/admin/products', element: <Adminproducts /> },
      // { path: '/admin/user', element: <Adminuser /> },
      { path: '/apps/blog/posts', element: <Blog /> },
      { path: '/apps/blog/detail/:id', element: <BlogDetail /> },
      { path: '/apps/chats', element: <Chats /> },
      { path: '/apps/email', element: <Email /> },
      { path: '/apps/notes', element: <Notes /> },
      { path: '/apps/tickets', element: <Tickets /> },
      { path: '/apps/update', element: <Update /> },
      { path: '/apps/ecommerce/shop', element: <Ecommerce /> },
      { path: '/apps/ecommerce/eco-product-list', element: <EcomProductList /> },
      { path: '/apps/ecommerce/eco-checkout', element: <EcomProductCheckout /> },
      { path: '/apps/point/detaipoint/:id', element: <Detailpoint /> },
      { path: '/apps/ecommerce/detail/:id', element: <EcommerceDetail /> },
      { path: '/apps/followers', element: <Followers /> },
      { path: '/apps/friends', element: <Friends /> },
      { path: '/apps/affiliate', element: <Affiliate /> },
      { path: '/apps/success', element: <Success /> },
      { path: '/apps/fail', element: <Fail /> },
      { path: '/apps/pending', element: <Pending /> },
      { path: '/apps/person-affiliate', element: <PersonAffiliate /> },
      { path: '/apps/company-affiliate', element: <CompanyAffiliate /> },
      { path: '/apps/gallery', element: <Gallery /> },
      { path: '/user-profile', element: <UserProfile /> },
      { path: '/pointhistory', element: <Pointhistory /> },
      { path: '/purchasehistory', element: <Purchasehistory /> },
      { path: '/apps/support', element: <Aisupport /> },
      { path: '/apps/calendar', element: <Calendar /> },
      { path: '/ui-components/alert', element: <MuiAlert /> },
      { path: '/ui-components/accordion', element: <MuiAccordion /> },
      { path: '/ui-components/avatar', element: <MuiAvatar /> },
      { path: '/ui-components/chip', element: <MuiChip /> },
      { path: '/ui-components/dialog', element: <MuiDialog /> },
      { path: '/ui-components/list', element: <MuiList /> },
      { path: '/ui-components/popover', element: <MuiPopover /> },
      { path: '/ui-components/rating', element: <MuiRating /> },
      { path: '/ui-components/tabs', element: <MuiTabs /> },
      { path: '/ui-components/tooltip', element: <MuiTooltip /> },
      { path: '/ui-components/transfer-list', element: <MuiTransferList /> },
      { path: '/ui-components/typography', element: <MuiTypography /> },
      { path: '/pages/casl', element: <RollbaseCASL /> },
      { path: '/pages/treeview', element: <Treeview /> },
      { path: '/pages/pricing', element: <Pricing /> },
      { path: '/pages/faq', element: <Faq /> },
      { path: '/pages/account-settings', element: <AccountSetting /> },
      { path: '/tables/basic', element: <BasicTable /> },
      { path: '/tables/enhanced', element: <EnhanceTable /> },
      { path: '/tables/pagination', element: <PaginationTable /> },
      { path: '/tables/fixed-header', element: <FixedHeaderTable /> },
      { path: '/tables/collapsible', element: <CollapsibleTable /> },
      { path: '/tables/search', element: <SearchTable /> },
      { path: '/forms/form-elements/autocomplete', element: <MuiAutoComplete /> },
      { path: '/forms/form-elements/button', element: <MuiButton /> },
      { path: '/forms/form-elements/checkbox', element: <MuiCheckbox /> },
      { path: '/forms/form-elements/radio', element: <MuiRadio /> },
      { path: '/forms/form-elements/slider', element: <MuiSlider /> },
      { path: '/forms/form-elements/date-time', element: <MuiDateTime /> },
      { path: '/forms/form-elements/switch', element: <MuiSwitch /> },
      { path: '/forms/form-layouts', element: <FormLayouts /> },
      { path: '/forms/form-custom', element: <FormCustom /> },
      { path: '/forms/form-wizard', element: <FormWizard /> },
      { path: '/forms/form-validation', element: <FormValidation /> },
      { path: '/forms/form-request', element: <FormRequest /> },
      { path: '/forms/form-horizontal', element: <FormHorizontal /> },
      { path: '/forms/form-vertical', element: <FormVertical /> },
      { path: '/forms/quill-editor', element: <QuillEditor /> },
      { path: '/charts/area-chart', element: <AreaChart /> },
      { path: '/charts/line-chart', element: <LineChart /> },
      { path: '/charts/gredient-chart', element: <GredientChart /> },
      { path: '/charts/candlestick-chart', element: <CandlestickChart /> },
      { path: '/charts/column-chart', element: <ColumnChart /> },
      { path: '/charts/doughnut-pie-chart', element: <DoughnutChart /> },
      { path: '/charts/pieCharts', element: <PieCharts /> },
      { path: '/charts/radialbar-chart', element: <RadialbarChart /> },
      { path: '/widgets/cards', element: <WidgetCards /> },
      { path: '/widgets/banners', element: <WidgetBanners /> },
      { path: '/widgets/charts', element: <WidgetCharts /> },
      { path: '/profile/assistant/list', element: <ListAssistant /> },
      { path: '/assistant/list', element: <AssistantList /> },
      { path: '/buy/point', element: <BuyPoint /> },
      { path: '/pay/point', element: <PaymentPoint /> },
      { path: '/pay/point2', element: <PaymentPoint2 /> },
      { path: '/buy/service', element: <BuyPointService /> },
      { path: '/history/buy-point', element: <HistoryBuyPoint /> },
      { path: '/history/buy-point-in-frofile', element: <HistoryBuyPointInProfile /> },
      { path: '/history/buy-service', element: <HistoryBuyService /> },
      { path: '/assistant/list', element: <ListAssistant /> },
      { path: '/notifications', element: <AllNotifications /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/auth/404', element: <Error /> },
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
      { path: '/auth/updating', element: <Updating /> },
      { path: '/landingpage', element: <Landingpage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/admin',
    element: <Layouadmin />,
    children: [
      { path: '/admin', element: <DashboardAdmin /> },
      { path: '/admin/dashboard', element: <AssistantAdmin /> },
      { path: '/admin/assistant', element: <AssistantAdmin /> },

      { path: '/admin/buy/orderproducts', element: <ProductAdmin /> },
      { path: '/admin/buy/products', element: <BuyPoints /> },
      { path: '/admin/buy/packagepoint', element: <Packagepoint /> },
      { path: '/admin/pointdetail', element: <Pointdetail /> },
      { path: '/admin/voucher', element: <VoucherAdmin /> },
      // { path: '/admin/affiliate/publishers', element: <Publishers /> },
      { path: '/admin/affiliate/affiliatepro', element: <Affiliatepro /> },
      { path: '/admin/affiliate/history', element: <History /> },
      { path: '/admin/staff', element: <Staff /> },
      { path: '/admin/feature', element: <PageFeature /> },
      { path: '/admin/point/packagepoint', element: <RPoints /> },
      { path: '/admin/blogs', element: <BlogAdmin /> },
      { path: '/admin/ticket', element: <Ticket /> },
      { path: '/admin/notification', element: <Notification /> },
      { path: '/admin/order/orderadminpage', element: <OrderAdminPages /> },
      { path: '/admin/order/orderRPoint', element: <OrderRPoint /> },
      // { path: '/admin/accountant/contracPoint', element: <ContracPoint /> },
      // { path: '/admin/accountant/contracAfflilate', element: <ContracAffilate /> },

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
