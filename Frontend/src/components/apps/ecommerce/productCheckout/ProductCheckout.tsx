// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box } from '@mui/material';
import AddToCart from '../productCart/AddToCart';

const ProductChecout = () => {
  return (
    <Box>
      <>
        <Box my={3}>
          <AddToCart />
        </Box>
        {/* ------------------------------------------- */}
        {/* Tổng giỏ hàng */}
        {/* ------------------------------------------- */}
      </>
    </Box>
  );
};

export default ProductChecout;
