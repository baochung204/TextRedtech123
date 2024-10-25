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
import { useState } from 'react'; // Correctly importing useState
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import ChildCard from 'src/components/shared/ChildCard';
import { AppState } from 'src/store/Store';

const ContentPurchaseHistory = () => {
  // Changed function name to follow PascalCase

  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const handleSelectPackage = (pkgId: number) => {
    setSelectedPackage(selectedPackage === pkgId ? null : pkgId);
  };

  const orderhistorydetail = useSelector((state: AppState) => state.historyorder_detail.dataa);
  const flashSaleArray = [orderhistorydetail.flashSaleResponse];

  console.log('orderhistorydetail hello', orderhistorydetail);
  return (
    <div>
      {/* <ProductChecout /> */}
      <Box display={'flex'} alignItems="center" justifyContent={'center'} marginBottom={5}>
        <Typography variant="h3">Chi tiết đơn hàng </Typography>
      </Box>
      <Box>
        <TableContainer sx={{ minWidth: 350 }}>
          <Table>
            <TableHead>
              <TableRow>
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
              {orderhistorydetail?.orderLines?.map((product) => (
                <TableRow key={product.orderLineId}>
                  <TableCell align="center">
                    <Stack direction="row" alignItems="center" gap={2}>
                      <Avatar
                        src={product.productImage}
                        alt={product.productName}
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
                      <Typography variant="h6">{product.productName}</Typography>
                      <Typography color="textSecondary" variant="body1">
                        {product.category}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <ButtonGroup size="small" color="success" aria-label="small button group">
                      <Button>{product.quantity}</Button>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell align="center">
                    <Box width={'150px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                      <Typography
                        color="textSecondary"
                        variant="h6"
                        sx={{ display: 'flex', gap: 0.5 }}
                      >
                        {product.point}
                        <img
                          src={logoPoint}
                          alt=""
                          width={20}
                          height={20}
                          style={{ borderRadius: 50 }}
                        />
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box width={'150px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                      <Typography
                        color="textSecondary"
                        variant="h6"
                        sx={{ display: 'flex', gap: 0.5 }}
                      >
                        {product.amountDiscount}
                        <img
                          src={logoPoint}
                          alt=""
                          width={20}
                          height={20}
                          style={{ borderRadius: 50 }}
                        />
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box width={'150px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                      <Typography
                        color="textSecondary"
                        variant="h6"
                        sx={{ display: 'flex', gap: 0.5 }}
                      >
                        {product.priceAfterDiscount}
                        <img
                          src={logoPoint}
                          alt=""
                          width={20}
                          height={20}
                          style={{ borderRadius: 50 }}
                        />
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box my={3}>
          <ChildCard>
            <Box p={2}>
              <Typography variant="h5" fontWeight={600} mb={1}>
                Đơn hàng
              </Typography>
              {/* Tổng cộng */}
              {flashSaleArray?.length > 1 && (
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
                      {flashSaleArray.map((pkg) => (
                        <Grid item xs={12} md={12} key={pkg?.productId}>
                          <Card
                            sx={{
                              borderRadius: '15px',
                              overflow: 'hidden',
                              boxShadow:
                                selectedPackage === pkg?.productId
                                  ? '0 6px 18px rgba(128, 128, 128, 0.4)'
                                  : '0 6px 18px rgba(0,0,0,0.1)',
                              transition: 'transform 0.3s',
                              height: 'auto',
                              marginY: '0px',
                              paddingY: '0px',
                              transform:
                                selectedPackage === pkg?.productId ? 'scale(1.02)' : 'scale(1)',
                            }}
                            onClick={() => handleSelectPackage(pkg?.productId)}
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
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  width: '100%', // Ensure the Box takes the full width of its container
                                }}
                              >
                                {/* box1 */}
                                <Box sx={{ display: 'flex' }}>
                                  <Typography component={Link} to={`/shop/detail/11`}>
                                    <img
                                      src={pkg?.productImgUrl}
                                      alt={pkg?.productName}
                                      width="120"
                                      style={{ borderRadius: '10px' }}
                                    />
                                  </Typography>
                                  <Box sx={{ marginLeft: '10px' }}>
                                    <Typography
                                      variant="h6"
                                      sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                      }}
                                    >
                                      {pkg?.productName}
                                    </Typography>

                                    <Box
                                      sx={{
                                        display: 'flex',
                                        gap: 1.5,
                                        marginTop: '10px',
                                      }}
                                    >
                                      <Typography
                                        variant="h6"
                                        sx={{
                                          fontWeight: 'bold',
                                          gap: 1,
                                          display: 'flex',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        {pkg?.point}
                                        <img
                                          src={logoPoint}
                                          alt="Logo Point"
                                          width={20}
                                          height={20}
                                          style={{ borderRadius: 50 }}
                                        />
                                      </Typography>
                                      <Typography
                                        sx={{
                                          mb: 1,
                                          color: '#888',
                                          fontSize: '12px',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          gap: 1,
                                        }}
                                      >
                                        <del>{pkg?.priceAfterFlashSale}</del>
                                        <img
                                          src={logoPoint}
                                          alt="Logo Point"
                                          width={20}
                                          height={20}
                                          style={{ borderRadius: 50 }}
                                        />
                                      </Typography>
                                    </Box>
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
                                        {pkg?.percent}%
                                      </Button>
                                    </Box>
                                  </Box>
                                </Box>
                                {/* box2 */}
                                <Box>
                                  <Typography variant="h5">Tổng giá gói</Typography>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      marginTop: '10px',
                                    }}
                                  >
                                    499
                                    <img
                                      src={logoPoint}
                                      alt={logoPoint}
                                      width={20}
                                      height={20}
                                      style={{ borderRadius: 50 }}
                                    />
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              )}

              <Stack direction="row" justifyContent="space-between" mb={2}>
                <Typography variant="h6" fontWeight={400}>
                  Giá trị đơn hàng :
                </Typography>
                <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  {orderhistorydetail.point}
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
              <Stack direction="row" justifyContent="space-between" mb={2}>
                <Typography variant="h6" fontWeight={400}>
                  Khuyến mãi :
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'error.main',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {orderhistorydetail.amountDiscount}
                  <img
                    src={logoPoint}
                    alt={logoPoint}
                    width={20}
                    height={20}
                    style={{ borderRadius: 50 }}
                  />
                </Typography>
              </Stack>

              {/* Tổng cộng */}
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography variant="h6">Tổng thanh toán :</Typography>
                <Typography
                  variant="h5"
                  color="success"
                  sx={{
                    gap: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {orderhistorydetail.priceAfterDiscount}
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

export default ContentPurchaseHistory;
