import { Box, Typography, Container, Button } from '@mui/material';
import React from 'react';
import bot from 'src/assets/images/backgrounds/bot.svg';
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
        <Box
          component="img"
          src={bot}
          alt="404"
          sx={{
            width: '100%',
            maxWidth: '400px',
            animation: 'spin 4s linear infinite',
            '@keyframes spin': {
              '0%': {
                transform: 'rotateY(0deg)',
              },
              '100%': {
                transform: 'rotateY(360deg)',
              },
            },
          }}
        />
        <br />
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
