// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PageContainer from 'src/components/container/PageContainer';

import Integrations from 'src/components/apps/integration/Integration';
import ChildCard from 'src/components/shared/ChildCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/apps/integration', title: 'Tích hợp' },
];
const Integration = () => {
  return (
    <PageContainer title="Tích hợp" description="this is User Profile page">
      <BannerPage title="Tích hợp" items={BCrumb} />
      <ChildCard sx={{ border: 'none' }}>
        <Integrations />
      </ChildCard>
    </PageContainer>
  );
};

export default Integration;
