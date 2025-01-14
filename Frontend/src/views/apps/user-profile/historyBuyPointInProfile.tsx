/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import TableHistoryBuyPoint from 'src/components/apps/historyBuyPoint/TableHistoryBuyPoint';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';

const HistoryBuyPointInProfile = () => {
  return (
    <PageContainer title="Lịch sử giao dịch" description="this is Enhanced Table page">
      <Grid container>
        <Grid item xs={12}>
          <ProfileBanner />
        </Grid>
        <Grid item xs={12}>
          {/* <HistoryBuyPoint /> */}
          <TableHistoryBuyPoint />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default HistoryBuyPointInProfile;
