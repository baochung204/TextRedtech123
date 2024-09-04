import { Avatar, Box, Grid, styled, Typography } from '@mui/material';
import userimg from 'src/assets/images/profile/user-1.jpg';
import React from 'react';

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

const SuccessMessageWrapper = styled(Box)(() => ({
  backgroundColor: '#f0fff4',
  padding: '20px',
  borderRadius: '8px',
  border: '2px solid #4caf50',
  marginTop: '20px',
}));

const Success = () => {
  return (
    <>
      <Grid container spacing={2} my={5}>
        {/* Box with the content divided into left and right sections */}
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: 'center',
              border: '2px solid #ddd',
              borderRadius: '10px',
              padding: '20px',
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
                  sx={{ fontWeight: 'bold', color: '#333' }}
                >
                  Nguyễn Đăng Hòa
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', marginBottom: '4px' }}>
                  0981522873
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  hoaace2003@gmail.com
                </Typography>
              </Grid>

              {/* Success message below */}
              <Grid item xs={12} textAlign="center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/746/original/tick-and-cross-clipart-design-illustration-free-png.png"
                  alt=""
                  style={{ width: '170px', height: '170px' }}
                />

                {/* Enhanced Success Message */}
                <SuccessMessageWrapper>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#4caf50',
                      marginBottom: '10px',
                    }}
                  >
                    Bạn đã đăng ký thành công!
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', marginBottom: '6px' }}>
                    Bạn đã chính thức trở thành đối tác affiliate của chúng tôi!
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
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
