/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import PurchaseHistory from '../allTransactionHistory/purchaseHistory'; // Renamed import

const PurchaseHistoryInProfilePage = () => {
  // Renamed component
  return (
    <PageContainer title="Lịch sử mua hàng" description="this is Enhanced Table page">
      <Grid container>
        <Grid item xs={12}>
          <ProfileBanner />
        </Grid>
        <Grid item xs={12}>
          <PurchaseHistory /> {/* Updated to the renamed component */}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default PurchaseHistoryInProfilePage; // Updated export
