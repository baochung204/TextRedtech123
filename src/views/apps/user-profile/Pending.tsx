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

const PendingMessageWrapper = styled(Box)(() => ({
  backgroundColor: '#fffbea',
  padding: '20px',
  borderRadius: '8px',
  border: '2px solid #ffc107',
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

              {/* Pending approval message below */}
              <Grid item xs={12} textAlign="center">
                <RotatingImage
                  src="https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM="
                  alt="Loading"
                />

                {/* Pending Approval Message */}
                <PendingMessageWrapper
                  sx={{
                    marginTop: '30px',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#ffc107',
                      marginBottom: '10px',
                    }}
                  >
                    Đăng ký của bạn đang chờ được duyệt
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', marginBottom: '6px' }}>
                    Cảm ơn bạn đã đăng ký trở thành đối tác affiliate. Thông tin của bạn đang được
                    xem xét.
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    Bạn sẽ nhận được thông báo sau khi tài khoản của bạn được phê duyệt.
                  </Typography>
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
