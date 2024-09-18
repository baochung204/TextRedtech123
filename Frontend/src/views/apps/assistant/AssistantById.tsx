// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import AssistantInfor from 'src/components/apps/assistant/AssistantById/AssistantInfor';
// import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
//   const BCrumb = [
//     {
//       to: '/',
//       title: 'Trang chủ',
//     },
//     {
//       to: '/apps/assistant',
//       title: 'Quản lý Assistant',
//     },
//   ];

const AssistantById = () => {
  return (
    <div>
      {/* <Breadcrumb title="Assistant" items={BCrumb} /> */}
      <PageContainer title="eCommerce Dashboard" description="this is eCommerce Dashboard page">
        <Box mt={3}>
          <Grid container spacing={3}>
            {/* column */}

            <AssistantInfor />
          </Grid>
        </Box>
      </PageContainer>
    </div>
  );
};

export default AssistantById;
