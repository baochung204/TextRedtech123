import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
  useTheme,
  Slide,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardContent,
  useMediaQuery,
  Avatar,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'src/store/Store';
import { addToCart, fetchProducts } from '../../../../store/apps/eCommerce/ECommerceSlice';
import AlertCart from '../productCart/AlertCart';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import logo from 'src/assets/images/logos/R-Point.png';
import React from 'react';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import { TransitionProps } from '@mui/material/transitions';
import ChildCard from 'src/components/shared/ChildCard';
import products2 from 'src/assets/images/products/s24.jpg';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const packages = [
  {
    id: 7,
    img: products2,
    title: 'Chatbot thương mại điện tử',
    price: 520,
    discount: 499,
    sale: 80,
    timeFlash: 180,
  },
];
const ProductDetail = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
  };
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product: any = useSelector((state) => state.ecommerceReducer.products[Number(id) - 1]);

  // Set quantity
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);

  // For alert when added something to cart
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
    setOpen(false);
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
          {/* Ratings */}
          <Stack direction="row" alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating name="simple-controlled" size="small" value={product.rating} readOnly />
          </Stack>
          {/* Quantity selection */}
          <Stack direction="row" alignItems="center" pb={5}>
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
                onClick={handleBuyNowClick} // Open dialog when clicked
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
                      <Box my={3}>
                        <ChildCard>
                          <Box p={2}>
                            <Typography variant="h5" fontWeight={600} mb={3}>
                              Đơn hàng
                            </Typography>
                            {/* Tổng cộng */}

                            <Typography variant="body2" sx={{ fontSize: 16, fontWeight: 500 }}>
                              Flash-sale
                            </Typography>

                            <Grid container spacing={1} style={{ marginTop: '10px' }}>
                              {packages.map((pkg) => (
                                <Grid item xs={12} md={12} key={pkg.id}>
                                  <Card
                                    sx={{
                                      borderRadius: '15px',
                                      overflow: 'hidden',
                                      boxShadow:
                                        selectedPackage === pkg.id
                                          ? '0 6px 18px rgba(128, 128, 128, 0.4)'
                                          : '0 6px 18px rgba(0,0,0,0.1)',
                                      transition: 'transform 0.3s',
                                      height: 'auto',
                                      marginY: '0px',
                                      paddingY: '0px',

                                      transform: 'scale(1)',
                                    }}
                                    onClick={() => handleSelectPackage(pkg)}
                                  >
                                    <CardContent
                                      sx={{
                                        p: 2,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'end',
                                        '&:last-child': {
                                          pb: 2,
                                        },
                                      }}
                                    >
                                      <div style={{ display: 'flex', gap: '20px' }}>
                                        <Typography component={Link} to={`/shop/detail/11`}>
                                          {lgUp ? (
                                            <img
                                              src={pkg.img}
                                              alt={''}
                                              style={{
                                                borderRadius: '10px',
                                                width: '100px',
                                              }}
                                            />
                                          ) : (
                                            <img
                                              src={pkg.img}
                                              alt={''}
                                              style={{
                                                borderRadius: '10px',
                                                width: '60px',
                                              }}
                                            />
                                          )}
                                        </Typography>
                                        <div>
                                          <Typography
                                            variant="h6"
                                            sx={{
                                              fontWeight: 'bold',
                                              mb: 1,
                                            }}
                                          >
                                            {pkg.title}
                                          </Typography>

                                          <div
                                            style={{
                                              display: 'flex',
                                              gap: '10px',
                                              marginTop: '10px',
                                            }}
                                          >
                                            {' '}
                                            <Typography
                                              sx={{
                                                mb: 1,
                                                color: '#888',
                                                fontSize: '14px',
                                                display: 'flex',
                                              }}
                                            >
                                              <del>{pkg.discount.toLocaleString()} </del>
                                              <img
                                                src={logoPoint}
                                                alt={logoPoint}
                                                width={20}
                                                height={20}
                                                style={{ borderRadius: 50 }}
                                              />
                                            </Typography>
                                            <Typography
                                              sx={{
                                                mb: 1,
                                                display: 'flex',
                                                fontWeight: 'bold',
                                              }}
                                            >
                                              {' '}
                                              {pkg.price.toLocaleString()}{' '}
                                              <img
                                                src={logoPoint}
                                                alt={logoPoint}
                                                width={20}
                                                height={20}
                                                style={{ borderRadius: 50 }}
                                              />
                                            </Typography>{' '}
                                          </div>
                                          <Box>
                                            <Button
                                              variant={'outlined'}
                                              color="warning"
                                              sx={{
                                                display: { xs: 'none', md: 'block' },
                                                backgroundImage: 'none',
                                                ':hover': { backgroundColor: 'none' },
                                                mt: 3.4,
                                              }}
                                            >
                                              {pkg.sale}%
                                            </Button>
                                          </Box>
                                        </div>
                                      </div>
                                      <Box>
                                        {/* {lgUp ? <Countdown initialSeconds={pkg.timeFlash} /> : null} */}
                                        <Button
                                          variant="contained"
                                          color="warning"
                                          sx={{
                                            display: { xs: 'none', md: 'block' },
                                            width: '123.86px',
                                            backgroundImage:
                                              'linear-gradient(45deg, #ff6f61, #ff9a76)',

                                            borderColor: 'transparent',
                                          }}
                                        >
                                          Đã chọn
                                        </Button>
                                      </Box>
                                    </CardContent>
                                    {/* <Box
                              style={{
                                position: 'absolute',
                                top: '-15px',

                                padding: '5px 10px',
                                color: 'white',
                                borderRadius: '0px 0px 10px 10px',
                                fontWeight: 'bold',
                              }}
                              sx={{ right: { xs: '-15px', md: '45px' } }}
                            >
                              <img src={sale} alt="" style={{ width: '70px' }} />
                            </Box> */}
                                  </Card>
                                </Grid>
                              ))}
                            </Grid>

                            {/* <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">Tổng giá Flash-sale : </Typography>
                <Typography variant="h5" sx={{ paddingX: '3px' }}>
                  1.023.900point
                </Typography>
              </Box>{' '} */}

                            <Stack direction="row" justifyContent="space-between" my={3}>
                              <Typography variant="h6" fontWeight={400}>
                                Giá trị đơn hàng
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}
                              >
                                {/* {(total + pointsEarned).toLocaleString()}{' '} */}
                                {product.point * product.qty}

                                <img
                                  src={logoPoint}
                                  alt={logoPoint}
                                  width={20}
                                  height={20}
                                  style={{ borderRadius: 50 }}
                                />
                              </Typography>
                            </Stack>
                            {/* Giảm giá */}
                            <Stack direction="row" justifyContent="space-between" mb={3}>
                              <Typography variant="h6" fontWeight={400}>
                                Khuyến mãi
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  gap: 1,
                                  alignItems: 'center',
                                }}
                              >
                                {product.discount * product.qty}
                                <img
                                  src={logoPoint}
                                  alt={logoPoint}
                                  width={20}
                                  height={20}
                                  style={{ borderRadius: 50 }}
                                />
                              </Typography>
                            </Stack>
                            {/* Vận chuyển */}

                            {/* Tổng cộng */}
                            <Stack direction="row" justifyContent="space-between" mb={1}>
                              <Typography variant="h6">Tổng thanh toán</Typography>
                              <Typography
                                variant="h5"
                                color="error"
                                display={'flex'}
                                justifyContent={'center'}
                                sx={{
                                  gap: 1,
                                }}
                              >
                                {(
                                  product.point * product.qty -
                                  product.discount * product.qty
                                ).toLocaleString()}
                                <img
                                  src={logoPoint}
                                  alt={logoPoint}
                                  width={25}
                                  height={25}
                                  style={{ borderRadius: 50 }}
                                />
                              </Typography>
                            </Stack>
                          </Box>
                        </ChildCard>
                        <Box textAlign={'center'} marginTop={'20px'}>
                          <Button component={Link} to="/resources">
                            Tiếp tục
                          </Button>
                        </Box>
                        {/* <Grid container>
                          <Grid
                            item
                            xs={12}
                            sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}
                          >
                            <Button
                              variant="contained"
                              disableElevation
                              sx={{
                                px: 5,
                                py: 1,
                                backgroundColor: '#FC2032',
                                fontWeight: 700,
                                fontSize: 18,
                                ':hover': {
                                  backgroundColor: '#F22A51',
                                },
                              }}
                            >
                              <Link to={'/resources'} style={{ color: 'white' }}>
                                Thanh toán ngay
                              </Link>
                            </Button>
                          </Grid>
                        </Grid> */}
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
