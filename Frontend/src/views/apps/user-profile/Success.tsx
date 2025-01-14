import { useTheme } from '@emotion/react';
import { Avatar, Box, Grid, styled, Typography } from '@mui/material';
import certificate from 'src/assets/images/certificate/certificate.png';
import userimg from 'src/assets/images/profile/user-1.jpg';

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

const SuccessMessageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1e4620' : '#f0fff4',
  padding: '20px',
  borderRadius: '8px',
  border: `2px solid ${theme.palette.success.main}`,
  marginTop: '20px',
}));

const Success = () => {
  const theme = useTheme(); // Get theme to check dark/light mode
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <>
      <Grid container spacing={2}>
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
              {/* Left side (Avatar, User Info, Certificate) */}
              <Grid item xs={6} sm={6} textAlign="center">
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

                {/* User Information */}
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: isDarkMode ? '#ddd' : '#333',
                    marginTop: '10px',
                  }}
                >
                  Nguyễn Đăng Hòa
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: '4px' }}>
                  0981522873
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                  hoaace2003@gmail.com
                </Typography>

                {/* Success icon */}
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/746/original/tick-and-cross-clipart-design-illustration-free-png.png"
                  alt="Success Icon"
                  style={{ width: '90px', height: '90px', marginBottom: '20px' }}
                />
              </Grid>

              {/* Center (Success Icon and Message) */}
              <Grid item xs={6} sm={6} textAlign="center">
                {/* Certificate */}
                <img
                  src={certificate}
                  alt="Certificate"
                  style={{ marginTop: '20px', width: '350px', height: '400px' }}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                {/* Success Message */}
                <SuccessMessageWrapper>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: theme.palette.success.main,
                      marginBottom: '10px',
                    }}
                  >
                    Bạn đã đăng ký thành công!
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: isDarkMode ? '#ccc' : '#555', marginBottom: '6px' }}
                  >
                    Bạn đã chính thức trở thành đối tác affiliate của chúng tôi!
                  </Typography>
                  <Typography variant="body2" sx={{ color: isDarkMode ? '#ccc' : '#555' }}>
                    Tài khoản của bạn đã được kích hoạt thành công, và từ giờ bạn có thể bắt đầu
                    kiếm hoa hồng từ mỗi lượt giới thiệu.
                  </Typography>
                </SuccessMessageWrapper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Success;
