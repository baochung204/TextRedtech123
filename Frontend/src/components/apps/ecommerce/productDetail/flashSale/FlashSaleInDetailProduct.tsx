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
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import products2 from 'src/assets/images/products/s24.jpg';
import products from 'src/assets/images/products/s25.jpg';
import Countdown from 'src/components/countdown/countdown';
import ChildCard from 'src/components/shared/ChildCard';

const packages = [
  {
    id: 5,
    img: products,
    title: 'Chatbot marketing',
    point: 115,
    discount: 100,
    sale: 80,
    timeFlash: 16,
  },
  {
    id: 6,
    img: products2,
    title: 'Chatbot hỗ trợ khách hàng',
    point: 210,
    discount: 199,
    sale: 80,
    timeFlash: 16,
  },
];
interface IProp {
  total: number;
  discountProduct: number;
}
const FlashSaleInDetailProduct = ({ total, discountProduct }: IProp) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const [pointsEarned, setPointsEarned] = useState<number | null>(null);
  const [countdownTime, setCountdownTime] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackage2, setSelectedPackage2] = useState(true);
  const handleSelectPackage = (pkg: any) => {
    if (selectedPackage === pkg.id) {
      setSelectedPackage(null);
      setPointsEarned(null);
    } else {
      setSelectedPackage(pkg.id);
      setPointsEarned(pkg.point);
    }
  };
  const handleAccordionClick = () => {
    setCountdownTime(15);
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
                                      gap: '3px',
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
                                      gap: '3px',
                                    }}
                                  >
                                    {' '}
                                    {pkg.point.toLocaleString()}{' '}
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
                              {lgUp && countdownTime && (
                                <Countdown
                                  initialSeconds={countdownTime}
                                  onTimeUp={() => {
                                    // console.log('Countdown finished');
                                  }}
                                />
                              )}
                              <Button
                                variant={selectedPackage === pkg.id ? 'contained' : 'outlined'}
                                color="warning"
                                sx={{
                                  display: { xs: 'none', md: 'block' },
                                  width: '123.86px',
                                  backgroundImage:
                                    selectedPackage === pkg.id
                                      ? 'linear-gradient(45deg, #ff6f61, #ff9a76)'
                                      : 'none',
                                  borderColor:
                                    selectedPackage === pkg.id ? 'transparent' : '#FFD60A',
                                }}
                              >
                                {selectedPackage === pkg.id ? 'Đã chọn' : 'Chọn Mua'}
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
            {/* Tổng cộng */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Giá trị đơn hàng
              </Typography>
              <Typography variant="h6" display={'flex'} alignItems={'center'} gap="3px">
                {(total + (pointsEarned === null ? 0 : pointsEarned)).toLocaleString('vn-VN')}{' '}
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
                -{discountProduct.toLocaleString('vn-VN')}{' '}
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
                variant="h4"
                color="main"
                display={'flex'}
                alignItems={'center'}
                gap="3px"
              >
                {(
                  total -
                  discountProduct +
                  (pointsEarned === null ? 0 : pointsEarned)
                ).toLocaleString('vn-VN')}
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

export default FlashSaleInDetailProduct;
