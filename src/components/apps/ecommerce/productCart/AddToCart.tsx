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
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import { useDispatch, useSelector } from 'src/store/Store';
import { ProductType } from 'src/types/apps/eCommerce';
import { decrement, deleteCart, increment } from '../../../../store/apps/eCommerce/ECommerceSlice';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Alert } from '@mui/material';
import { sum } from 'lodash';
import { useState } from 'react';

import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import FirstStep from '../productCheckout/FirstStep';

function SlideTransition(props: any) {
  return <Slide {...props} direction="left" />;
}

const AddToCart = () => {
  const checkout = useSelector((state) => state.ecommerceReducer.cart);

  const total = sum(checkout.map((product: ProductType) => product.price * product.qty));
  const Discount = Math.round(total * (5 / 100));
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      navigate('/apps/ecommerce/shop');
    }, 2000);
  };

  const handleClose = (_event: Event | React.SyntheticEvent<any, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const dispatch = useDispatch();

  // Lấy sản phẩm từ giỏ hàng
  const Cartproduct: ProductType[] = useSelector((state) => state.ecommerceReducer.cart);
  console.log(Cartproduct);
  const Increase = (productId: number | string) => {
    dispatch(increment(productId));
  };

  const Decrease = (productId: number | string) => {
    dispatch(decrement(productId));
  };

  return (
    <Box>
      {Cartproduct.length > 0 ? (
        <>
          <Box>
            <TableContainer sx={{ minWidth: 350 }}>
              <Table>
                <TableHead>
                  <TableRow>
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
                  {Cartproduct.map((product) => (
                    <TableRow key={product.id}>
                      {/* ------------------------------------------- */}
                      {/* Hình ảnh và tiêu đề sản phẩm */}
                      {/* ------------------------------------------- */}
                      <TableCell align="center">
                        <Stack direction="row" alignItems="center" gap={2}>
                          <Avatar
                            src={product.photo}
                            alt={product.photo}
                            sx={{
                              borderRadius: '10px',
                              height: '80px',
                              width: '90px',
                            }}
                          />
                          <Box>
                            <Typography variant="h6">{product.title}</Typography>{' '}
                            <Typography color="textSecondary" variant="body1">
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
                        </Stack>
                      </TableCell>

                      <TableCell align="center">
                        <ButtonGroup size="small" color="success" aria-label="small button group">
                          <Button onClick={() => Decrease(product.id)} disabled={product.qty < 2}>
                            <IconMinus stroke={1.5} size="0.8rem" />
                          </Button>
                          <Button>{product.qty}</Button>
                          <Button onClick={() => Increase(product.id)}>
                            <IconPlus stroke={1.5} size="0.8rem" />
                          </Button>
                        </ButtonGroup>
                      </TableCell>

                      <TableCell align="center">
                        <Typography variant="h6">
                          {' '}
                          {(product.price * product.qty).toLocaleString('vn-VN')} point
                        </Typography>
                      </TableCell>

                      <TableCell align="center">
                        <Typography variant="h6">
                          {(
                            product.salesPrice * product.qty -
                            product.price * product.qty
                          ).toLocaleString('vn-VN')}{' '}
                          point
                        </Typography>
                      </TableCell>

                      <TableCell align="center">
                        <Typography variant="h6">
                          {(
                            product.price * product.qty -
                            (product.salesPrice * product.qty - product.price * product.qty)
                          ).toLocaleString('vn-VN')}
                          point
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <FirstStep total={total} Discount={Discount} />
            <Stack direction={'row'} justifyContent="space-between">
              <Link to={'/apps/ecommerce/shop'}>
                <Button color="secondary" variant="contained">
                  Quay lại
                </Button>
              </Link>

              <Button variant="contained" onClick={handleClick}>
                Thanh toán
              </Button>
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
            </Snackbar>{' '}
          </Box>
        </>
      ) : (
        <Box textAlign="center" mb={3}>
          <img src={emptyCart} alt="cart" width="200px" />
          <Typography variant="h5" mb={2}>
            Giỏ hàng trống
          </Typography>
          <Button component={Link} to="/apps/ecommerce/shop" variant="contained">
            Quay lại mua sắm
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AddToCart;
