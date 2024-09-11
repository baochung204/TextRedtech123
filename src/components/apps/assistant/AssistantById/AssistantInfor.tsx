// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import rank9 from 'src/assets/images/rank/rank9.png';
import avt9 from 'src/assets/images/profile/user-9.jpg';
import Chart from 'react-apexcharts';

import { useTheme } from '@mui/material/styles';
import {
  Box,
  CardContent,
  Grid,
  Typography,
  Stack,
  Chip,
  Paper,
  LinearProgress,
  Avatar,
  Card,
  Divider,
  Tooltip,
} from '@mui/material';
import { Props } from 'react-apexcharts';
import { styled } from '@mui/system';
import bot from 'src/assets/images/backgrounds/bot.svg';
import { IconArrowUpRight, IconGridDots } from '@tabler/icons-react';
import PageContainer from 'src/components/container/PageContainer';
import welcomeImg from 'src/assets/images/backgrounds/welcome-bg.svg';
import userImg from 'src/assets/images/profile/user-1.jpg';
import icon2 from 'src/assets/images/svgs/icon-user-male.svg';
import icon3 from 'src/assets/images/svgs/icon-briefcase.svg';
import icon4 from 'src/assets/images/svgs/icon-mailbox.svg';
import icon5 from 'src/assets/images/svgs/icon-favorites.svg';
import ParentCard from 'src/components/shared/ParentCard';
import DashboardCard from 'src/components/shared/DashboardCard';
import pck3 from 'src/assets/images/backgrounds/gold.png';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

interface cardType {
  icon: string;
  title: string;
  digits: string;
  bgcolor: string;
}

const topcards: cardType[] = [
  {
    icon: icon2,
    title: 'Khách hàng',
    digits: '2,696',
    bgcolor: 'primary',
  },
  {
    icon: icon3,
    title: 'Đơn hàng',
    digits: '650',
    bgcolor: 'warning',
  },
  {
    icon: icon4,
    title: 'GMV',
    digits: '112M',
    bgcolor: 'secondary',
  },
  {
    icon: icon5,
    title: 'AOV',
    digits: '251K',
    bgcolor: 'error',
  },
  {
    icon: icon5,
    title: 'AOV',
    digits: '251K',
    bgcolor: 'error',
  },
  {
    icon: icon5,
    title: 'AOV',
    digits: '251K',
    bgcolor: 'error',
  },
];

