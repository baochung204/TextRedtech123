import {
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import ChildCard from '../../../shared/ChildCard';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import Countdown from 'src/components/countdown/countdown';

interface Props {
  total: number;
  Discount: number;
}
const packages = [
  {
    id: 5,
    img: 'http://localhost:5173/src/assets/images/products/s11.jpg',
    title: 'Chatbot marketing',
    price: 115,
    discount: 100,
    sale: 80,
    timeFlash: 180,
  },
  {
    id: 6,
    img: 'http://localhost:5173/src/assets/images/products/s10.jpg',
    title: 'Chatbot hỗ trợ khách hàng',
    price: 210,
    discount: 199,
    sale: 80,
    timeFlash: 180,
  },
  {
    id: 7,
    img: 'http://localhost:5173/src/assets/images/products/s12.jpg',
    title: 'Chatbot thương mại điện tử',
    price: 520,
    discount: 399,
    sale: 80,
    timeFlash: 180,
  },
];
const FirstStep = ({ total, Discount }: Props) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
  };
  return (
    <>
      <Box my={3}>
        <ChildCard>
          <Box p={2}>
            <Typography variant="h5" fontWeight={600} mb={3}>
              Đơn hàng
            </Typography>
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

                              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                {' '}
                                <Typography
                                  sx={{
                                    fontWeight: 'bold',
                                    mb: 1,

                                    fontSize: '14px',
                                  }}
                                >
                                  {pkg.discount.toLocaleString()} point
                                </Typography>
                                <Typography sx={{ color: '#888', mb: 1 }}>
                                  <del> {pkg.price.toLocaleString()} point</del>
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
                            <Countdown initialSeconds={pkg.timeFlash} />
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
                                borderColor: selectedPackage === pkg.id ? 'transparent' : '#FFD60A',
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
              <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">Tổng giá Flash-sale : </Typography>
                <Typography variant="h5" sx={{ paddingX: '3px' }}>
                  1.023.900point
                </Typography>
              </Box>{' '}
            </Accordion>
            {/* Tổng cộng */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Giá trị đơn hàng
              </Typography>
              <Typography variant="h6">{total.toLocaleString('vn-VN')} point</Typography>
            </Stack>
            {/* Giảm giá */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Khuyến mãi
              </Typography>
              <Typography variant="h6" color="error">
                -{Discount.toLocaleString('vn-VN')} point
              </Typography>
            </Stack>
            {/* Vận chuyển */}

            {/* Tổng cộng */}
            <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography variant="h6">Tổng thanh toán</Typography>
              <Typography variant="h5" color="success">
                {(total - Discount).toLocaleString('vn-VN')} point
              </Typography>
            </Stack>
          </Box>
        </ChildCard>
      </Box>
    </>
  );
};

export default FirstStep;
