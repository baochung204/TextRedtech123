import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRoute } from 'src/service/guard';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import CustomerList2 from 'src/views/apps/customerList/CustomerList2';

// Import các component bằng Loadable để tối ưu hóa tải trang
const ChangePassword = Loadable(
  lazy(() => import('src/components/apps/userprofile/profile/ChangePassword')),
);
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Modern')));
const EcommerceDash = Loadable(lazy(() => import('../views/dashboard/Ecommerce')));
const List = Loadable(lazy(() => import('../views/dashboard/List')));
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
const ContractAffiliateUser = Loadable(
  lazy(() => import('../views/apps/historycontract/contractaffiliateuser')),
);
const ContractOrderUser = Loadable(
  lazy(() => import('../views/apps/historycontract/contractorderuser')),
);

// Cấu hình các route
const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboards" /> },
      { path: '/dashboards', exact: true, element: <ProtectedRoute element={ModernDash} /> },
      {
        path: '/dashboards/ecommerce',
        exact: true,
        element: <ProtectedRoute element={EcommerceDash} />,
      },
      { path: '/dashboards/list', exact: true, element: <ProtectedRoute element={List} /> },
      { path: '/customers', element: <ProtectedRoute element={CustomerList2} /> },
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
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/register2', element: <Register2 /> },
      { path: '/auth/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/forgot-password2', element: <ForgotPassword2 /> },
      { path: '/auth/two-steps', element: <TwoSteps /> },
      { path: '/auth/two-steps2', element: <TwoSteps2 /> },
      { path: '/auth/maintenance', element: <Maintenance /> },
      { path: '/updating', element: <Updating /> },
      { path: '/error/404', element: <Error /> },
      { path: 'user-profile/changepassword', element: <ChangePassword /> },
      // Catch-all route chuyển đến trang lỗi 404 nếu không tìm thấy route nào khớp
      { path: '*', element: <Navigate to="/error/404" /> },
    ],
  },
];

export default Router;
