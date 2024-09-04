import { Avatar, Box, Button, Grid, styled, Typography } from '@mui/material';
import userimg from 'src/assets/images/profile/user-1.jpg';
import React from 'react';
import { Link } from 'react-router-dom'; // Import useNavigate for navigation

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

const FailMessageWrapper = styled(Box)(() => ({
  backgroundColor: '#fff4f4',
  padding: '20px',
  borderRadius: '8px',
  border: '2px solid #f44336',
  marginTop: '20px',
}));

const Fail = () => {
  return (
    <>
      <Grid container spacing={2}>
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

              {/* Failure message below */}
              <Grid item xs={12} textAlign="center">
                <img
                  src="https://media.istockphoto.com/id/1210968750/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ch%E1%BB%AF-th%E1%BA%ADp-x-d%E1%BA%A5u-vector-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-m%C3%A0u-%C4%91%E1%BB%8F-ki%E1%BB%83u-ph%E1%BA%B3ng-%C4%91%C6%B0%E1%BB%A3c-c%C3%A1ch-ly-minh-h%E1%BB%8Da-vector.jpg?s=612x612&w=0&k=20&c=Kid2m9LO8nXzMyum-SXvR_DKBflS0WWCHIV-EJpdq6k="
                  alt="Error Image"
                  style={{ width: '200px', height: '170px' }}
                />

                {/* Failure Message */}
                <FailMessageWrapper>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#f44336',
                      marginBottom: '10px',
                    }}
                  >
                    Thông tin của bạn chưa đủ điều kiện đăng ký
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', marginBottom: '6px' }}>
                    Vui lòng kiểm tra lại thông tin và thử lại sau!
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
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
