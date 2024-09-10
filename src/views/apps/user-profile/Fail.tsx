import { Avatar, Box, Button, Grid, styled, Typography } from '@mui/material';
import userimg from 'src/assets/images/profile/user-1.jpg';
import React from 'react';
import fail from 'src/assets/images/certificate/failre.png';
import { Link } from 'react-router-dom'; // Import useNavigate for navigation
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

const FailMessageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#4e2828' : '#fff4f4',
  padding: '20px',
  borderRadius: '8px',
  border: `2px solid ${theme.palette.error.main}`,
  marginTop: '20px',
}));

const Fail = () => {
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
              border: `2px solid ${isDarkMode ? '#444' : '#ddd'}`,
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
                  sx={{ fontWeight: 'bold', color: isDarkMode ? '#ddd' : '#333' }}
                >
                  Nguyễn Đăng Hòa
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '4px' }}>
                  0981522873
                </Typography>
                <Typography variant="body1">hoaace2003@gmail.com</Typography>
              </Grid>

              {/* Failure message below */}
              <Grid item xs={12} textAlign="center">
                <img src={fail} alt="Error Image" style={{ width: '200px', height: '170px' }} />

                {/* Failure Message */}
                <FailMessageWrapper theme={theme}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: theme.palette.error.main,
                      marginBottom: '10px',
                    }}
                  >
                    Thông tin của bạn chưa đủ điều kiện đăng ký
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: isDarkMode ? '#ccc' : '#555', marginBottom: '6px' }}
                  >
                    Vui lòng kiểm tra lại thông tin và thử lại sau!
                  </Typography>
                  <Typography variant="body2" sx={{ color: isDarkMode ? '#ccc' : '#555' }}>
                    Nếu bạn cần hỗ trợ, hãy liên hệ với chúng tôi qua email hoặc số điện thoại.
                  </Typography>

                  <Button
                    component={Link}
                    variant="contained"
                    color="error"
                    to="/apps/affiliate"
                    sx={{ marginTop: '10px' }}
                  >
                    Trở lại trang đăng ký
                  </Button>
                </FailMessageWrapper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Fail;