interface sellsData {
  product: string;
  percent: number;
  color: string;
}
const sells: sellsData[] = [
  {
    product: 'Kinh nghiệm',
    percent: 90,
    color: 'secondary',
  },
];
const BoxStyled = styled(Box)(() => ({
  padding: '22px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.03)',
  },
  boxShadow: ' 0px  4px 6px rgba(0, 0, 0, 0.055)',
  border: '1px solid #EFEFEF',
}));
interface IInforBot {
  name: string;
  date: string;
  model: string;
  avatar: string;
}
const inforBot: IInforBot = {
  name: 'Chat Bot Message Of Facebook',
  date: '18/8/2024',
  model: 'GPT-4',
  avatar: bot,
};
const AssistantInfor = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;

  // 1
  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: [primary, primarylight, secondary, secondarylight, warning],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Facebook', 'Tiktok', 'Email', 'Zalo', 'Instagram'],
  };

  const seriespiechart = [45, 65, 27, 18, 35];

  return (
    <PageContainer title="eCommerce Dashboard" description="this is eCommerce Dashboard page">
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <Card
              elevation={0}
              sx={{ backgroundColor: (theme) => theme.palette.primary.light, py: 0 }}
            >
              <CardContent sx={{ py: 4, px: 2 }}>
                <Grid container justifyContent="space-between">
                  <Grid item sm={6} display="flex" alignItems="center">
                    <Box>
                      <Box
                        gap="16px"
                        mb={5}
                        sx={{
                          display: {
                            xs: 'block',
                            sm: 'flex',
                          },
                          alignItems: 'center',
                        }}
                      >
                        <Avatar src={userImg} alt="img" sx={{ width: 40, height: 40 }} />
                        <Typography variant="h5" whiteSpace="nowrap">
                          Chào mừng bạn đến với trang hồ sơ trợ lý !
                        </Typography>
                      </Box>

                      <Stack
                        spacing={2}
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                      >
                        <Box>
                          <Typography variant="h2" whiteSpace="nowrap">
                            35%
                            <span>
                              <IconArrowUpRight width={18} color="#39B69A" />
                            </span>
                          </Typography>
                          <Typography variant="subtitle1" whiteSpace="nowrap">
                            CRB
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item sm={6}>
                    <Box mb="-51px">
                      <img src={welcomeImg} alt={welcomeImg} width={'340px'} />
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid item xs={12}>
              <DashboardCard title="Chiến lược của trợ lý">
                <Box
                  sx={{
                    display: 'flex',
                    height: '100%',
                    mt: '-6px',
                  }}
                >
                  <Box
                    component="img"
                    src={pck3}
                    alt="Hoa hồng"
                    sx={{
                      maxWidth: '40%',
                      height: 'auto',
                    }}
                  />
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" fontWeight={500}>
                      Chiến lược Tích Hợp Dịch Vụ Bên Thứ Ba
                    </Typography>
                  </Box>
                </Box>
              </DashboardCard>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <BoxStyled sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '80%',
                  height: '80%',
                  px: 2,
                }}
              >
                <img
                  src={rank9}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    zIndex: 99,
                    position: 'relative',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '45.5%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: { xs: '41%', sm: '40%', md: '40%', lg: '41%' },
                    height: { xs: '41%', sm: '40%', md: '40%', lg: '41%' },
                  }}
                >
                  <img
                    src={avt9}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  mb={1}
                  sx={{ fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '18px' }, mt: 3 }}
                >
                  {inforBot.name}
                </Typography>
                <Tooltip title="Model" placement="top">
                  <Chip label={inforBot.model} color="warning" sx={{ my: 1 }} />
                </Tooltip>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',

                  mt: 1.5,
                }}
              >
                <Grid item>
                  <Typography variant="h6" sx={{ display: 'flex', gap: 1 }}>
                    Token huấn luyện :
                    <Typography color="textSecondary" variant="h6" fontWeight="400">
                      1.604.142
                    </Typography>
                  </Typography>
                </Grid>
              </Box>
              <Paper
                sx={{
                  overflow: 'hidden',
                  zIndex: '1',
                  position: 'relative',
                  mt: { xs: 1, sm: 3 },
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2, sm: 2, md: 1.7, lg: 2 },
                    boxShadow: ' 0px  4px 6px rgba(0, 0, 0, 0.055)',
                  }}
                >
                  <Stack spacing={3}>
                    {sells.map((sell: any) => (
                      <Box>
                        <Stack
                          direction="row"
                          mb={2}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box>
                            <Typography variant="h6">Kinh nghiệm</Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                              {sell.total}
                            </Typography>
                          </Box>
                          <Chip
                            sx={{
                              backgroundColor: 'primary',
                              color: 'primary',
                              borderRadius: '4px',
                              width: 55,
                              height: 24,
                            }}
                            label={sell.percent + '%'}
                          />
                        </Stack>
                        <LinearProgress
                          value={sell.percent}
                          variant="determinate"
                          color="primary"
                        />
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Paper>
            </BoxStyled>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <DashboardCard title="Thông tin trợ lý">
              <Grid container spacing={1.8}>
                {[
                  { label: 'Ngày sinh', value: '11/08/2024' },
                  { label: 'Giới tính', value: 'Nữ' },
                  { label: 'Vị trí nghề nghiệp', value: 'Quản lý' },
                  { label: 'Trình độ học vấn', value: 'Đại học' },
                  { label: 'Tính cách', value: 'Hướng nội' },
                  { label: 'Quốc gia', value: 'Việt Nam' },
                  { label: 'Ngôn ngữ', value: 'Tiếng Việt' },
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={12} sm={5} display="flex" alignItems="center">
                      <CustomFormLabel
                        htmlFor={`field-${index}`}
                        sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}
                      >
                        {item.label}
                      </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Typography>{item.value}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </DashboardCard>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              {topcards.map((topcard, i) => (
                <Grid item xs={12} sm={4} lg={6} key={i}>
                  <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
                    <CardContent sx={{}}>
                      <img src={topcard.icon} alt={topcard.icon} width="50" />
                      <Typography
                        color={topcard.bgcolor + '.main'}
                        mt={1}
                        variant="subtitle1"
                        fontWeight={600}
                      >
                        {topcard.title}
                      </Typography>
                      <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={600}>
                        {topcard.digits}
                        {topcard.title == 'AOV'
                          ? 'k'
                          : topcard.title == 'GMV'
                          ? 'M'
                          : topcard.title == 'CVR'
                          ? '%'
                          : ''}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} sm={6} lg={4}>
            <ParentCard title="Nguồn khách hàng " description="">
              <Chart
                options={optionsdoughnutchart}
                series={seriespiechart}
                type="donut"
                height="300px"
              />
            </ParentCard>
          </Grid>
          {/* column */}
          {/* <Grid item xs={12} lg={4}>
            <YearlySales />
          </Grid> */}
          {/* column */}
          {/* <Grid item xs={12} lg={4}>
            <PaymentGateways />
          </Grid> */}
          {/* column */}

          {/* <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid> */}
          {/* column */}

          {/* <Grid item xs={12} lg={8}>
            <ProductPerformances />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default AssistantInfor;
