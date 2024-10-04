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
    to: '/assistants/add',
    title: 'Tạo Assistant',
  },
];

const AssistantEditor = () => {
  return (
    <PageContainer title="Tạo trợ lý" description="this is page">
      <BannerPage title="Tạo Assistant" items={BCrumb} />
      <Assistant_Add />
    </PageContainer>
  );
};

export default AssistantEditor;
