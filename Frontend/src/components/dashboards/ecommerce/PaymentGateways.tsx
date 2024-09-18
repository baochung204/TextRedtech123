// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Box, Button } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';

import icon1Img from 'src/assets/images/svgs/icon-paypal.svg';
import icon2Img from 'src/assets/images/svgs/icon-office-bag.svg';
import icon3Img from 'src/assets/images/svgs/icon-master-card.svg';
import icon4Img from 'src/assets/images/svgs/icon-pie.svg';
import icon5Img from 'src/assets/images/svgs/icon-account.svg';

interface statType {
  title: string;
  level: number;
  price: number;
  color: string;
  lightcolor: string;
  icon: string;
}

const PaymentGateways: React.FC = () => {
  // Màu sắc biểu đồ
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const warning = theme.palette.warning.main;
  const warninglight = theme.palette.warning.light;
  const secondary = theme.palette.success.main;
  const secondarylight = theme.palette.success.light;

  const stats: statType[] = [
    {
      title: 'Trợ lý 5',
      level: 9,
      price: 78.3,
      color: primary,
      lightcolor: primarylight,
      icon: icon1Img,
    },
    {
      title: 'Trợ lý 2',
      level: 2,
      price: 73,
      color: secondary,
      lightcolor: secondarylight,
      icon: icon2Img,
    },
    {
      title: 'Credit Card',
      level: 1,
      price: 43.5,
      color: warning,
      lightcolor: warninglight,
      icon: icon3Img,
    },
    {
      title: 'Refund',
      level: 6,
      price: 39,
      color: error,
      lightcolor: errorlight,
      icon: icon4Img,
    },
    {
      title: 'Trợ lý 4.0',
      level: 2,
      price: 32.1,
      color: error,
      lightcolor: errorlight,
      icon: icon5Img,
    },
  ];

  return (
    <DashboardCard title="Hiệu suất làm việc tốt nhất " subtitle="Top trợ lý có">
      <Box>
        <Stack spacing={3} mt={'26px'}>
          {stats.map((stat, i) => (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              key={i}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  variant="rounded"
                  sx={{ bgcolor: stat.lightcolor, color: stat.color, width: 40, height: 40 }}
                >
                  <Avatar src={stat.icon} alt={stat.icon} sx={{ width: 24, height: 24 }} />
                </Avatar>
                <Box>
                  <Typography variant="h6" mb="4px">
                    {stat.title}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Level {stat.level}
                  </Typography>
                </Box>
              </Stack>
              {stat.price < 400 ? (
                <Typography variant="subtitle2" color="textSecondary" fontWeight="600">
                  {stat.price}%
                </Typography>
              ) : (
                <Typography variant="subtitle2" fontWeight="600">
                  {stat.price}%
                </Typography>
              )}
            </Stack>
          ))}
          <Button
            variant="outlined"
            color="primary"
            sx={{ mt: '40px !important' }}
            onClick={() => {
              window.location.href = '/assistant/list';
            }}
          >
            Xem tất cả trợ lý
          </Button>
        </Stack>
      </Box>
    </DashboardCard>
  );
};

export default PaymentGateways;
