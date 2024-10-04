import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import ListAssistant from 'src/components/apps/assistant/listAssistant/AssistantList';
const BCrumb = [
  {
    to: '/',
    title: 'Trang Chủ',
  },
  { to: '/buy/point', title: 'Danh Sách Trợ Lý' },
];

const AssistantList = () => {
  return (
    <PageContainer title="Danh sách trợ lý" description="this is User Profile page">
      <BannerPage title="Danh sách trợ lý " items={BCrumb} />
      <ListAssistant />
    </PageContainer>
  );
};

export default AssistantList;
