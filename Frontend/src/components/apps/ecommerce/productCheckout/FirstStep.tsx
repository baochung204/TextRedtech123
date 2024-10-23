import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { IconChevronDown } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import Countdown from 'src/components/countdown/countdown';
import { AppState } from 'src/store/Store';
import { fetchFlashSaleData } from 'src/store/user/flashsale-random/flashsaleSlice';
import ChildCard from '../../../shared/ChildCard';

declare interface Package {
  flashSaleId: number;
  productId: number;
  productName: string;
  productImgUrl: string;
  point: number;
  priceAfterFlashSale: number;
  percent: number;
  displayTime: number;
}

const FirstStep = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const dispatch = useDispatch();
  // const theme = useTheme();
  const [pointsEarned, setPointsEarned] = useState(0);

  // const [countdownTime, setCountdownTime] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackage2, setSelectedPackage2] = useState(true);
  const cart = useSelector((state: AppState) => state.cart.dataa);
  const flashSaleRandom = useSelector((state: AppState) => state.flashsale_random.dataa);

  useEffect(() => {
    dispatch(fetchFlashSaleData());
  }, [dispatch]);

  console.log('cart', cart);

  console.log('flashsale', flashSaleRandom);

  console.log('countdownTime', flashSaleRandom);

  console.log(selectedPackage);

  const handleSelectPackage = (pkg: Package) => {
    if (selectedPackage === pkg.flashSaleId) {
      setSelectedPackage(null);
      setPointsEarned(0);
    } else {
      setSelectedPackage(pkg.flashSaleId);
      setPointsEarned(pkg.point);
    }
  };

  const handleAccordionClick = () => {
    setTimeout(() => {
      setSelectedPackage2(false);
      setSelectedPackage(null);
      setPointsEarned(null);
    }, 15000);
  };
  return (
    <>
      <Box my={3}>
        <ChildCard>
          <Box p={{ sx: 0, md: 2 }}>
            <Typography variant="h5" fontWeight={600} mb={3}>
              Đơn hàng
            </Typography>
            {selectedPackage2 && (
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
                  onClick={handleAccordionClick}
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
                    {flashSaleRandom.map((pkg) => (
                      <Grid item xs={12} md={12} key={pkg.flashSaleId}>
                        <Card
                          sx={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow:
                              selectedPackage === pkg.flashSaleId
                                ? '0 6px 18px rgba(128, 128, 128, 0.4)'
                                : '0 6px 18px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s',
                            height: 'auto',
                            marginY: '0px',
                            paddingY: '0px',

                            transform:
                              selectedPackage === pkg.flashSaleId ? 'scale(1.02) ' : 'scale(1)',
                          }}
                          onClick={() => {
                            handleSelectPackage(pkg),
                              console.log('selectedPackage', selectedPackage);
                          }}
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
                            {/* flashsale here */}
                            <div style={{ display: 'flex', gap: '20px' }}>
                              <Typography component={Link} to={`/shop/detail/${pkg.productId}`}>
                                {lgUp ? (
                                  <img
                                    src={pkg.productImgUrl}
                                    alt={''}
                                    style={{
                                      borderRadius: '10px',
                                      width: '100px',
                                    }}
                                  />
                                ) : (
                                  <img
                                    src={pkg.productImgUrl}
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
                                  {pkg.productName}
                                </Typography>

                                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                  <Typography
                                    sx={{
                                      mb: 1,
                                      color: '#888',
                                      fontSize: '14px',
                                      display: 'flex',
                                      gap: '3px',
                                    }}
                                  >
                                    <del>{pkg.percent} </del>
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
                                      gap: '3px',
                                    }}
                                  >
                                    {pkg.point}
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
                                    {pkg.percent}%
                                  </Button>
                                </Box>
                              </div>
                            </div>
                            <Box>
                              {lgUp && pkg.displayTime && (
                                <Countdown initialSeconds={pkg.displayTime} onTimeUp={() => {}} />
                              )}

                              <Button
                                variant={
                                  selectedPackage === pkg.flashSaleId ? 'contained' : 'outlined'
                                }
                                color="warning"
                                sx={{
                                  display: { xs: 'none', md: 'block' },
                                  width: '123.86px',
                                  backgroundImage:
                                    selectedPackage === pkg.flashSaleId
                                      ? 'linear-gradient(45deg, #ff6f61, #ff9a76)'
                                      : 'none',
                                  borderColor:
                                    selectedPackage === pkg.flashSaleId ? 'transparent' : '#FFD60A',
                                }}
                                onClick={() => {
                                  handleSelectPackage(pkg);
                                  console.log('selectedPackage', pkg.flashSaleId);
                                }}
                              >
                                {selectedPackage === pkg.flashSaleId ? 'Đã chọn' : 'Chọn Mua'}
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            )}
          </Box>
          <Box>
            {/* Tổng cộng */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Giá trị đơn hàng
              </Typography>
              <Typography variant="h6" display={'flex'} alignItems={'center'} gap="3px">
                {cart.totalPoint + (pointsEarned === null ? 0 : pointsEarned)}
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
                color="error"
                display={'flex'}
                alignItems={'center'}
                gap="3px"
              >
                {cart.totalAmountDiscount}
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
              <Typography variant="h6">Tổng thanh toán</Typography>
              <Typography
                variant="h5"
                color="success"
                display={'flex'}
                alignItems={'center'}
                gap="3px"
              >
                {cart.totalPriceAfterDiscount + (pointsEarned === null ? 0 : pointsEarned)}

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
    </>
  );
};

export default FirstStep;
