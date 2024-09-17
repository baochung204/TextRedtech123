import { Grid } from '@mui/material';
import { default as AccountInformation } from 'src/components/apps/userprofile/profile/AccountInformation';
import BankInformation from 'src/components/apps/userprofile/profile/BankInformation';
import BusinessInformation from 'src/components/apps/userprofile/profile/BusinessInformation';
import ChangePassword from 'src/components/apps/userprofile/profile/ChangePassword';
import PersonalInformation from 'src/components/apps/userprofile/profile/PersonalInformation';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import ReceiveEmail from 'src/components/apps/userprofile/profile/ReceiveEmail';
import Sidebar from 'src/components/apps/userprofile/profile/Sidebar';
import TwoFactorSecurity from 'src/components/apps/userprofile/profile/TwoFactorSecurity';
import PageContainer from 'src/components/container/PageContainer';
import { setSelected } from 'src/store/RouterSlice';
import { useSelector } from 'src/store/Store';

const UserProfile = () => {
  // const [selected, setSelected] = useState<string>('personal');
  const selecteds = useSelector((state) => state.selectReducer.selecteds);
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
            <Sidebar selected={selecteds} onSelect={handleButtonClick} />
          </Grid>
          <Grid item sm={12} lg={9} xs={12}>
            {selecteds === 'personal' && <PersonalInformation />}
            {selecteds === 'account' && <AccountInformation />}
            {selecteds === 'business' && <BusinessInformation />}
            {selecteds === 'bankking' && <BankInformation />}
            {selecteds === 'email' && <ReceiveEmail />}
            {selecteds === 'changepassword' && <ChangePassword />}
            {selecteds === 'twofactorsecurity' && <TwoFactorSecurity />}
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default UserProfile;
