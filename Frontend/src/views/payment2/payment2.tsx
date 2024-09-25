import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import OrderInformation from 'src/components/apps/payment/orderInformation';
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Quy Đổi R-Point',
  },
  {
    title: 'Thanh Toán',
  },
];
const PayMentPonit2 = () => {
  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Thanh Toán" items={BCrumb} />
      <OrderInformation />
    </PageContainer>
  );
};

export default PayMentPonit2;
