import React, { useState } from 'react';
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

const ProfileBanner = () => {
  const [bannerImage, setBannerImage] = useState(profilecover);
  const [avatarImage, setAvatarImage] = useState(userimg);
  const theme = useTheme();
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

        <Grid
          container
          spacing={0}
          sx={{
            justifyContent: { xs: 'space-evenly', sm: 'space-evenly' },
            alignItems: 'center',
            display: { xs: 'flex', sm: 'flex' },
          }}
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
                    src={avatarImage}
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
                    Nguyễn Đăng Hòa
                    <VerifiedIcon sx={{ color: '#1DA1F2', fontSize: '20px', ml: 1 }} />
                  </Typography>

                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight={400}
                    sx={{ color: '#757575' }}
                  >
                    0981522873
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
              <Link to={'/user_profile/affiliate/register'}>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px' } }}
                >
                  Đăng ký affiliate
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <ProfileTab />
      </BlankCard>
    </>
  );
};

export default ProfileBanner;
