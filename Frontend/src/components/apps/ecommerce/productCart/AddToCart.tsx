import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import { dispatch, useSelector } from 'src/store/Store';
// import { ProductType } from 'src/types/apps/eCommerce';
import { decrement, deleteCart, increment } from '../../../../store/apps/eCommerce/ECommerceSlice';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logoPoint from 'src/assets/images/logos/R-Point.png';

import { Alert } from '@mui/material';
import { sum } from 'lodash';
import { useState } from 'react';

import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import Afletpoint2 from 'src/components/material-ui/dialog/Alertpoint2';
import FirstStep from '../productCheckout/FirstStep';

import { AppState } from 'src/store/Store';
import { fetchCartData } from 'src/store/user/cart/cartSlice';

function SlideTransition(props: any) {
  return <Slide {...props} direction="left" />;
}

interface PropsData {
  product_id: number;
  name: string;
  point: number;
  image_url: string;
  quantity: number;
}

const AddToCart = () => {
  const [open, setOpen] = useState(false);

  const cart = useSelector((state: AppState) => state.cart.dataa);

  const [cartData, setCartData] = useState<PropsData[]>([]);

  useEffect(() => {
    dispatch(fetchCartData());
    setCartData(cart);
  }, [dispatch, cart.products]);

  console.log(cartData);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_event: Event | React.SyntheticEvent<any, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // Lấy sản phẩm từ giỏ hàng
  const Cartproduct: any = useSelector((state) => state.ecommerceReducer.cart);
  const total = sum(Cartproduct.map((product: any) => product?.point ?? 0 * product?.qty ?? 0));
  const qty = sum(Cartproduct.map((product: any) => product?.qty ?? 0));
  const Discount = sum(Cartproduct.map((product: any) => product.qty ?? 0 * product.discount ?? 0));
  const Increase = (productId: number | any) => {
    dispatch(increment(productId));
  };
  const Decrease = (productId: number | any) => {
    dispatch(decrement(productId));
  };
  return (
    <Box>
      {cartData.length > 0 ? (
        <>
          <Box>
            <TableContainer sx={{ minWidth: 350 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <Typography variant="h6"></Typography>
                    </TableCell>{' '}
                    <TableCell align="center">
                      <Typography variant="h6">Sản phẩm</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6">Số lượng</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6">Giá niêm yết</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6">Khuyến mãi</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6">Giá sau giảm</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {cartData.map((product: any) => (
                    <TableRow key={product.id}>
                      <TableCell align="center">
                        <Stack direction="row" alignItems="center" gap={2}>
                          <Avatar
                            src={product.image_url}
                            alt={product.image_url}
                            sx={{
                              borderRadius: '10px',
                              height: '80px',
                              width: '90px',
                            }}
                          />
                        </Stack>
                      </TableCell>
                      <TableCell align="center">
                        <Box>
                          <Typography variant="h6">{product.name}</Typography>{' '}
                          <Typography color="textSecondary" variant="body1" my={1}>
                            {product.category}
                          </Typography>
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => dispatch(deleteCart(product.id))}
                          >
                            <IconTrash size="1rem" />
                          </IconButton>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <ButtonGroup size="small" color="success" aria-label="small button group">
                          <Button onClick={() => Decrease(product.id)} disabled={product.qty < 2}>
                            <IconMinus stroke={1.5} size="0.8rem" />
                          </Button>
                          <Button>{product.quantity}</Button>
                          <Button onClick={() => Increase(product.id)}>
                            <IconPlus stroke={1.5} size="0.8rem" />
                          </Button>
                        </ButtonGroup>
                      </TableCell>

                      <TableCell align="center">
                        <Typography
                          variant="h6"
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          gap="2px"
                        >
                          {(product.point * product.quantity).toLocaleString('vn-VN')}
                          <img
                            src={logoPoint}
                            alt={logoPoint}
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                      </TableCell>

                      <TableCell align="center">
                        <Typography
                          variant="h6"
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          gap="2px"
                        >
                          {(product.point * product.quantity).toLocaleString('vn-VN')}
                          <img
                            src={logoPoint}
                            alt={logoPoint}
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                      </TableCell>

                      <TableCell align="center">
                        <Typography
                          variant="h6"
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          gap="2px"
                        >
                          {((product.point - 0) * product.quantity).toLocaleString('vn-VN')}
                          <img
                            src={logoPoint}
                            alt={logoPoint}
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <FirstStep total={total} Discount={Discount} qty={qty} />
            <Stack direction={'row'} justifyContent="space-between">
              <Link to={'/shops'}>
                <Button color="secondary" variant="contained">
                  Quay lại
                </Button>
              </Link>

              <a onClick={handleClick}>
                <Afletpoint2 Cartproduct={Cartproduct} total={total} Discount={Discount}>
                  Thanh toán
                </Afletpoint2>
              </a>
            </Stack>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              TransitionComponent={SlideTransition}
            >
              <Alert onClose={handleClose} severity={'success'} variant="filled">
                Thanh toán thành công
              </Alert>
            </Snackbar>
          </Box>
        </>
      ) : (
        <Box textAlign="center" mb={3}>
          <img src={emptyCart} alt="cart" width="200px" />
          <Typography variant="h5" mb={2}>
            Giỏ hàng trống
          </Typography>
          <Button component={Link} to="/shops" variant="contained">
            Quay lại mua sắm
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AddToCart;
