import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';
import TableBuyPoint from 'src/components/apps/buyPoint/TableBuyPoint';
import PageContainer from 'src/components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  {
    to: '/',
    title: 'Trang Chủ',
  },
  { to: '/buy/point', title: 'Đổi R-Point' },
];

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const BuyPoint = () => {
  const theme = useTheme();

  return (
    <PageContainer title="Quy đổi R-Point" description="Buy Point Here">
      <BannerPage title="Quy Đổi R-Point  " items={BCrumb} />

      <ChildCard sx={{ boxShadow: ' 0px  4px 6px rgba(0, 0, 0, 0.055)' }}>
        <Grid container spacing={{ xs: 1 }}>
          <Grid item lg={10} md={10} sm={9} xs={12} sx={{}}>
            <Box
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#404759' : '#FEF3F4',
                padding: 0.3,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  animation: `${marqueeAnimation} 20s linear infinite`,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#FD6A76' : '#FC2032',
                    fontWeight: 400,
                    fontSize: 16,
                  }}
                >
                  [Quà tặng] Tặng 01 bộ chiến lược AIDA Sales Formula dành cho trợ lý bán hàng - áp
                  dụng từ ngày 01/10-31/12/2024 cho tất các khách hàng lần đầu tiên nạp Point
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            sm={3}
            md={2}
            xs={12}
            sx={{ display: 'flex', justifyContent: { xs: 'flex-end' }, pt: { xs: '20px' } }}
          >
            <Link
              to={'/history/buy-point'}
              style={{
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              <Button color="secondary">Lịch sử đổi Point</Button>
            </Link>
          </Grid>
        </Grid>
        <TableBuyPoint />
      </ChildCard>
    </PageContainer>
  );
};
export default BuyPoint;
