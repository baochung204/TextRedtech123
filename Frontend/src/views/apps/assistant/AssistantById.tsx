// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import AssistantInfor from 'src/components/apps/assistant/AssistantById/AssistantInfor';


const AssistantById = () => {
  return (
    <div>
      <PageContainer title="eCommerce Dashboard" description="this is eCommerce Dashboard page">
        <Box mt={3}>
          <Grid container spacing={3}>
            <AssistantInfor />
          </Grid>
        </Box>
      </PageContainer>
    </div>
  );
};

export default AssistantById;
