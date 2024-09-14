import React, { useState } from 'react';
import { sum } from 'lodash';
import { IconShoppingCart, IconX } from '@tabler/icons-react';
import { Box, Typography, Badge, IconButton, Button, Stack } from '@mui/material';
import { useSelector } from 'src/store/Store';
import { Link } from 'react-router-dom';
import CartItems from './CartItem';
import { AppState } from 'src/store/Store';

const Cart = () => {
  const Cartproduct = useSelector((state: AppState) => state.ecommerceReducer.cart);
  const bcount = Cartproduct.length > 0 ? Cartproduct.length : '0';

  const checkout = useSelector((state: AppState) => state.ecommerceReducer.cart);
  const total = sum(checkout.map((product: any) => product.price * product.qty));

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget.closest('.cart-dropdown')) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <Box
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      component='div'
      className='cart-dropdown-wrapper'
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
          <Badge color="warning" badgeContent={bcount}>
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
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '14px 16px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
          >
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

          <CartItems />

          <Box mt={2}>
            {Cartproduct.length > 0 ? (
              <>
                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="subtitle2" fontWeight={400}>
                    Total
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={600}>
                    ${total}
                  </Typography>
                </Stack>
                <Button
                  fullWidth
                  component={Link}
                  to="/apps/ecommerce/eco-checkout"
                  variant="contained"
                  color="primary"
                >
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









<<<<<<< HEAD



=======
>>>>>>> bb29f706085f2a2da289ecdd63942eb2cfe5a51a
