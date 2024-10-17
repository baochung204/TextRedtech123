import { Badge, Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { IconShoppingCart, IconX } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchCartData } from 'src/store/user/cart/cartSlice';
import CartItems from './CartItem';
interface PropsData {
  product_id: number;
  name: string;
  point: number;
  image_url: string;
  quantity: number;
}

const Cart = () => {
  const [cartData, setCartData] = useState<PropsData[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cart = useSelector((state: AppState) => state.cart.dataa);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    setCartData(cart);
  }, [cart]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget.closest('.cart-dropdown')) {
      setIsDropdownOpen(false);
    }
  };

  // const totalPoints = cartData.products.reduce((sum, item) => sum + item.point * item.quantity, 0);

  console.log(cartData.products);

  return (
    <Box
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      component="div"
      className="cart-dropdown-wrapper"
      sx={{ position: 'relative', display: 'inline-block' }}
    >
      <IconButton
        size="large"
        color="inherit"
        sx={{
          color: 'text.secondary',
          ...(isDropdownOpen && {
            color: 'primary.main',
          }),
        }}
      >
        <Button size="large" color="inherit">
          <Badge color="error" badgeContent={cartData.count}>
            <IconShoppingCart size="21" stroke="1.5" />
          </Badge>
        </Button>
      </IconButton>

      {isDropdownOpen && (
        <Box
          className="cart-dropdown"
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 1,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '10px',
            padding: '14px 35px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            width: '400px',
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
            <Typography variant="h5" fontWeight={600}>
              Giỏ hàng
            </Typography>
            <IconButton
              color="inherit"
              onClick={() => setIsDropdownOpen(false)}
              sx={{
                color: (theme) => theme.palette.grey.A200,
              }}
            >
              <IconX size="1rem" />
            </IconButton>
          </Box>

          {/* Cart Items */}
          <Scrollbar sx={{ height: '300px', overflow: 'auto', maxHeight: '600px' }}>
            <CartItems />
          </Scrollbar>

          {/* Total and Checkout */}
          <Box mt={2}>
            {cartData.products.length > 0 ? (
              <>
                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="subtitle2" fontWeight={400}>
                    Tổng
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    {/* {totalPoints.toLocaleString('vi-VN')} */}
                    <img
                      src={logoPoint}
                      alt={logoPoint}
                      width={20}
                      height={20}
                      style={{ borderRadius: 50, marginLeft: '4px' }}
                    />
                  </Typography>
                </Stack>
                <Button fullWidth component={Link} to="/carts" variant="contained" color="primary">
                  Giỏ hàng của bạn
                </Button>
              </>
            ) : (
              ''
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
