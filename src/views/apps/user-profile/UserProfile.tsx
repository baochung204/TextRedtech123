import { Grid } from '@mui/material';
import { useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';

import { default as AccountInformation } from 'src/components/apps/userprofile/profile/AccountInformation';
import BusinessInformation from 'src/components/apps/userprofile/profile/BusinessInformation';
import PersonalInformation from 'src/components/apps/userprofile/profile/PersonalInformation';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import Sidebar from 'src/components/apps/userprofile/profile/Sidebar';

const UserProfile = () => {
  // Khởi tạo với giá trị mặc định là 'personal'
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
        <Grid container spacing={3} mt={3}>
          <Grid item sm={12} lg={3} xs={12}>
            <Sidebar selected={selected} onSelect={handleButtonClick} />
          </Grid>
          <Grid item sm={12} lg={9} xs={12}>
            {/* Hiển thị mặc định là trang thông tin cá nhân */}
            {selected === 'personal' && <PersonalInformation />}
            {selected === 'account' && <AccountInformation />}
            {selected === 'business' && <BusinessInformation />}
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default UserProfile;
