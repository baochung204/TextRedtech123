import { useTheme } from '@emotion/react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import useNavigate for navigation
import fail from 'src/assets/images/certificate/failre.png';

const contractorderuser = () => {
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

              {/* Failure message below */}
              <Grid item xs={12} textAlign="center">
                <img src={fail} alt="Error Image" style={{ width: '200px', height: '170px' }} />

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.error.main,
                    marginBottom: '10px',
                  }}
                >
                  Bạn chưa ký hợp đồng
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDarkMode ? '#ccc' : '#555',
                    marginBottom: '6px',
                    fontSize: '15px',
                  }}
                >
                  Bạn chưa ký hợp đồng với chúng tôi
                </Typography>
                <Typography
                  style={{ fontSize: '15px' }}
                  variant="body2"
                  sx={{ color: isDarkMode ? '#ccc' : '#555' }}
                >
                  Nếu bạn cần hỗ trợ, hãy liên hệ với chúng tôi qua email hoặc số điện thoại.
                </Typography>

                <Button
                  component={Link}
                  variant="contained"
                  color="error"
                  to="/"
                  sx={{ marginTop: '10px' }}
                >
                  Trở lại trang đăng ký
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default contractorderuser;
