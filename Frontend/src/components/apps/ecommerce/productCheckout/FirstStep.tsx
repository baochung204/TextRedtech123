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
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import products2 from 'src/assets/images/products/s24.jpg';
import products from 'src/assets/images/products/s25.jpg';
import Countdown from 'src/components/countdown/countdown';
import ChildCard from '../../../shared/ChildCard';
interface Props {
  total: number;
  Discount: number;
}
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
const FirstStep = ({ total, Discount }: Props) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  // const theme = useTheme();
  const [pointsEarned, setPointsEarned] = useState(0);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackage2, setSelectedPackage2] = useState(true);
  const handleSelectPackage = (pkg: any) => {
    if (selectedPackage === pkg.id) {
      // Nếu gói đã được chọn trước đó, thiết lập lại selectedPackage và điểm
      setSelectedPackage(null);
      setPointsEarned(0); // Không cộng điểm
    } else {
      // Nếu chọn gói mới, thiết lập selectedPackage và cộng điểm
      setSelectedPackage(pkg.id);
      setPointsEarned(pkg.point); // Cộng điểm
    }
  };
  const handleSelectPackage2 = () => {
    setSelectedPackage2(false);
    setPointsEarned(0);
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
                              {lgUp ? (
                                <Countdown
                                  initialSeconds={pkg.timeFlash}
                                  onTimeUp={() => {
                                    // Thực hiện hành động khi hết thời gian, ví dụ:
                                    handleSelectPackage2(); // Ví dụ: tự động chọn gói khi hết giờ
                                  }}
                                />
                              ) : null}
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
                {/* <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">Tổng giá Flash-sale : </Typography>
                <Typography variant="h5" sx={{ paddingX: '3px' }}>
                  1.023.900point
                </Typography>
              </Box>{' '} */}
              </Accordion>
            )}
            {/* Tổng cộng */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Giá trị đơn hàng
              </Typography>
              <Typography variant="h6" display={'flex'} alignItems={'center'}>
                {(total + pointsEarned).toLocaleString('vn-VN')}{' '}
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
              <Typography variant="h6" color="error" display={'flex'} alignItems={'center'}>
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
              <Typography variant="h5" color="success" display={'flex'} alignItems={'center'}>
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
      </Box>
    </>
  );
};

export default FirstStep;
