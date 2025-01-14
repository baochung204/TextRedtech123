import {
  Box,
  Button,
  ButtonGroup,
  Chip,
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
import { default as logo } from 'src/assets/images/logos/R-Point.png';
import { AppState, dispatch, useSelector } from 'src/store/Store';
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
  const productData = useSelector((state: AppState) => state.productById.data);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const product: any = useSelector((state) => state.ecommerceReducer.products[Number(id) - 1]);
  const point = product?.point ?? 0;
  const qty = product?.qty ?? 0;
  const discount = product?.discount ?? 0;

  // Calculate total and discount safely
  const total = point * qty - discount * qty;
  const discountProduct = discount * qty;
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
      {productData?.productInfo ? (
        <>
          {/* Title and description */}
          <Chip
            color="success"
            label={productData?.productInfo?.category}
            sx={{ width: 'auto', mt: '-20px', py: 1, px: 1 }}
            variant="filled"
          />
          <Typography fontWeight="600" variant="h4" mt={1}>
            {productData?.productInfo?.name}
          </Typography>
          <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
            {productData?.productInfo?.description}
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
                  {productData?.productInfo?.point?.toLocaleString()}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h4">
                  {productData?.productInfo?.priceAfterDiscount?.toLocaleString()}
                </Typography>
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
          {productData?.productInfo?.isQuantity && (
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
          )}
          <Divider /> {/* Action buttons */}
          {!productData?.productInfo?.isOwn ? (
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
          ) : (
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h5" mt={1} mb={2} sx={{ color: '#FFAE1F' }} fontWeight={500}>
                  Bạn đã sở hữu chatbot này!
                </Typography>
                <Typography
                  variant="h6"
                  mt={1}
                  mb={2}
                  color="warning"
                  fontWeight={500}
                  sx={{ color: 'gray' }}
                >
                  Nếu bạn cần thêm tính năng hoặc muốn mở rộng khả năng của mình, hãy xem xét việc
                  mua thêm một chatbot khác để tận dụng tối đa lợi ích mà chúng mang lại.
                </Typography>
              </Grid>
            </Grid>
          )}
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
                            {/* <TableRow key={product.id}> */}
                            {/* <TableCell align="center">
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
                              </TableCell> */}
                            {/* <TableCell align="center">
                                <Box>
                                  <Typography variant="h6">{product.name}</Typography>{' '}
                                  <Typography color="textSecondary" variant="body1">
                                    {product.category}
                                  </Typography>
                                </Box>
                              </TableCell> */}
                            {/* <TableCell align="center">
                                <ButtonGroup
                                  size="small"
                                  color="success"
                                  aria-label="small button group"
                                >
                                
                                  <Button>{product.qty}</Button>
                                
                                </ButtonGroup>
                              </TableCell> */}
                            {/* <TableCell align="center">
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
                              </TableCell> */}
                            {/* <TableCell align="center">
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
                                  ${product.salesPrice * product.qty - product.price * product.qty}
                                </Typography>
                              </TableCell> */}
                            {/* <TableCell align="center">
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
                              </TableCell> */}
                            {/* </TableRow> */}
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
