// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Avatar, Box, Button, Divider, IconButton, Menu, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as dropdownData from './data';

import { IconMail } from '@tabler/icons-react';

import Banner from 'src/assets/ICON/shopping.png';
import ProfileImg from 'src/assets/images/profile/user-1.jpg';
import { setSelected } from 'src/store/RouterSlice';
import { dispatch } from 'src/store/Store';
import ApiService from 'src/service/ApiService';

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick2 = () => {
    navigate('/shops'); // Điều hướng đến trang '/shopping'
  };

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleButtonClick = (id: number) => {
    if (id == 2) {
      dispatch(setSelected('changepassword'));
    }
  };

  const handleLogout = () => {
    ApiService.logout();
    navigate('/auth/login');
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main',
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={ProfileImg}
          alt={ProfileImg}
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>

      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '360px',
            px: 2,
            pt: 3,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#f1f1f1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#e6e6e6',
            },
          },
        }}
      >
        <Typography variant="h5">Thông tin tài khoản</Typography>
        <Stack direction="row" py={2} spacing={1} alignItems="center">
          <Avatar src={ProfileImg} alt={ProfileImg} sx={{ width: 80, height: 80 }} />
          <Box>
            <Typography variant="subtitle1" color="textPrimary" fontWeight={600}>
              Nguyễn Đăng Hòa
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              display="flex"
              alignItems="center"
              sx={{ gap: '2px' }}
            >
              <IconMail width={15} height={15} />
              hoaace2003@gmail.com
            </Typography>
          </Box>
        </Stack>
        <Divider />
        {dropdownData.profile.map((profile) => (
          <Box key={profile.id}>
            <Box sx={{ pt: 2, px: 0 }} className="hover-text-primary">
              <Link to={profile.href} onClick={() => handleButtonClick(profile.id)}>
                <Stack direction="row" spacing={2}>
                  <Box
                    width="30px"
                    height="30px"
                    bgcolor="primary.light"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar
                      src={profile.icon}
                      alt={profile.icon}
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: 0,
                        color: 'black',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="textPrimary"
                      className="text-hover"
                      noWrap
                      sx={{
                        width: '240px',
                        fontSize: 16,
                      }}
                    >
                      {profile.title}
                    </Typography>
                  </Box>
                </Stack>
              </Link>
            </Box>
          </Box>
        ))}

        <Box my={'15px'}>
          <Box
            p={3}
            mb={3}
            overflow="hidden"
            position="relative"
            sx={{
              backgroundImage: `url(${Banner})`,
              backgroundSize: 'cover', // This will make the image cover the entire area
              backgroundPosition: 'center', // Center the image
              backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="h5" mb={2}>
                  Giúp trợ lý của bạn <br />
                  thông minh hơn!
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'black',
                    ':hover': {
                      backgroundColor: '#2C2C2C',
                    },
                  }}
                  onClick={handleButtonClick2}
                >
                  Shopping ngay!
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button onClick={handleLogout} variant="outlined" color="primary" fullWidth>
              Đăng xuất
            </Button>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
