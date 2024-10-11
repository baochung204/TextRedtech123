// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import avt1 from 'src/assets/images/profile/user-1.jpg';
import avt2 from 'src/assets/images/profile/user-2.jpg';
import avt3 from 'src/assets/images/profile/user-3.jpg';
import avt4 from 'src/assets/images/profile/user-4.jpg';
import avt5 from 'src/assets/images/profile/user-5.jpg';
import DashboardCard from '../../shared/DashboardCard';

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
      icon: avt1,
    },
    {
      title: 'Trợ lý 2',
      level: 2,
      price: 73,
      color: secondary,
      lightcolor: secondarylight,
      icon: avt2,
    },
    {
      title: 'Trợ lý 3',
      level: 1,
      price: 43.5,
      color: warning,
      lightcolor: warninglight,
      icon: avt3,
    },
    {
      title: 'Trợ lý 4',
      level: 6,
      price: 39,
      color: error,
      lightcolor: errorlight,
      icon: avt4,
    },
    {
      title: 'Trợ lý 5',
      level: 2,
      price: 32.1,
      color: error,
      lightcolor: errorlight,
      icon: avt5,
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
                  sx={{
                    bgcolor: stat.lightcolor,
                    color: stat.color,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                  }}
                  src={stat.icon}
                  alt={stat.icon}
                ></Avatar>
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
