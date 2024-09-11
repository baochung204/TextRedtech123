import { Avatar, Box, Button, Grid, styled, Typography } from '@mui/material';
import userimg from 'src/assets/images/profile/user-1.jpg';
import loading from 'src/assets/images/certificate/loadingre.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

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

const PendingMessageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#5c4830' : '#fffbea',
  padding: '20px',
  borderRadius: '8px',
  border: `2px solid ${theme.palette.warning.main}`,
  marginTop: '20px',
}));

const RotatingImage = styled('img')(() => ({
  width: '170px',
  height: '170px',
  animation: 'rotate360 2s linear infinite', // Animation for 360-degree rotation
  '@keyframes rotate360': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

const Pending = () => {
  const theme = useTheme(); // Get theme to check dark/light mode
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <>
      <Grid container spacing={2}>
        {/* Box with the content divided into left and right sections */}
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: 'center',
              border: `2px solid ${isDarkMode ? '#555' : '#ddd'}`,
              borderRadius: '10px',
              padding: '20px',
              color: isDarkMode ? '#fff' : '#000',
            }}
          >
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              {/* Left side (Avatar) */}
              <Grid item xs={4} sm={3} textAlign="center">
                <ProfileImage>
                  <Avatar
                    src={userimg}
                    alt="User Avatar"
                    sx={{
                      borderRadius: '50%',
                      width: '100px',
                      height: '100px',
                      border: '4px solid #fff',
                    }}
                  />
                </ProfileImage>
              </Grid>

              <Grid item xs={8} sm={9} textAlign="left">
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: 'bold', color: isDarkMode ? 'white' : '#333' }}
                >
                  Nguyễn Đăng Hòa
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: isDarkMode ? 'white' : '#555', marginBottom: '4px' }}
                >
                  0981522873
                </Typography>
                <Typography variant="body1" sx={{ color: isDarkMode ? 'white' : '#555' }}>
                  hoaace2003@gmail.com
                </Typography>
              </Grid>

              {/* Pending approval message below */}
              <Grid item xs={12} textAlign="center">
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: theme.palette.warning.main,
                    marginBottom: '10px',
                  }}
                >
                  Hoàn tất đăng ký
                </Typography>
                <RotatingImage src={loading} alt="Loading" />

                {/* Pending Approval Message */}
                <PendingMessageWrapper theme={theme}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '15px',
                        color: isDarkMode ? '#ccc' : '#555',
                        marginBottom: '6px',
                        maxWidth: '600px',
                        textAlign: 'center',
                      }}
                    >
                      Chúng tôi đang xem xét hồ sơ đăng ký đối tác của bạn. Thông thường, hồ sơ của
                      bạn sẽ được duyệt trong vòng 1 - 3 ngày làm việc kể từ ngày hoàn tất đăng ký.
                      Vui lòng chờ đợi cho đến khi có kết quả. Chúng tôi sẽ gửi thông báo qua email,
                      hoặc bạn có thể kiểm tra trạng thái đối tác ở trang tổng quan Affiliate của
                      mình.
                    </Typography>
                  </Box>

                  <Button
                    component={Link}
                    variant="contained"
                    color="warning"
                    to="/apps/collaborate"
                    sx={{ marginTop: '10px' }}
                  >
                    Đi tới trang Affiliate
                  </Button>
                </PendingMessageWrapper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Pending;
