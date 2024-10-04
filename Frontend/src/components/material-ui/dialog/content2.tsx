// import { Box } from '@mui/material';
// import React from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'src/store/Store';
import products2 from 'src/assets/images/products/s24.jpg';
import products from 'src/assets/images/products/s25.jpg';
// import Countdown from 'src/components/countdown/countdown';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import ChildCard from 'src/components/shared/ChildCard';

const Content2 = ({
  Cartproduct,
  total,
  Discount,
}: {
  Cartproduct: any;
  total: any;
  Discount: any;
}) => {
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
  const [pointsEarned] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
  };
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  return (
    <div>
      {/* <ProductChecout /> */}
      <Box display={'flex'} alignItems="center" justifyContent={'center'} marginBottom={5}>
        <Typography variant="h3">Thông tin đơn hàng của bạn </Typography>
      </Box>
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
              {Cartproduct?.map((product: any) => (
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
                    <ButtonGroup size="small" color="success" aria-label="small button group">
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
                    <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
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
                    <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
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
                    <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
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
              ))}
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

                            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
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
                              backgroundImage: 'linear-gradient(45deg, #ff6f61, #ff9a76)',

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
                <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
                  {(total + pointsEarned).toLocaleString()}{' '}
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
                    color: 'error.main',
                    alignItems: 'center',
                  }}
                >
                  -{Discount.toLocaleString('vn-VN')}{' '}
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
                <Typography variant="h5" color="success" display={'flex'} justifyContent={'center'}>
                  {(total - Discount + pointsEarned).toLocaleString('vn-VN')}{' '}
                  <img
                    src={logoPoint}
                    alt={logoPoint}
                    width={20}
                    height={20}
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
        </Box>
      </Box>
    </div>
  );
};

export default Content2;
