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
        cartData.products.map((product: any, index: any) => (
          <Box key={product.id + index * index}>
            <Stack direction="row" spacing={2} py={3}>
              <Avatar
                src={product.image_url}
                alt={product.image_url}
                sx={{
                  borderRadius: '10px',
                  height: '75px',
                  width: '95px',
                }}
              />
              <Box>
                <Typography variant="subtitle2" color="black" fontWeight={600}>
                  {product.name}
                </Typography>{' '}
                <Typography color="textSecondary" fontSize="12px">
                  {' '}
                  {product.category}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2} mt="5px">
                  <Typography variant="subtitle2" fontWeight="500">
                    {(product.point * product.quantity).toLocaleString()}
                  </Typography>
                  <ButtonGroup size="small" aria-label="small button group">
                    <Button
                      color="success"
                      className="btn-xs"
                      variant="text"
                      sx={{ bgcolor: 'transparent', color: 'text.secondary' }}
                      // onClick={() => Decrease(product.id)}
                      disabled={product.quantity < 2}
                    >
                      <IconMinus stroke={1.5} size="0.8rem" />
                    </Button>
                    <Button
                      color="inherit"
                      sx={{ bgcolor: 'transparent', color: 'text.secondary' }}
                      variant="text"
                    >
                      {product.quantity}
                    </Button>
                    <Button
                      color="success"
                      sx={{ bgcolor: 'transparent', color: 'text.secondary' }}
                      className="btn-xs"
                      variant="text"
                      // onClick={() => Increase(product.id)}
                    >
                      <IconPlus stroke={1.5} size="0.8rem" />
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Box>
            </Stack>
          </Box>
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
