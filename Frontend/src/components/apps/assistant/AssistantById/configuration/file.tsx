// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Avatar, Box, Button, Stack, Typography, useTheme } from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';
import icon3Img from 'src/assets/images/svgs/icon-master-card.svg';
import icon2Img from 'src/assets/images/svgs/icon-office-bag.svg';
import icon1Img from 'src/assets/images/svgs/icon-paypal.svg';
import icon4Img from 'src/assets/images/svgs/icon-pie.svg';
import icon5Img from 'src/assets/images/svgs/icon-account.svg';

const File = () => {
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

  const stats2: statType[] = [
    {
      title: 'San-pham-092004.xlsx',
      level: 23.5,
      color: primary,
      lightcolor: primarylight,
      icon: icon1Img,
    },
    {
      title: 'Ky-nang-sales.pdf',
      level: 24.5,
      color: secondary,
      lightcolor: secondarylight,
      icon: icon2Img,
    },
    {
      title: 'FAQ.docx',
      level: 25.5,
      color: warning,
      lightcolor: warninglight,
      icon: icon3Img,
    },
    {
      title: 'infor-company.docx',
      level: 26.5,
      color: error,
      lightcolor: errorlight,
      icon: icon4Img,
    },
    {
      title: 'Ky-nang-2-sales.pdf',
      level: 27.5,
      color: error,
      lightcolor: errorlight,
      icon: icon5Img,
    },
  ];
  return (
    <DashboardCard title="File " subtitle="File được trang bị cho trợ lý">
      <Box>
        <Stack spacing={3} mt={'26px'}>
          {stats2.map((stat, i) => (
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
                >
                  <Avatar src={stat.icon} alt={stat.icon} sx={{ width: 24, height: 24 }} />
                </Avatar>
                <Box>
                  <Typography variant="h6" mb="4px">
                    {stat.title}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {stat.level} MB
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          ))}
          <Button variant="outlined" color="primary" sx={{ mt: '40px !important' }}>
            Xem toàn bộ
          </Button>
        </Stack>
      </Box>
    </DashboardCard>
  );
};

export default File;