// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

// import Assistant_Add from 'src/components/apps/assistant/AssistantEditor/AssistantEditor';
<<<<<<< HEAD
import Assistant_Add from 'src/components/apps/assistant/AssistantEditor/main';
=======
import Assistant_Add from 'src/components/apps/assistant/AssistantEditor/AssistantEditor';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
>>>>>>> f0509e58af1f5de6796d0cb4f0dee9221fb1f73d

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

const AssistantEditor = () => {
  // return (
  //   <PageContainer title="Tạo Assistant" description="this is Shop List page">
  //     {/* breadcrumb */}
  //     <Breadcrumb title="Tạo Assistant" items={BCrumb} />
  //     {/* <BlankCard> */}
  //     {/* ------------------------------------------- */}
  //     {/* Left part */}
  //     {/* ------------------------------------------- */}
  //     <Assistant_Add />
  //     {/* </BlankCard> */}
  //   </PageContainer>
  // );
  return (
    <PageContainer title="Tạo Assistant" description="this is Shop List page">
      <BannerPage title="Tạo Assistant" items={BCrumb} />
      <Assistant_Add />
    </PageContainer>
  );
};

export default AssistantEditor;
