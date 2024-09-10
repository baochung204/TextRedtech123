// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Chart from 'react-apexcharts';
import icon1 from 'src/assets/images/svgs/icon-bars.svg';
import icon1Img from 'src/assets/images/svgs/icon-master-card-2.svg';
import rank9 from 'src/assets/images/rank/rank9.png';
import avt9 from 'src/assets/images/profile/user-9.jpg';

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
} from '@mui/material';
import { Props } from 'react-apexcharts';
import BlankCard from 'src/components/shared/BlankCard';
import { styled } from '@mui/system';
import bot from 'src/assets/images/backgrounds/bot.svg';
import DashboardCard from 'src/components/shared/DashboardCard';
import { IconArrowUpLeft, IconArrowUpRight } from '@tabler/icons-react';

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
  padding: '30px',
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
  const secondary = theme.palette.secondary.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';
  const successlight = theme.palette.success.light;
  const primarylight = theme.palette.primary.light;

  const optionscolumn3chart: Props = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",

      toolbar: {
        show: false,
      },
      height: 220,
    },
    labels: ['Dung lương còn lại', 'Dung lương đã dùng'],
    colors: [primary, secondary],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '89%',
          background: 'transparent',

          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: textColor,
              fontSize: '20px',
              fontWeight: '600',
              label: '950 MB',
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const optionscolumnchart: Props = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 90,
      width: '100%',
      stacked: true,
      stackType: '100%',
      sparkline: {
        enabled: true,
      },
    },
    colors: [primary, secondary, '#EAEFF4'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: [3],
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'around',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 1,
      colors: ['rgba(0,0,0,0.01)'],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
      x: {
        show: false,
      },
    },
    responsive: [{ breakpoint: 1025, options: { chart: { height: 150, width: 250 } } }],
  };
  const seriescolumnchart = [
    {
      color: primary,
      name: '',
      data: [25, 35, 20, 25, 40, 25],
    },
    {
      color: secondary,
      name: '',
      data: [35, 40, 20, 35, 40, 35],
    },
    {
      color: '#EAEFF4',
      name: '',
      data: [40, 25, 60, 40, 20, 40],
    },
  ];
  const seriescolumn3chart = [650, 950];

  const optionscolumnchartSale: Props = {
    chart: {
      type: 'area',
      height: 25,
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    colors: [secondary],
    stroke: {
      curve: 'straight',
      width: 2,
    },
    fill: {
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
    },
  };
  const seriescolumnchartSale = [
    {
      name: '',
      data: [0, 10, 10, 10, 35, 45, 30, 30, 30, 50, 52, 30, 25, 45, 50, 80, 60, 65],
    },
  ];
  const optionscolumnchartTotal: Props = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 70,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [primarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      x: {
        show: false,
      },
    },
  };
  const seriescolumnchartTotal = [
    {
      name: '',
      color: primary,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];
  return (
    <Grid container spacing={3} mt={2}>
      {/* 1 */}
      <Grid item xs={12} sm={4}>
        <BoxStyled>
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',

              width: '100%',
              height: '100%',
              px: 2,
              py: 1,
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
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                overflow: 'hidden',
                width: { xs: '41%', sm: '40%', md: '40%', lg: '42%' },
                height: { xs: '41%', sm: '40%', md: '40%', lg: '42%' },
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
          <Box sx={{ textAlign: 'center', mt: { sm: 1, md: 2 } }}>
            <Typography
              variant="h6"
              mb={1}
              sx={{ fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '20px' } }}
            >
              {inforBot.name}
            </Typography>
            <Chip label={inforBot.model} color="warning" sx={{ my: 1 }} />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Grid item>
              <Typography variant="h6" sx={{ display: 'flex', gap: 1 }}>
                Ngày tạo :{' '}
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  {inforBot.date}
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ display: 'flex', gap: 1 }}>
                Tuổi :{' '}
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  18
                </Typography>
              </Typography>
            </Grid>
          </Box>

          <Paper
            sx={{
              overflow: 'hidden',
              zIndex: '1',
              position: 'relative',
              mt: { xs: 1, sm: 2 },
            }}
          >
            <Box sx={{ p: { xs: 2, sm: 2, md: 1.7, lg: 2 } }}>
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
                    <LinearProgress value={sell.percent} variant="determinate" color="primary" />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Paper>
        </BoxStyled>
      </Grid>
      {/* 2 */}
      <Grid item xs={12} sm={4}>
        <Grid container rowSpacing={3}>
          <Grid item sm={12}>
            <BlankCard>
              <CardContent sx={{ p: '30px' }}>
                <Box>
                  <Chart
                    options={optionscolumn3chart}
                    series={seriescolumn3chart}
                    type="donut"
                    height="220px"
                  />
                </Box>
                <Box mt={4}>
                  <Typography variant="h6" fontWeight={400} mb={1}>
                    Dung lượng
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Typography variant="h4">1500 MB</Typography>
                    {/* <Typography variant="subtitle1" color="success.main">
                  +2.5%
                </Typography> */}
                  </Stack>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          <Grid item sm={12}>
            <DashboardCard
              title="Doanh thu trung bình"
              footer={
                <Chart
                  options={optionscolumnchartTotal}
                  series={seriescolumnchartTotal}
                  type="area"
                  height="85px"
                />
              }
            >
              <>
                <Stack direction="row" spacing={1} alignItems="center" mb={3}>
                  <Typography variant="h3" fontWeight="700">
                    $6,820
                  </Typography>
                  <Stack direction="row" spacing={1} mt={1} mb={2} alignItems="center">
                    <Avatar sx={{ bgcolor: successlight, width: 20, height: 20 }}>
                      <IconArrowUpLeft width={18} color="#13DEB9" />
                    </Avatar>
                    <Typography variant="subtitle2" color="textSecondary">
                      +9%
                    </Typography>
                  </Stack>
                </Stack>
              </>
            </DashboardCard>
          </Grid>
        </Grid>
      </Grid>
      {/* 3 */}
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {/* <Expence /> */}
            <DashboardCard>
              <>
                <Typography variant="h4">20tr VNĐ</Typography>
                <Typography variant="subtitle2" color="textSecondary" mb={3}>
                  Doanh Thu Hôm Nay
                </Typography>
                <Box className="rounded-bars">
                  <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="bar"
                    height="83px"
                  />
                </Box>
              </>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DashboardCard>
              <>
                <Box
                  width={38}
                  height={38}
                  bgcolor="secondary.light"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar src={icon1} alt="img" sx={{ width: 25, height: 25 }} />
                </Box>

                <Box mt={3} mb={2}>
                  <Chart
                    options={optionscolumnchartSale}
                    series={seriescolumnchartSale}
                    type="area"
                    height="25px"
                  />
                </Box>

                <Typography variant="h4">
                  24%
                  <span>
                    <IconArrowUpRight width={18} color="#39B69A" />
                  </span>
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Sale
                </Typography>
              </>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DashboardCard>
              <>
                <Box
                  width={38}
                  height={38}
                  bgcolor="secondary.light"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar src={icon1} alt="img" sx={{ width: 25, height: 25 }} />
                </Box>

                <Box mt={3} mb={2}>
                  <Chart
                    options={optionscolumnchartSale}
                    series={seriescolumnchartSale}
                    type="area"
                    height="25px"
                  />
                </Box>

                <Typography variant="h4">
                  24%
                  <span>
                    <IconArrowUpRight width={18} color="#39B69A" />
                  </span>
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Sale
                </Typography>
              </>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DashboardCard>
              <>
                <Box
                  width={38}
                  height={38}
                  bgcolor="secondary.light"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar src={icon1} alt="img" sx={{ width: 25, height: 25 }} />
                </Box>

                <Box mt={3} mb={2}>
                  <Chart
                    options={optionscolumnchartSale}
                    series={seriescolumnchartSale}
                    type="area"
                    height="25px"
                  />
                </Box>

                <Typography variant="h4">
                  24%
                  <span>
                    <IconArrowUpRight width={18} color="#39B69A" />
                  </span>
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Sale
                </Typography>
              </>
            </DashboardCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AssistantInfor;
