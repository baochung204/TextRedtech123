import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  Grid,
  Slide,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { default as logo, default as logoPoint } from 'src/assets/images/logos/R-Point.png';
import { useDispatch, useSelector } from 'src/store/Store';
import { addToCart, fetchProducts } from '../../../../store/apps/eCommerce/ECommerceSlice';
import AlertCart from '../productCart/AlertCart';
import FlashSaleInDetailProduct from './flashSale/FlashSaleInDetailProduct';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDetail = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const product: any = useSelector((state) => state.ecommerceReducer.products[Number(id) - 1]);
  const total = product.point * product.qty - product.discount * product.qty;
  // console.log(total);
  const discountProduct = product.discount * product.qty;

  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);

  const [cartalert, setCartalert] = useState(false);

  const handleClick = () => {
    setCartalert(true);
  };

  const handleCloseCartAlert = (reason: string) => {
    if (reason === 'clickaway') return;
    setCartalert(false);
  };

  const handleBuyNowClick = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(!open);
  };

  return (
    <Box p={2}>
      {product ? (
        <>
          {/* Title and description */}
          <Typography fontWeight="600" variant="h4" mt={1}>
            {product.name}
          </Typography>
          <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
            Superintelligent AI: Là AI thông minh hơn con người trong mọi lĩnh vực. Đây là một khái
            niệm tương lai.
          </Typography>
          {/* Price */}
          <Typography mt={2} variant="h4" fontWeight={600}>
            <Box sx={{ display: 'flex', justifyContent: 'start', gap: '10px' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography
                  color="textSecondary"
                  variant="h6"
                  ml={1}
                  sx={{ textDecoration: 'line-through', opacity: 0.6 }}
                >
                  {product.discount.toLocaleString()}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h4">{product.point.toLocaleString()}</Typography>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: '25px', height: '25px', marginLeft: '10px' }}
                />
              </Box>
            </Box>
          </Typography>
          <Divider sx={{ marginTop: '20px' }} />
          {/* Quantity selection */}
          <Stack direction="row" alignItems="center" pb={5} sx={{ marginTop: '40px' }}>
            <Typography variant="h6" mr={4}>
              Số lượng:
            </Typography>
            <Box>
              <ButtonGroup size="small" color="secondary" aria-label="small button group">
                <Button key="one" onClick={() => setCount(count < 2 ? count : count - 1)}>
                  <IconMinus size="1.1rem" />
                </Button>
                <Button key="two">{count}</Button>
                <Button key="three" onClick={() => setCount(count + 1)}>
                  <IconPlus size="1.1rem" />
                </Button>
              </ButtonGroup>
            </Box>
          </Stack>
          <Divider />
          {/* Action buttons */}
          <Grid container spacing={2} mt={5}>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="primary"
                size="large"
                fullWidth
                variant="contained"
                onClick={handleBuyNowClick}
              >
                Mua ngay
              </Button>
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="error"
                size="large"
                fullWidth
                variant="contained"
                onClick={() => {
                  dispatch(addToCart(product as any));
                  handleClick();
                }}
              >
                Thêm giỏ hàng
              </Button>
            </Grid>
          </Grid>
          {/* Alert When click on add to cart */}
          <AlertCart handleClose={handleCloseCartAlert} openCartAlert={cartalert} />
          {/* Dialog for "Mua ngay" */}{' '}
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDialog}
            aria-describedby="alert-dialog-slide-description"
            fullWidth
            maxWidth="lg"
            sx={{
              maxHeight: '90vh',
            }}
          >
            {/* <DialogActions style={{ padding: '0' }}>
              <Button onClick={handleCloseDialog} color="primary">
                Đóng
              </Button>
            </DialogActions> */}{' '}
            <DialogContent
              sx={{
                overflowY: 'auto',
                height: '100%',
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'none',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#E3E3E3',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: '#d6d6d6',
                },
              }}
            >
              <DialogContentText id="alert-dialog-slide-description">
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      display={'flex'}
                      alignItems="center"
                      justifyContent={'center'}
                      marginBottom={5}
                    >
                      <Typography variant="h3">Thông tin đơn hàng của bạn </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <TableContainer sx={{ minWidth: 350 }}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              {' '}
                              <TableCell align="center">
                                <Typography variant="h6"></Typography>
                              </TableCell>
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
                            <TableRow key={product.id}>
                              {/* ------------------------------------------- */}
                              {/* Hình ảnh và tiêu đề sản phẩm */}
                              {/* ------------------------------------------- */}
                              <TableCell align="center">
                                <Stack direction="row" alignItems="center" gap={2}>
                                  <Avatar
                                    src={product.thumbnailUrl}
                                    alt={product.thumbnailUrl}
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
                                  <Typography color="textSecondary" variant="body1">
                                    {product.category}
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell align="center">
                                <ButtonGroup
                                  size="small"
                                  color="success"
                                  aria-label="small button group"
                                >
                                  {/* <Button>
                      <IconMinus stroke={1.5} size="0.8rem" />
                    </Button> */}
                                  <Button>{product.qty}</Button>
                                  {/* <Button>
                      <IconPlus stroke={1.5} size="0.8rem" />
                    </Button> */}
                                </ButtonGroup>
                              </TableCell>

                              <TableCell align="center">
                                <Typography
                                  variant="h6"
                                  sx={{ display: 'flex', justifyContent: 'center' }}
                                >
                                  {product.point * product.qty}
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
                                  sx={{ display: 'flex', justifyContent: 'center' }}
                                >
                                  {product.discount * product.qty}
                                  <img
                                    src={logoPoint}
                                    alt={logoPoint}
                                    width={20}
                                    height={20}
                                    style={{ borderRadius: 50 }}
                                  />
                                  {/* ${product.salesPrice * product.qty - product.price * product.qty} */}
                                </Typography>
                              </TableCell>
                              <TableCell align="center">
                                <Typography
                                  variant="h6"
                                  sx={{ display: 'flex', justifyContent: 'center' }}
                                >
                                  {(
                                    product.point * product.qty -
                                    product.discount * product.qty
                                  ).toLocaleString()}
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
                          </TableBody>
                        </Table>{' '}
                      </TableContainer>
                      <FlashSaleInDetailProduct total={total} discountProduct={discountProduct} />
                      <Box textAlign={'center'} marginY={'20px'}>
                        <Button component={Link} to="/resources">
                          Tiếp tục
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        'Không có sản phẩm'
      )}
    </Box>
  );
};

export default ProductDetail;
