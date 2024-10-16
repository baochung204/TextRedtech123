// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Button, CardContent, Typography } from '@mui/material';
import oopsBg from 'src/assets/images/backgrounds/maintenance.svg';

const Banner4 = () => {
  return (
    <CardContent sx={{ p: '30px' }}>
      <Box textAlign="center">
        <img src={oopsBg} alt="star" width={200} />

        <Typography variant="h5" mt={3}>
          Oops something went wrong!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mt={1} mb={2}>
          Trying again to bypasses these
          <br /> temporary error.
        </Typography>

        <Button color="error" variant="contained" size="large">
          Retry
        </Button>
      </Box>
    </CardContent>
  );
};

export default Banner4;
