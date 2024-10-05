import { Box, Typography, Container, Button } from '@mui/material';
// import React from 'react';
import { Link } from 'react-router-dom';
import develop from 'src/assets/images/backgrounds/develop.svg';

const Updating = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      textAlign="center"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Box
          component="img"
          src={develop}
          alt="404"
          sx={{
            width: '100%',
            maxWidth: '400px',
          }}
        />
        <br />
        <Typography align="center" variant="h1" mb={4}>
          Đang cập nhật...
        </Typography>
        <Typography align="center" variant="h6" mb={4}>
          Website đang trong quá trình hoàn thiện. Vui lòng quay lại sau!
        </Typography>
        <Button color="primary" variant="contained" component={Link} to="/" disableElevation>
          Trở về trang chủ
        </Button>
      </Container>
    </Box>
  );
};

export default Updating;
