import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  Stack,
  CardMedia,
  styled,
  IconButton,
} from '@mui/material';
import profilecover from 'src/assets/images/backgrounds/profilebg.jpg';
import userimg from 'src/assets/images/profile/user-1.jpg';
import VerifiedIcon from '@mui/icons-material/Verified';
import ProfileTab from './ProfileTab';
import BlankCard from '../../../shared/BlankCard';
import { Link } from 'react-router-dom';
import { IconCameraBolt } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/Store';
import { useSelector } from 'react-redux';
import { AppState } from 'src/store/Store';
import { fetchUserMeData } from 'src/store/user/userme/usermeSlice';
=======
import { useSelector } from 'react-redux';
import { dispatch } from 'src/store/Store';
import { fetchaffiliateaccount } from 'src/store/user/affiliate-account/affiliate-account';
// import { use } from 'i18next';
// import { type } from './../../../../types/apps/userProfile';
>>>>>>> 141dbc7a449b5d99b9db92841f1caeb87c96f961

const ProfileBanner = () => {
  const affiliate = useSelector((state: any) => state.affiliate.data);
  console.log('affiliate', affiliate);
  interface AffiliateData {
    step?: number;
    type?: string;
    // Add other properties of affiliate data here
  }

  const [datax, setdatax] = useState<AffiliateData>({});

  useEffect(() => {
    dispatch(fetchaffiliateaccount());
  }, [dispatch]);
  useEffect(() => {
    if (datax !== affiliate) {
      setdatax(affiliate);
    }
  }, [datax, affiliate]);
  const [bannerImage] = useState(profilecover);
  const [avatarImage, setAvatarImage] = useState(userimg);
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>()
  const userme = useSelector((state: AppState) => state.userme.result);
  console.log('Userme:', userme);
  useEffect(() => {
    dispatch(fetchUserMeData());
  }, [dispatch])
  // console.log('Userme:', userme);
  // const [data, setData] = useState<UserMe[]>([
  //   {
  //     userId: 0,
  //     point: 0,
  //     email: '',
  //     phoneNumber: '',
  //     dateOfBirth: new Date(),
  //     name: '',
  //     gender: '',
  //     address: '',
  //   }
  // ])
  // const handleClick = (items: UserMe) => {
  //   // setOpen(true);
  //   setData([
  //     {
  //       userId: items.userId,
  //       point: items.point,
  //       email: items.email,
  //       phoneNumber: items.phoneNumber,
  //       dateOfBirth: items.dateOfBirth,
  //       name: items.name,
  //       gender: items.gender,
  //       address: items.address,
  //     },
  //   ]);
  // };
  const primary = theme.palette.primary.light;

  const ProfileImage = styled(Box)(() => ({
    backgroundImage: 'linear-gradient(#50b2fc,#f44c66)',
    borderRadius: '50%',
    width: '110px',
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    position: 'relative', // Make it relative to position the camera icon
  }));

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = URL.createObjectURL(event.target.files[0]);
      setAvatarImage(file);
    }
  };

  return (
    <>
      <BlankCard>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            image={bannerImage}
            alt="Profile cover"
            sx={{
              width: '100%',
              height: '300px', // Set a specific height for the banner
              objectFit: 'cover', // Ensure the image covers the whole area without stretching
            }}
          />
        </Box>
        {userme.data?.map((items: any) => (
          <Grid
          container
          spacing={0}
          sx={{
            justifyContent: { xs: 'space-evenly', sm: 'space-evenly' },
            alignItems: 'center',
            display: { xs: 'flex', sm: 'flex' },
          }}
          key={items.userId}
        >
          {/* about profile */}
          <Grid
            item
            lg={4}
            sm={12}
            xs={12}
            sx={{
              order: {
                xs: '1',
                sm: '1',
                lg: '1',
              },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center" // Centers the avatar container
              sx={{
                mt: '-85px',
                position: 'relative',
              }}
            >
              <Box textAlign="center">
                <ProfileImage>
                  <Avatar
                    src={items.avatarUrl}
                    alt="User avatar"
                    sx={{
                      borderRadius: '50%',
                      width: '100px',
                      height: '100px',
                      border: '4px solid #fff',
                    }}
                  />
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="upload-avatar"
                    type="file"
                    onChange={handleAvatarChange}
                  />
                  <label htmlFor="upload-avatar">
                    <IconButton
                      component="span" // Ensures the button acts as a label for the file input
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: '-10px',
                        backgroundColor: primary,
                        padding: '5px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        color: '#fff', // Adjust the icon color if necessary
                        '&:hover': {
                          backgroundColor: primary, // Optional hover state customization
                        },
                      }}
                    >
                      <IconCameraBolt style={{ fontSize: '30px' }} />
                    </IconButton>
                  </label>
                </ProfileImage>

                <Box mt={1}>
                  <Typography fontWeight={600} variant="h5" display="flex" alignItems="center">
                    {items.name}
                    <VerifiedIcon sx={{ color: '#1DA1F2', fontSize: '20px', ml: 1 }} />
                  </Typography>

                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight={400}
                    sx={{ color: '#757575' }}
                  >
                    {items.phoneNumber}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        
          {/* friends following buttons */}
          <Grid
            style={{ position: 'absolute', bottom: 55, right: 0 }}
            item
            lg={4}
            sm={6}
            xs={12}
            sx={{
              order: 2,
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-end' },
              alignItems: 'center',
            }}
          >
            <Stack direction={'row'} gap={2} my={2} px={2} spacing={2}>
              {/* <Link to={'/user_profile/affiliate/register'}> */}
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to={`${
                  datax.type === 'BUSINESS'
                    ? '/company-affiliate'
                    : datax.type === 'CUSTOMER'
                    ? '/person-affiliate '
                    : '/user_profile/affiliate/register'
                }`}
                sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px' } }}
              >
                Đăng ký affiliate
              </Button>
            </Stack>
          </Grid>
        </Grid>
        ))}
        

        <ProfileTab />
      </BlankCard>
    </>
  );
};

export default ProfileBanner;
