import ContentNotification from 'src/components/admin/notification/Notification';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
const BCrumb = [
  {
    to: '/admin',
    title: 'Trang chủ',
  },
  {
    title: 'Danh sách thông báo',
  },
];
const Notification = () => {
  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Quản lý thông báo" items={BCrumb} />
      <ContentNotification />
    </PageContainer>
  );
};
export default Notification;
