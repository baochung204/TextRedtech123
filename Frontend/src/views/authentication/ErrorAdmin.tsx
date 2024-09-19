import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorImg from 'src/assets/images/backgrounds/errorimg.svg';

const ErrorAdmin = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="80vh"
    textAlign="center"
    justifyContent="center"
  >
    <Container maxWidth="md">
      <img src={ErrorImg} alt="404" />
      <Typography align="center" variant="h1" mb={4}>
        Xin lỗi
      </Typography>
      <Typography align="center" variant="h4" mb={4}>
        Trang này không tồn tại. Vui lòng kiểm tra lại địa chỉ hoặc quay lại trang chủ.
      </Typography>
      <Button color="primary" variant="contained" component={Link} to="/admin" disableElevation>
        Trở lại trang chủ
      </Button>
    </Container>
  </Box>
);

export default ErrorAdmin;
