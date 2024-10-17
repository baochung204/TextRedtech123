// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Avatar, Box, Button, ButtonGroup, Stack, Typography } from '@mui/material';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import { fetchCartData } from 'src/store/user/cart/cartSlice';

interface PropsData {
  product_id: number;
  name: string;
  point: number;
  image_url: string;
  quantity: number;
}

const CartItems = () => {
  const [cartData, setCartData] = useState<PropsData[]>([]);
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart.dataa);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    setCartData(cart);
  }, [cart]);

  console.log(cartData.products + 'hello');

  return (
    <Box px={3}>
      {(cartData?.products ?? []).length > 0 ? (
        cartData.products.map((product, index) => (
          <Box key={product.id + index * index}>{/* Render product */}</Box>
        ))
      ) : (
        <Box textAlign="center" mb={3}>
          <img src={emptyCart} alt="cart" width="200px" />
          <Typography variant="h5" mb={2}>
            Không có sản phẩm nào
          </Typography>
          <Button component={Link} to="/shops" variant="contained">
            Shopping ngay !
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CartItems;
