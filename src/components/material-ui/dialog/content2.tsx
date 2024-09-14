// import { Box } from '@mui/material';
// import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
} from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'src/store/Store';
import products2 from 'src/assets/images/products/s24.jpg';
import products from 'src/assets/images/products/s25.jpg';
// import Countdown from 'src/components/countdown/countdown';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import ChildCard from 'src/components/shared/ChildCard';

const Content2 = () => {
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
  const [selectedPackage, setSelectedPackage] = useState(null);
  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
  };

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
              <TableRow>
                {/* ------------------------------------------- */}
                {/* Hình ảnh và tiêu đề sản phẩm */}
                {/* ------------------------------------------- */}
                <TableCell align="center">
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Avatar
                      src={products}
                      alt={products}
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
                    <Typography variant="h6">GTP-3</Typography>{' '}
                    <Typography color="textSecondary" variant="body1">
                      toys
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <ButtonGroup size="small" color="success" aria-label="small button group">
                    {/* <Button>
                      <IconMinus stroke={1.5} size="0.8rem" />
                    </Button> */}
                    <Button>{'5'}</Button>
                    {/* <Button>
                      <IconPlus stroke={1.5} size="0.8rem" />
                    </Button> */}
                  </ButtonGroup>
                </TableCell>

                <TableCell align="center">
                  <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
                    570
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
                    120{' '}
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
                    450{' '}
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
              <TableRow>
                {/* ------------------------------------------- */}
                {/* Hình ảnh và tiêu đề sản phẩm */}
                {/* ------------------------------------------- */}
                <TableCell align="center">
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Avatar
                      src={products2}
                      alt={products2}
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
                    <Typography variant="h6">GTP-4</Typography>{' '}
                    <Typography color="textSecondary" variant="body1">
                      toys
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <ButtonGroup size="small" color="success" aria-label="small button group">
                    {/* <Button>
                      <IconMinus stroke={1.5} size="0.8rem" />
                    </Button> */}
                    <Button>{'2'}</Button>
                    {/* <Button>
                      <IconPlus stroke={1.5} size="0.8rem" />
                    </Button> */}
                  </ButtonGroup>
                </TableCell>

                <TableCell align="center">
                  <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
                    1022{' '}
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
                    255{' '}
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
                    767{' '}
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
              <Accordion
                sx={{
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                <AccordionSummary
                  expandIcon={<IconChevronDown />}
                  sx={{
                    fontSize: 15,
                    px: 0,
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: 16, fontWeight: 500 }}>
                    Flash-sale
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    border: 'none',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'column',

                    px: 0,
                  }}
                >
                  <Grid container spacing={1}>
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

                            transform: selectedPackage === pkg.id ? 'scale(1.02) ' : 'scale(1)',
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
                              <Typography component={Link} to={`/apps/ecommerce/detail/11`}>
                                <img
                                  src={pkg.img}
                                  alt={''}
                                  width="120"
                                  style={{ borderRadius: '10px' }}
                                />
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
                                      justifyContent: 'center',
                                      alignItems: 'center',
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
                                      fontWeight: 'bold',

                                      display: 'flex',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    {' '}
                                    {pkg.price.toLocaleString()}
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
                </AccordionDetails>
                <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h5">Tổng giá gói : </Typography>
                  <Typography
                    variant="h6"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    499{' '}
                    <img
                      src={logoPoint}
                      alt={logoPoint}
                      width={20}
                      height={20}
                      style={{ borderRadius: 50 }}
                    />
                  </Typography>
                </Box>{' '}
              </Accordion>
              <Stack direction="row" justifyContent="space-between" mb={3}>
                <Typography variant="h6" fontWeight={400}>
                  Giá trị đơn hàng
                </Typography>
                <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
                  900{' '}
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
                  -500{' '}
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
                  400{' '}
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
        </Box>
      </Box>
    </div>
  );
};

export default Content2;
