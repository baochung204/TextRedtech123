import { Grid } from '@mui/material';
// import { useState } from 'react';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import PageContainer from 'src/components/container/PageContainer';
import Lspoin from '../collaborate/point/point';

const Pointhistory = () => {
  // const [selected, setSelected] = useState<string>('personal');

  // const handleButtonClick = (buttonName: string) => {
  //   setSelected(buttonName);
  // };

  return (
    <PageContainer title="User Profile" description="this is User Profile page">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item xs={12} lg={12} style={{ height: 'auto' }}>
          <Lspoin />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Pointhistory;
