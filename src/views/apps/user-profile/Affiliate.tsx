import React from 'react';
import { Grid } from '@mui/material';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import PageContainer from 'src/components/container/PageContainer';
import SiderAffiliate from 'src/components/apps/userprofile/profile/SiderAffiliate';
import PersonAffiliate from 'src/components/apps/userprofile/profile/PersonAffiliate';
import CompanyAffiliate from 'src/components/apps/userprofile/profile/CompanyAffiliate';

const Affiliate = () => {
  const [selectedTab, setSelectedTab] = React.useState('Cá nhân'); // Default to 'Cá nhân'

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <PageContainer title="User Profile" description="this is User Profile page">
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <ProfileBanner />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <SiderAffiliate onTabChange={handleTabChange} />
          </Grid>
          <Grid item sm={8}>
            {selectedTab === 'Cá nhân' && <PersonAffiliate />}
            {selectedTab === 'Doanh nghiệp' && <CompanyAffiliate />}
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Affiliate;
