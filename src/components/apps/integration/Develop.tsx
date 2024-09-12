import { Box, Container, Typography } from '@mui/material';
import develop from 'src/assets/images/backgrounds/develop.svg';

const Develop = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="80vh"
      textAlign="center"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Box
          component="img"
          src={develop}
          alt="404"
          sx={{
            width: '80%',
            maxWidth: '200px',
          }}
        />
        <br />

        <Typography align="center" variant="h1" mb={4}>
          Đang phát triển...
        </Typography>
        <Typography align="center" variant="h6" mb={4}>
          Website đang được xây dựng. Vui lòng quay lại sau!
        </Typography>
      </Container>
    </Box>
  );
};

export default Develop;
