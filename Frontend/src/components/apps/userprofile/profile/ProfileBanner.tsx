import VerifiedIcon from '@mui/icons-material/Verified';
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconCameraBolt } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import profilecover from 'src/assets/images/backgrounds/profilebg.jpg';
import userimg from 'src/assets/images/profile/user-1.jpg';
import { AppDispatch, AppState } from 'src/store/Store';
import { fetchaffiliateaccount } from 'src/store/user/affiliate-account/affiliate-account';
import { fetchUserMeData } from 'src/store/user/userme/usermeSlice';
import BlankCard from '../../../shared/BlankCard';
import ProfileTab from './ProfileTab';

const ProfileBanner = () => {
  const affiliate = useSelector((state: any) => state.affiliate.data);
  console.log('affiliate', affiliate);

  const [datax, setdatax] = useState<any>({});

  useEffect(() => {
    if (datax !== affiliate) {
      setdatax(affiliate);
    }
  }, [datax, affiliate]);

  const [bannerImage] = useState(profilecover);
  const [avatarImage, setAvatarImage] = useState(userimg);
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const userme = useSelector((state: AppState) => state.userme.result);
  const usermeError = useSelector((state: AppState) => state.userme.error);
  const usermeLoading = useSelector((state: AppState) => state.userme.loading);

  console.log('Userme:', userme);

  useEffect(() => {
    dispatch(fetchUserMeData());
    dispatch(fetchaffiliateaccount());
  }, [dispatch]);

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
    position: 'relative',
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
        {usermeLoading ? (
          <Typography variant="h6" align="center">
            Đang tải dữ liệu người dùng...
          </Typography>
        ) : usermeError ? (
          <Typography variant="h6" align="center" color="error">
            Đã xảy ra lỗi: {usermeError}
          </Typography>
        ) : userme ? (
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              image={bannerImage}
              alt="Profile cover"
              sx={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
              }}
            />
            <Grid
              container
              spacing={0}
              sx={{
                justifyContent: { xs: 'space-evenly', sm: 'space-evenly' },
                alignItems: 'center',
                display: { xs: 'flex', sm: 'flex' },
              }}
            >
              {/* Thông tin người dùng */}
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
                  justifyContent="center"
                  sx={{
                    mt: '-85px',
                    position: 'relative',
                  }}
                >
                  <Box textAlign="center">
                    <ProfileImage>
                      <Avatar
                        src={userme.avatarUrl || avatarImage}
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
                          component="span"
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: '-10px',
                            backgroundColor: primary,
                            padding: '5px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            color: '#fff',
                            '&:hover': {
                              backgroundColor: primary,
                            },
                          }}
                        >
                          <IconCameraBolt style={{ fontSize: '30px' }} />
                        </IconButton>
                      </label>
                    </ProfileImage>

                    <Box
                      mt={1}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography
                        fontWeight={600}
                        variant="h5"
                        display="flex"
                        alignItems="center"
                        sx={{ textAlign: 'center' }} // Căn giữa văn bản
                      >
                        {userme.name || 'Tên người dùng'}
                      </Typography>
                      <VerifiedIcon sx={{ color: '#1DA1F2', fontSize: '20px', ml: 1 }} />
                    </Box>

                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight={400}
                      sx={{ color: '#757575', textAlign: 'center' }} // Căn giữa số điện thoại
                    >
                      {userme.phoneNumber || 'Số điện thoại'}
                    </Typography>
                  </Box>

                </Box>
              </Grid>

              {/* Nút Đăng ký affiliate */}
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
                  <Button
                    color="primary"
                    variant="contained"
                    component={Link}
                    to={`${datax.type === 'BUSINESS'
                        ? '/company-affiliate'
                        : datax.type === 'CUSTOMER'
                          ? '/person-affiliate '
                          : '/user_profile/affiliate/register'
                      }`}
                    sx={{
                      fontSize: { xs: '12px', sm: '14px', md: '14px' },
                    }}
                  >
                    Đăng ký affiliate
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <ProfileTab />
          </Box>
        ) : (
          <Typography variant="h6" align="center" color="textSecondary">
            Không có thông tin người dùng
          </Typography>
        )}
      </BlankCard>
    </>
  );
};

export default ProfileBanner;
