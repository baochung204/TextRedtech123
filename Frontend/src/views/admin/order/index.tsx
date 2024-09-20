import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PageContainer from 'src/components/container/PageContainer';
import { Grid } from '@mui/material';
import TopCard from 'src/components/widgets/cards/TopCard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import OrderAdminPage from 'src/components/admin/order';


const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: 'admin/order', title: 'Danh sách khách hàng' },
];

interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: JSX.Element;
}


const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Khách hàng',
    total: '6251',
    icons:
      <PeopleAltIcon
        sx={{
          fontSize: 30
        }}
      />
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Khách trả phí',
    total: '1204 (33%)',
    icons:
      <PeopleAltIcon
        sx={{
          fontSize: 30
        }}
      />
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'CN/DN',
    total: '3251/3000',
    icons:
      <PeopleAltIcon
        sx={{
          fontSize: 30
        }}
      />
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Doanh thu',
    total: '15.126.422.555đ',
    icons:
      <PeopleAltIcon
        sx={{
          fontSize: 30
        }}
      />
  },
  {
    bgColor: 'info.light',
    color: 'info.main',
    title: 'Số dư R-Point',
    total: '52.126.422',
    icons:
      <PeopleAltIcon
        sx={{
          fontSize: 30
        }}
      />
  }
]

const OrderAdminPages = () => {
  return (
    <PageContainer title="Personnel" description="this is Personnel page">
      <BannerPage title="Quản lý khách hàng" items={BCrumb} />
      <TopCard dataSource={DataBox} totalColumn={DataBox.length} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <OrderAdminPage />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default OrderAdminPages;
