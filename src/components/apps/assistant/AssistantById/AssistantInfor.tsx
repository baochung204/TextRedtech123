// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import {
  Typography,
  Grid,
  Box,
  Stack,
  Chip,
  TextField,
  InputAdornment,
  Card,
  LinearProgress,
  Paper,
  Tooltip,
  Button,
  Avatar,
  Autocomplete,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import PageContainer from 'src/components/container/PageContainer';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import { IconSearch } from '@tabler/icons-react';
// import BlankCard from '../../shared/BlankCard';

import avt1 from 'src/assets/images/profile/user-1.jpg';

import Chart from 'react-apexcharts';

import { Props } from 'react-apexcharts';
import { IconArrowUpRight } from '@tabler/icons-react';

import icon1 from 'src/assets/images/svgs/icon-bars.svg';
import DashboardCard from 'src/components/shared/DashboardCard';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';

interface sellsData {
  product: string;
  price: string;
  percent: number;
  color: string;
}

const sells: sellsData[] = [
  {
    product: 'Kinh nghiệm',
    total: '23,568',
    percent: 90,
    color: 'secondary',
  },
];
interface Irank {
  id: string;

  avatar: string;
  fullName: string;
  model: string;
  gmv: number;
  aov: number;
  cc: number;
  oc: number;
  ex: number;
  sale: number;
}
const dataRank: Irank[] = [
  {
    id: '0',
    fullName: 'Chatbot Marketing',
    avatar: avt1,
    model: 'GPT-4-TURBOR',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 20,
  },
];
interface ITopRank {
  title: string;
}
const top10rank: ITopRank[] = [
  { title: 'Rank 1' },
  { title: 'Rank 2' },
  { title: 'Rank 3' },
  { title: 'Rank 4' },
  { title: 'Rank 5' },
  { title: 'Rank 6' },
  { title: 'Rank 7' },
  { title: 'Rank 8' },
  { title: 'Rank 9' },
  { title: 'Rank 10' },
];

