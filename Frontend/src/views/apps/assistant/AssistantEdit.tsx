// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PageContainer from 'src/components/container/PageContainer';

// import Assistant_Add from 'src/components/apps/assistant/AssistantEditor/AssistantEditor';
import Assistant_Edit from 'src/components/apps/assistant/AssistantEdit/main/main';
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

const AssistantAdd = () => {
  return (
    <PageContainer title="Sửa trợ lý" description="this is page">
      <BannerPage title="Sửa trợ lý" items={BCrumb} />
      <Assistant_Edit />
    </PageContainer>
  );
};

export default AssistantAdd;
