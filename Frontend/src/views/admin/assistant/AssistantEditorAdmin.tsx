// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PageContainer from 'src/components/container/PageContainer';

// import Assistant_Add from 'src/components/apps/assistant/AssistantEditor/AssistantEditor';
import Assistant_Add from 'src/components/apps/assistant/AssistantEditor/main/main';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  {
    to: '/apps/assistant/add',
    title: 'Tạo Assistant',
  },
];

const AssistantEditorAdmin = () => {
  return (
    <PageContainer title="Tạo trợ lý" description="this is  page">
      <BannerPage title="Tạo Assistant" items={BCrumb} />
      <Assistant_Add />
    </PageContainer>
  );
};

export default AssistantEditorAdmin;
