// import { Box } from '@mui/material';
// import React from 'react';
import { Accordion, Box, Grid, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'src/store/Store';
// import Countdown from 'src/components/countdown/countdown';

const ContentBuyPoint = () => {
  return (
    <Box>
      <Box sx={{ py: 3, px: { xs: 3, md: 20 }, mb: 10 }}>
        <Box>
          <Box display={'flex'} alignItems="center" justifyContent={'center'} marginBottom={5}>
            <Typography variant="h3">Chi tiết nạp R-Point</Typography>
          </Box>
          <Box>
            <Grid container sx={{ mt: 2 }} justifyContent="space-between">
              <Grid item lg={4} xs={12}>
                <Typography variant="body1" color="text.secondary">
                  Họ Và Tên
                </Typography>
                <Typography variant="subtitle1" mb={0.5} fontWeight={600}>
                  Nguyễn Văn Bình
                </Typography>
              </Grid>

              {/* Email Section */}
              <Grid item lg={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                  <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'left' }}>
                    Email
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    mb={0.5}
                    sx={{ textAlign: 'center' }}
                  >
                    binhvn.reman@gmail.com
                  </Typography>
                </Box>
              </Grid>

              {/* Số Điện Thoại Section */}
              <Grid item lg={4} xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box>
                  <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'right' }}>
                    Số Điện Thoại
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    mb={0.5}
                    sx={{ textAlign: 'right' }}
                  >
                    0123456789
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box display={'flex'} alignItems="center">
            <Typography variant="h4">Đơn hàng</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                Gói
              </Typography>
              <Typography>Tiêu chuẩn - Tháng (300.000 ký tự)</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                Giá gói
              </Typography>
              <Typography>1,055,000 đ</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Accordion
            sx={{
              mt: 2,
              border: 'none',
              boxShadow: 'none',
            }}
          >
            <Box
              sx={{
                fontSize: 15,
                px: 0,
                border: 'none',
                boxShadow: 'none',
                display: 'flex',

                justifyContent: 'space-between',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: 17, fontWeight: 500 }}>
                Mã khuyến mãi
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 17, fontWeight: 500 }}>
                KM025K2J - Giảm 15%{' '}
              </Typography>
            </Box>
          </Accordion>
        </Box>
        <Box>
          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                my: 2,
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '15px',
              }}
            >
              <Typography variant="h6" fontWeight={600} sx={{ display: 'flex' }}>
                Giá gốc :
              </Typography>
              <Typography variant="h6" sx={{ paddingX: '3px' }}>
                2,078,900 đ
              </Typography>
            </Box>
            <Box
              sx={{
                my: 2,
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '14px',
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Tiết kiệm :{' '}
              </Typography>
              <Typography variant="subtitle1" fontWeight={600} sx={{ paddingX: '3px' }}>
                - 531,030 đ
              </Typography>
            </Box>
            <Box
              sx={{
                my: 2,
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '15px',
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Tổng tiền trước VAT :{' '}
              </Typography>
              <Typography variant="subtitle1" fontWeight={600} sx={{ paddingX: '3px' }}>
                1,547,870 đ
              </Typography>
            </Box>
            <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" fontWeight={600}>
                VAT (10%) :{' '}
              </Typography>
              <Typography variant="subtitle1" fontWeight={600} sx={{ paddingX: '3px' }}>
                154,787 đ
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h4">Tổng cộng </Typography>
            <Typography variant="h4" fontWeight={'bold'}>
              1,702,657 đ
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentBuyPoint;
