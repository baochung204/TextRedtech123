import { useTheme } from '@emotion/react';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import loading from 'src/assets/images/certificate/loadingre.png';

const RotatingImage = styled('img')(() => ({
  width: '100px',
  height: '100px',
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
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          alignItems: 'center', // Center vertically
          justifyContent: 'center', // Center horizontally
        }}
      >
        {/* Box with the content divided into left and right sections */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '500px',
              textAlign: 'center',
              borderRadius: '10px',
              padding: '20px',
              border: `2px solid ${isDarkMode ? '#555' : '#ddd'}`, // Adding border
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Optional box shadow for visual appeal
              color: isDarkMode ? '#fff' : '#000',
            }}
          >
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} textAlign="center">
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: theme.palette.warning.main,
                    marginBottom: '10px',
                    margin: '40px 0',
                  }}
                >
                  Hoàn tất đăng ký
                </Typography>
                <RotatingImage src={loading} alt="Loading" />

                {/* Pending Approval Message */}
                <Box sx={{ margin: '30px 0' }}>
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
                        margin: '30px 0',
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
                    to="/affiliate"
                    sx={{ marginTop: '10px' }}
                  >
                    Đi tới trang Affiliate
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Pending;
