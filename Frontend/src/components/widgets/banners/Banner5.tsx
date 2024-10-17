// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Button, CardContent, Typography } from '@mui/material';
import shopBg from 'src/assets/images/products/empty-shopping-cart.svg';

const Banner5 = () => {
  return (
    <CardContent sx={{ p: '30px' }}>
      <Box textAlign="center">
        <img src={shopBg} alt="star" width={200} />

        <Typography variant="h5" mt={3}>
          Oop, Your cart is empty!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mt={1} mb={2}>
          Get back to shopping and get
          <br /> rewards from it.
        </Typography>

        <Button color="primary" variant="contained" size="large">
          Go for shopping!
        </Button>
      </Box>
    </CardContent>
  );
};

export default Banner5;
