// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid, Box, Typography, Button, Avatar, Stack, CardMedia, styled } from '@mui/material';
import profilecover from 'src/assets/images/backgrounds/profilebg.jpg';
import userimg from 'src/assets/images/profile/user-1.jpg';
import VerifiedIcon from '@mui/icons-material/Verified';
import ProfileTab from './ProfileTab';
import BlankCard from '../../../shared/BlankCard';
import { Link } from 'react-router-dom';
const ProfileBanner = () => {
  const ProfileImage = styled(Box)(() => ({
    backgroundImage: 'linear-gradient(#50b2fc,#f44c66)',
    borderRadius: '50%',
    width: '110px',
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  }));

  return (
    <>
      <BlankCard>
        <CardMedia component="img" image={profilecover} alt={profilecover} width="100%" />
        <Grid
          container
          spacing={0}
          sx={{
            justifyContent: { xs: 'space-between', sm: 'space-between' },
            alignItems: 'center',

            display: { xs: 'flex', sm: 'flex' },
          }}
        >
          {/* Post | Followers | Following */}
          <Grid
            item
            lg={4}
            sm={6}
            md={5}
            xs={12}
            sx={{
              order: {
                xs: '3',
                sm: '2',
                lg: '1',
              },
            }}
          >
            <Stack
              direction="row"
              textAlign="center"
              justifyContent="start"
              my={2}
              spacing={6}
              px={2}
            >
              {/* <Box>
                <Typography color="text.secondary">
                  <IconFileDescription width="20" />
                </Typography>
                <Typography variant="h4" fontWeight="600">
                  938
                </Typography>
                <Typography color="textSecondary" variant="h6" fontWeight={400}>
                  Số point
                </Typography>
              </Box> */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  to={'/assistant/list'}
                  style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <Typography
                    variant="h4"
                    fontWeight="600"
                    sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '20px' } }}
                  >
                    2,659
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight={500}
                    sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '20px' } }}
                  >
                    Trợ lý
                  </Typography>
                </Link>
              </Box>
            </Stack>
          </Grid>
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
              textAlign="center"
              justifyContent="center"
              sx={{
                mt: '-85px',
              }}
            >
              <Box>
                <ProfileImage>
                  <Avatar
                    src={userimg}
                    alt={userimg}
                    sx={{
                      borderRadius: '50%',
                      width: '100px',
                      height: '100px',
                      border: '4px solid #fff',
                    }}
                  />
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
            item
            lg={4}
            sm={6}
            xs={12}
            sx={{
              order: {
                xs: '3',
                sm: '3',
                lg: '3',
              },
            }}
          >
            <Stack
              direction={'row'}
              gap={2}
              my={2}
              px={2}
              spacing={2}
              sx={{ justifyContent: { sx: 'center', sm: 'end' } }}
            >
              <Link to={'/apps/affiliate'}>
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
        {/**TabbingPart**/}
        <ProfileTab />
      </BlankCard>
    </>
  );
};

export default ProfileBanner;