const AssistantInfor = () => {
  const theme = useTheme();
  const [isLoading, setLoading] = React.useState(true);
  // chart color
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: Props = {
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
  const seriescolumnchart = [
    {
      name: '',
      data: [0, 10, 10, 10, 35, 45, 30, 30, 30, 50, 52, 30, 25, 45, 50, 80, 60, 65],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageContainer title="User Profile" description="this is User Profile page">
      <Grid item sm={12}>
        <Grid item sm={12} lg={12}>
          <Stack
            direction="row"
            alignItems="center"
            mt={2}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box>
              <Typography variant="h3">
                Chi tiết trợ lý &nbsp;
                <Chip label="20" color="secondary" size="small" />
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', width: '50%', gap: 2 }}>
              <Box
                sx={{
                  ml: { xs: 'auto', sm: 0 },
                  width: { xs: '50%', sm: '50%' },
                }}
              >
                {' '}
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={top10rank}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <CustomCheckbox style={{ marginRight: 8 }} checked={selected} />
                      {option.title}
                    </li>
                  )}
                  fullWidth
                  renderInput={(params) => (
                    <CustomTextField {...params} placeholder="Favorites" aria-label="Favorites" />
                  )}
                  size="small"
                />
              </Box>
              <Box
                sx={{
                  ml: { xs: 'auto', sm: 0 },
                  width: { xs: '50%', sm: '50%' },
                }}
              >
                {' '}
                <TextField
                  id="outlined-search"
                  placeholder="Search Followers"
                  size="small"
                  type="search"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Search Followers' }}
                  sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconSearch size="14" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth={true}
                />
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid container mt={2} spacing={1}>
          {dataRank?.map((rank, index) => (
            <Grid item xs={12} sm={12} md={12} key={index}>
              <Card sx={{ display: 'flex', p: { sm: 2 } }}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    width: { xs: '280px', sm: '380px', md: '420px', lg: '370px' },
                    height: { xs: '90px', sm: '230px', md: '240px', lg: '220px' },
                    px: 2,
                    py: 1,
                  }}
                >
                  <img
                    src={rank.avatar}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'fill',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '47%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      width: { xs: '20%', sm: '40%', md: '40%', lg: '40%' },
                      height: { xs: '20%', sm: '40%', md: '40%', lg: '40%' },
                    }}
                  ></Box>
                  <Box sx={{ textAlign: 'center', mt: { md: 2 } }}>
                    <Typography
                      variant="h6"
                      mb={0.5}
                      sx={{ fontSize: { xs: '12px', sm: '16px', md: '18px', lg: '18px' } }}
                    >
                      {rank.fullName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mb={0.5}
                      sx={{ fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '14px' } }}
                    >
                      {rank.model}
                    </Typography>
                  </Box>
                  <Grid container columnSpacing={1} sx={{ mt: { sm: 1.5, md: 2 } }}>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          width: '100%',
                          fontSize: { xs: '10px', sm: '12px', md: '14px' },
                          px: { xs: '5px', sm: '8px', md: '12px' },
                        }}
                      >
                        Sửa
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{
                          width: '100%',
                          fontSize: { xs: '10px', sm: '12px', md: '14px' },
                          px: { xs: '5px', sm: '8px', md: '12px' },
                        }}
                      >
                        Chi tiết
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ width: '100%', px: 2, py: 1 }}>
                  <Box>
                    <Grid container columnSpacing={2} sx={{ mt: 2 }}>
                      <Grid item xs={12} sm={6} md={6}>
                        {/* <Growth /> */}
                        <DashboardCard>
                          <Box sx={{ p: 0 }}>
                            <Box
                              bgcolor="secondary.light"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              sx={{
                                width: { md: '30px', lg: '38px' },
                                height: { md: '30px ', lg: '38px' },
                                p: 0,
                              }}
                            >
                              <Avatar
                                src={icon1}
                                alt="img"
                                sx={{ width: { md: '20px' }, height: { md: '20px ' } }}
                              />
                            </Box>
                            <Box mt={3} mb={2}>
                              <Chart
                                options={optionscolumnchart}
                                series={seriescolumnchart}
                                type="area"
                                height="25px"
                              />
                            </Box>
                            <Typography variant="h4">
                              {rank.sale}%
                              <span>
                                <IconArrowUpRight width={18} color="#39B69A" />
                              </span>
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                              Sale
                            </Typography>
                          </Box>
                        </DashboardCard>
                      </Grid>
                      <Grid item xs={12} sm={6} spacing={2}>
                        <Grid container rowSpacing={'21px'}>
                          <Grid item xs={12}>
                            <Tooltip title="Tổng giá trị hàng hóa" placement="top">
                              <Button variant="outlined" color="primary" sx={{ width: '100%' }}>
                                GMV: {rank.gmv}
                              </Button>
                            </Tooltip>
                          </Grid>
                          <Grid item xs={12}>
                            <Tooltip title="Giá trị trung bình trên một đơn hàng" placement="top">
                              <Button variant="outlined" color="secondary" sx={{ width: '100%' }}>
                                AOV: {rank.aov}
                              </Button>
                            </Tooltip>
                          </Grid>
                          <Grid item xs={12}>
                            <Tooltip title="Số lượng khách hàng" placement="top">
                              <Button variant="outlined" color="error" sx={{ width: '100%' }}>
                                CC: {rank.cc}
                              </Button>
                            </Tooltip>
                          </Grid>
                          <Grid item xs={12}>
                            <Tooltip title="Số lượng đơn hàng" placement="top">
                              <Button variant="outlined" color="warning" sx={{ width: '100%' }}>
                                OC:{rank.oc}
                              </Button>
                            </Tooltip>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Paper
                      sx={{
                        overflow: 'hidden',
                        zIndex: '1',
                        position: 'relative',
                        mt: 1,
                      }}
                    >
                      <Box sx={{ p: { sm: 1, md: 1.7, lg: 2 } }}>
                        <Stack spacing={3}>
                          {sells.map((sell: any, i: number) => (
                            <Box>
                              <Stack
                                direction="row"
                                mb={1}
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
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AssistantInfor;
