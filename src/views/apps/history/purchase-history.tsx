import { Grid } from '@mui/material';
import { useState } from 'react';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import PageContainer from 'src/components/container/PageContainer';
import Lspoin from '../collaborate/point/point';
import Paymenthistory from '../collaborate/paymenthistory.tsx/paymenthistory';

const Purchasehistory = () => {
  const [selected, setSelected] = useState<string>('personal');

  const handleButtonClick = (buttonName: string) => {
    setSelected(buttonName);
  };

  return (
    <PageContainer title="User Profile" description="this is User Profile page">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item xs={12} lg={9} style={{ height: 'auto' }}>
          <Paymenthistory />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Purchasehistory;
