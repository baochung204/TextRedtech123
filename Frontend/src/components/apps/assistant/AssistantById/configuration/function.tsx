import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';
import icon3Img from 'src/assets/ListFunction/f6.png';
import icon2Img from 'src/assets/ListFunction/f2.png';
import icon1Img from 'src/assets/ListFunction/f1.png';
import icon4Img from 'src/assets/ListFunction/f4.png';
import icon5Img from 'src/assets/ListFunction/f5.png';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Function = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const warninglight = theme.palette.warning.light;

  interface statType {
    title: string;
    level: number;
    color: string;
    lightcolor: string;
    icon: string;
  }

  const stats: statType[] = [
    {
      title: 'Function A',
      level: 23.5,
      color: primary,
      lightcolor: primarylight,
      icon: icon1Img,
    },
    {
      title: 'Function B',
      level: 24.5,
      color: secondary,
      lightcolor: secondarylight,
      icon: icon2Img,
    },
    {
      title: 'Function C',
      level: 25.5,
      color: warning,
      lightcolor: warninglight,
      icon: icon3Img,
    },
    {
      title: 'Function D',
      level: 26.5,
      color: error,
      lightcolor: errorlight,
      icon: icon4Img,
    },
    {
      title: 'Function E',
      level: 27.5,
      color: error,
      lightcolor: errorlight,
      icon: icon5Img,
    },
    {
      title: 'Function F',
      level: 27.5,
      color: error,
      lightcolor: errorlight,
      icon: icon4Img,
    },
    {
      title: 'Function T',
      level: 27.5,
      color: error,
      lightcolor: errorlight,
      icon: icon1Img,
    },
  ];

  return (
    <DashboardCard title="Function " subtitle="Function được trang bị cho trợ lý">
      {/* Bọc nội dung trong SimpleBar để thêm thanh cuộn */}
      <SimpleBar style={{ maxHeight: '410px', overflowX: 'hidden' }}>
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
                    }}
                    src={stat.icon}
                    alt={stat.icon}
                  ></Avatar>
                  <Box>
                    <Typography variant="h6" mb="4px">
                      {stat.title}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Box>
      </SimpleBar>
    </DashboardCard>
  );
};

export default Function;
