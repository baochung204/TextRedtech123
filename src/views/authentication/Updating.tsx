import { Box, Typography, CircularProgress, Container, Button } from '@mui/material';
import React from 'react';
import UpdatingImg from 'src/assets/images/backgrounds/updating.svg';
import { Link } from 'react-router-dom';

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
      <img src={UpdatingImg} alt="404" style={{ width: '100%', maxWidth: '500px' }} />
      <Typography align="center" variant="h1" mb={4}>
        Đang cập nhật...
      </Typography>
      <Typography align="center" variant="h6" mb={4}>
        Website đang được xây dựng. Vui lòng quay lại sau!
      </Typography>
      <Button color="primary" variant="contained" component={Link} to="/" disableElevation>
        Trở về trang chủ
      </Button>
    </Container>
  </Box>
  );
};

export default Updating;
