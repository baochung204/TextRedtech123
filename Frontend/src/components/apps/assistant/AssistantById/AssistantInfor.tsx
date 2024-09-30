// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import Chart from 'react-apexcharts';
import avt9 from 'src/assets/images/profile/user-9.jpg';
import rank8 from 'src/assets/images/rank/rank8.png';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  MenuItem,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Props } from 'react-apexcharts';
import bot from 'src/assets/images/backgrounds/bot.svg';
import welcomeImg from 'src/assets/images/backgrounds/welcome-bg.svg';
import userImg from 'src/assets/images/profile/user-1.jpg';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from 'src/components/shared/DashboardCard';

import SavingsImg from 'src/assets/images/backgrounds/piggy.png';
import icon5Img from 'src/assets/images/svgs/icon-account.svg';
import icon3 from 'src/assets/images/svgs/icon-briefcase.svg';
// import icon1 from 'src/assets/images/svgs/icon-connect.svg';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Dayjs } from 'dayjs';
import badge from 'src/assets/images/badge/badge2.png';
import iconExpense from 'src/assets/images/icon.png/expense.png';
import iconRotation from 'src/assets/images/icon.png/rotation.png';
import icon5 from 'src/assets/images/svgs/icon-favorites.svg';
import icon4 from 'src/assets/images/svgs/icon-mailbox.svg';
import icon3Img from 'src/assets/images/svgs/icon-master-card.svg';
import icon2Img from 'src/assets/images/svgs/icon-office-bag.svg';
import icon1Img from 'src/assets/images/svgs/icon-paypal.svg';
import icon4Img from 'src/assets/images/svgs/icon-pie.svg';
import icon2 from 'src/assets/images/svgs/icon-user-male.svg';
// import bannercl from 'src/assets/images/banner/banner_assistant.png';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Affilatec2 from 'src/components/shared/Affilatec2';
import Affilatec3 from 'src/components/shared/Affilatec3';
import Modarm from 'src/components/shared/moderm';
import Affilatec1 from 'src/components/shared/Affilatec1';
import Affilatec from 'src/components/shared/Affilatec';

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
    icon: iconRotation,
    title: 'Tổng Vòng Quay',
    digits: '251K',
    bgcolor: 'success',
  },
  {
    icon: iconExpense,
    title: 'Chi Phí',
    digits: '251K',
    bgcolor: 'info',
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
interface sellssData {
  product: string;
  parameter: number;
  percent: number;
  color: string;
}

const sellss: sellssData[] = [
  {
    product: 'File',
    parameter: 14,
    percent: 75,
    color: 'primary',
  },
  {
    product: 'Dung lượng',
    parameter: 289,
    percent: 55,
    color: 'warning',
  },
  {
    product: 'Function',
    parameter: 57,
    percent: 20,
    color: 'secondary',
  },
];
interface statType {
  title: string;
  level: number;
  color: string;
  lightcolor: string;
  icon: string;
}

const AssistantInfor = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;
  const borderColor = theme.palette.divider;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const warninglight = theme.palette.warning.light;
  const success2 = '#1AC45F';
  const danger2 = '#FC2032';
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
  ];
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

  const seriesdoughnutchart = [55, 45];

  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#0000000',

      events: {
        mounted: (chart: any) => {
          chart.w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
          const maxValue = Math.max(...seriesdoughnutchart);
          const maxIndex = seriesdoughnutchart.indexOf(maxValue);
          optionsdoughnutchart.labels ? optionsdoughnutchart.labels[maxIndex] + '%' : '';

          // Custom label for center text
          chart.updateOptions({
            annotations: {
              position: 'front',
              text: {
                x: 0,
                y: 0,
                text: `${maxValue}%`,
                textAnchor: 'middle',
                dominantBaseline: 'middle',
                style: {
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#000000', // màu đen
                },
              },
            },
          });
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Tỉ lệ cao nhất',
              formatter: () => `${Math.max(...seriesdoughnutchart)}%`,
              fontWeight: 'bold',
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: ['#f45c43', '#fd1d1d'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#feb47b', '#ff7e5f'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Cá nhân', 'Doanh nghiệp'],
  };

  const optionsradialchart = {
    chart: {
      id: 'gauge-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,
        hollow: {
          margin: 15,
          size: '70%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: '24px',
            fontWeight: 'bold',
            formatter: (val: any) => val,
          },
        },
        track: {
          background: '#ccc',
          strokeWidth: '100%',
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        gradientToColors: [warning, '#FC2032'],
        stops: [0, 50, 100],
        colorStops: [
          {
            offset: 0,
            color: success2,
            opacity: 1,
          },
          {
            offset: 50,
            color: warning,
            opacity: 1,
          },
          {
            offset: 100,
            color: danger2,
            opacity: 1,
          },
        ],
      },
    },
    labels: [''],
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
  };

  const seriesradialchart = [93.27];

  const seriespiechart = [45, 65, 27, 18, 35];
  const monthsInVietnamese = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];
  const optionsgredientchart: Props = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)',
        top: 12,
        left: 4,
        blur: 3,
        opacity: 0.4,
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },

    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001',
      ],
      labels: {
        formatter: function (value: any) {
          const date = new Date(value);
          return monthsInVietnamese[date.getMonth()];
        },
      },
      tickAmount: 9,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#a8ff78'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: [primary],
      strokeColor: '#fff',
      strokeWidth: 2,

      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: 40,
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: false,
    },
  };
  const seriesgredientchart: any = [
    {
      name: 'Thích',
      data: [4, 3, 10, 9, 35, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];
  const optionsgredientchart2: Props = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)',
        top: 12,
        left: 4,
        blur: 3,
        opacity: 0.4,
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },

    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001',
      ],
      labels: {
        formatter: function (value: any) {
          const date = new Date(value);
          return monthsInVietnamese[date.getMonth()];
        },
      },
      tickAmount: 9,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#6dd5fa'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: ['#FFA41B'],
      strokeColor: '#fff',
      strokeWidth: 2,

      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: 40,
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: false,
    },
  };
  const seriesgredientchart2: any = [
    {
      name: 'Likes',
      data: [4, 5, 9, 10, 20, 13, 22, 9, 12, 7, 19, 8, 15, 21, 18, 20, 30, 34],
    },
  ];
  const seriesdoughnutchart3 = [35, 65];

  const optionsdoughnutchart3: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#000000',
      events: {
        mounted: (chart: any) => {
          chart.w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
          const maxValue = Math.max(...seriesdoughnutchart);
          const maxIndex = seriesdoughnutchart.indexOf(maxValue);
          optionsdoughnutchart.labels ? optionsdoughnutchart.labels[maxIndex] : '';

          // Custom label for center text
          chart.updateOptions({
            annotations: {
              position: 'front',
              text: {
                x: 0,
                y: 0,
                text: `${maxValue}%`,
                textAnchor: 'middle',
                dominantBaseline: 'middle',
                style: {
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#000000', // màu đen
                },
              },
            },
          });
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Tỉ lệ cao nhất',
              formatter: () => `${Math.max(...seriesdoughnutchart)}%`,
              fontWeight: 'bold',
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: ['#4cb8c4', '#3cd3ad'],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Chi phí', 'Doanh thu'],
  };
  const seriesdoughnutchart4 = [41, 59];

  const optionsdoughnutchart4: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#000000',
      events: {
        mounted: (chart: any) => {
          chart.w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
          const maxValue = Math.max(...seriesdoughnutchart);
          const maxIndex = seriesdoughnutchart.indexOf(maxValue);
          optionsdoughnutchart.labels ? optionsdoughnutchart.labels[maxIndex] : '';

          // Custom label for center text
          chart.updateOptions({
            annotations: {
              position: 'front',
              text: {
                x: 0,
                y: 0,
                text: `${maxValue}%`,
                textAnchor: 'middle',
                dominantBaseline: 'middle',
                style: {
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#000000', // màu đen
                },
              },
            },
          });
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Tỉ lệ cao nhất',
              formatter: () => `${Math.max(...seriesdoughnutchart)}%`,
              fontWeight: 'bold',
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: ['#fe8c00', '#f2c94c'],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Chi phí', 'Cuộc trò chuyện'],
  };

  const [month, setMonth] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  return (
    <PageContainer title="eCommerce Dashboard" description="this is eCommerce Dashboard page">
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Card
              elevation={0}
              sx={{ backgroundColor: (theme) => theme.palette.primary.light, py: 0 }}
            >
              <CardContent sx={{ py: 2, px: 2, m: 0 }}>
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
                        <Typography
                          variant="h5"
                          whiteSpace="nowrap"
                          sx={{ fontSize: { sm: 16, md: 18 } }}
                        >
                          Chào mừng bạn đến với trang hồ sơ trợ lý !
                        </Typography>
                      </Box>

                      <Stack
                        spacing={2}
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                      >
                        <Tooltip title="Tỉ lệ chuyển đổi" placement="top">
                          <Box>
                            <Typography variant="h2" whiteSpace="nowrap">
                              35%
                              <span>
                                <IconArrowUpRight width={18} color="#39B69A" />
                              </span>
                            </Typography>
                            <Typography variant="subtitle1" whiteSpace="nowrap">
                              CVR
                            </Typography>
                          </Box>
                        </Tooltip>
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
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box
              height="100%"
              bgcolor="error.light"
              sx={{
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  py: 2,
                  fontWeight: 600,
                  color: '#FA896B',
                  fontSize: { sm: 16, md: 18 },
                }}
              >
                Chiến lược của trợ lý
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box
                      sx={{
                        width: '100%',
                        maxWidth: '100px',
                        borderRadius: 1,
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={badge}
                        alt="Banner chiến lược"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={8}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center', // Center vertically
                        justifyContent: 'center', // Center horizontally
                        height: '100%',
                        textAlign: 'center', // Ensure the Box takes full height of the parent Grid item
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={500}
                        sx={{
                          lineHeight: 1.5,
                        }}
                      >
                        Chiến lược Tích Hợp Dịch Vụ Bên Thứ Ba
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          {/* column */}
          <Grid item xs={12} sm={5} md={5} lg={4}>
            <BoxStyled sx={{ textAlign: 'center' }}>
              {/* <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '80%',
                  height: '80%',
                  px: 2,
                }}
              >
                <img
                  src={rank8}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    zIndex: 99,
                    position: 'relative',
                  }}
                /> */}
              {/* <Box
                  sx={{
                    position: 'absolute',
                    top: '45.5%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: { xs: '41%', sm: '40%', md: '40%', lg: '100%' },
                    height: { xs: '41%', sm: '40%', md: '40%', lg: '41%' },
                  }}
                > */}
              {/* <img
                  src={avt9}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    top: '45.5%',
                    left: '50%',
                  }}
                /> */}
              {/* </Box> */}
              {/* </Box> */}
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
                  src={rank8}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',

                    position: 'relative',
                    zIndex: 99,
                  }}
                />

                <img
                  src={avt9}
                  alt=""
                  style={{
                    height: '61%',
                    objectFit: 'cover',
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    top: '49%',
                    left: '50%',
                    zIndex: 1,
                  }}
                />
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
                  mb: 0.5,
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2, sm: 2, md: 1.7, lg: 3 },
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
          <Grid item xs={12} sm={7} md={7} lg={4}>
            <DashboardCard title="Thông tin trợ lý">
              <Grid container sx={{ mt: { sm: '-20px', md: 0 } }}>
                <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
                  <Grid item xs={5}>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                      Ngày sinh
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography>11/08/2025</Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
                  <Grid item xs={5}>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                      Giới tính
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography>Nữ</Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
                  <Grid item xs={5}>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                      Quốc gia
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography>Việt Nam</Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
                  <Grid item xs={5}>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                      Ngôn ngữ
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography>Tiếng Việt</Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
                  <Grid item xs={5}>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                      Vị trí nghề nghiệp
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography>Đại học</Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
                  <Grid item xs={5}>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                      Chuyên môn
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={7} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    <Chip label="Tương tác đa phương tiện" color="primary" sx={{ px: 1 }} />
                    <Chip label="Phân tích dữ liệu và báo cáo" color="error" sx={{ px: 1 }} />
                    <Chip label="Hỗ trợ đa ngôn ngữ" color="warning" sx={{ px: 1 }} />
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
                  <Grid item xs={5}>
                    <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                      Tính cách
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={7} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    <Chip variant="outlined" label="Vui vẻ" color="primary" sx={{ px: 1 }} />
                    <Chip variant="outlined" label="Tận tâm" color="error" sx={{ px: 1 }} />
                    <Chip variant="outlined" label="Cởi mở" color="warning" sx={{ px: 1 }} />
                    <Chip variant="outlined" label="Thân thiện" color="success" sx={{ px: 1 }} />
                    <Chip variant="outlined" label="Hướng ngoại" color="default" sx={{ px: 1 }} />
                  </Grid>
                </Grid>
              </Grid>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Grid container spacing={3}>
              {topcards.map((topcard, i) => (
                <Grid item xs={12} sm={4} lg={6} key={i}>
                  <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
                    <CardContent sx={{}}>
                      <img
                        src={topcard.icon}
                        alt={topcard.icon}
                        width="50"
                        style={{ objectFit: 'cover' }}
                      />
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
                          ? ''
                          : topcard.title == 'GMV'
                          ? ''
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
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Modarm title="Nguồn khách hàng " text="Nguồn khách hàng" description="">
              <Chart
                options={optionsdoughnutchart}
                series={seriespiechart}
                type="donut"
                height="330px"
              />
            </Modarm>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <DashboardCard>
              <Box>
                <Box sx={{ marginTop: '0px' }}>
                  <Typography variant="h4">Báo cáo công việc</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mt: '5px',
                    }}
                  >
                    <CustomSelect
                      labelId="month-dd"
                      id="month-dd"
                      size="small"
                      value={month}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Doanh thu</MenuItem>
                      <MenuItem value={2}>Khách hàng </MenuItem>
                      <MenuItem value={3}>Đơn Hàng </MenuItem>
                    </CustomSelect>
                    <Box style={{ width: '60%' }} display={'flex'} alignItems={'center'} gap="5px">
                      {' '}
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(props) => (
                            <CustomTextField
                              {...props}
                              fullWidth
                              size="small"
                              sx={{
                                '& .MuiSvgIcon-root': {
                                  width: '18px',
                                  height: '18px',
                                },
                                '& .MuiFormHelperText-root': {
                                  display: 'none',
                                },
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                      tới
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={value1}
                          onChange={(newValue) => {
                            setValue1(newValue);
                          }}
                          renderInput={(props) => (
                            <CustomTextField
                              {...props}
                              fullWidth
                              size="small"
                              sx={{
                                '& .MuiSvgIcon-root': {
                                  width: '18px',
                                  height: '18px',
                                },
                                '& .MuiFormHelperText-root': {
                                  display: 'none',
                                },
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Box>
                </Box>
                <Chart
                  options={optionsgredientchart}
                  series={seriesgredientchart}
                  type="line"
                  height="300px"
                />
              </Box>
            </DashboardCard>
          </Grid>
          {/* column */}
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper
              sx={{ bgcolor: 'primary.main', border: `1px solid ${borderColor}` }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h5" color="white">
                  Trang bị trợ lý
                </Typography>
                <Typography variant="subtitle1" color="white">
                  Cấu hình
                </Typography>

                <Box textAlign="center" mt={2} mb="-90px">
                  <img src={SavingsImg} alt={SavingsImg} width={'300px'} />
                </Box>
              </CardContent>
              <Paper sx={{ overflow: 'hidden', zIndex: '1', position: 'relative', margin: '10px' }}>
                <Box p={3}>
                  <Stack spacing={3}>
                    {sellss.map((sell: any, i: number) => (
                      <Box key={i}>
                        <Stack
                          direction="row"
                          spacing={2}
                          mb={1}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box>
                            <Typography variant="h6">{sell.product}</Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                              {sell.parameter}
                              {sell.product == 'File'
                                ? 'file'
                                : sell.product == 'Dung lượng'
                                ? 'MB'
                                : ''}
                            </Typography>
                          </Box>
                          <Chip
                            sx={{
                              backgroundColor:
                                sell.color === 'primary' ? primarylight : secondarylight,
                              color: sell.color === 'primary' ? primary : secondary,
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
                          color={sell.color}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <DashboardCard title="Function " subtitle="Function được trang bị cho trợ lý">
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
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
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
          </Grid>
          {/* column */}
          <Grid item xs={12} md={8} lg={8}>
            <DashboardCard>
              <Box>
                <Box sx={{ marginTop: '-15px' }}>
                  <Typography variant="h4">Báo cáo chi tiêu trợ lý</Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mt: '5px',
                    }}
                  >
                    <CustomSelect
                      labelId="month-dd"
                      id="month-dd"
                      size="small"
                      value={month}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Danh thu</MenuItem>
                      <MenuItem value={2}>Khách hàng </MenuItem>
                      <MenuItem value={3}>Đơn Hàng </MenuItem>
                    </CustomSelect>
                    <Box style={{ width: '60%' }} display={'flex'} alignItems={'center'} gap="5px">
                      {' '}
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(props) => (
                            <CustomTextField
                              {...props}
                              fullWidth
                              size="small"
                              sx={{
                                '& .MuiSvgIcon-root': {
                                  width: '18px',
                                  height: '18px',
                                },
                                '& .MuiFormHelperText-root': {
                                  display: 'none',
                                },
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                      tới
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={value1}
                          onChange={(newValue) => {
                            setValue1(newValue);
                          }}
                          renderInput={(props) => (
                            <CustomTextField
                              {...props}
                              fullWidth
                              size="small"
                              sx={{
                                '& .MuiSvgIcon-root': {
                                  width: '18px',
                                  height: '18px',
                                },
                                '& .MuiFormHelperText-root': {
                                  display: 'none',
                                },
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Box>
                </Box>
                <Chart
                  options={optionsgredientchart2}
                  series={seriesgredientchart2}
                  type="line"
                  height="300px"
                />
              </Box>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Affilatec3 title="Tỉ trọng chi phí /vòng quay" text="Chi phí / vòng quay">
              <Chart
                options={optionsradialchart}
                series={seriesradialchart}
                type="radialBar"
                height="300px"
              />
            </Affilatec3>
          </Grid>{' '}
          {/* column */}
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Affilatec title="Tỉ trọng chi phí /doanh thu " text="Chi phí / doanh thu">
              <Chart
                options={optionsdoughnutchart}
                series={seriesdoughnutchart}
                type="donut"
                height="300px"
              />
            </Affilatec>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Affilatec1 title=" Đơn hàng" text="Đơn hàng">
              <Chart
                options={optionsdoughnutchart3}
                series={seriesdoughnutchart3}
                type="donut"
                height="300px"
              />
            </Affilatec1>
          </Grid>{' '}
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Affilatec2 title="Cuộc trò chuyện" text="Hội thoại">
              <Chart
                options={optionsdoughnutchart4}
                series={seriesdoughnutchart4}
                type="donut"
                height="300px"
                // style={{ position: 'relative' }}
              />
            </Affilatec2>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default AssistantInfor;
